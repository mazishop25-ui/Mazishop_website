from fastapi import FastAPI, APIRouter, HTTPException, Depends, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone, timedelta
import jwt
from passlib.context import CryptContext

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Security
security = HTTPBearer()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
SECRET_KEY = os.environ.get('JWT_SECRET_KEY', 'mazishop-secret-key-change-in-production')
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 1440  # 24 hours

# Define Models
class Lead(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: str
    location: str
    inquiry_type: str  # "Seller", "Delivery", "Contact", "General"
    message: Optional[str] = None
    company: Optional[str] = None
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class LeadCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    location: str
    inquiry_type: str
    message: Optional[str] = None
    company: Optional[str] = None

class AdminUser(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    username: str
    email: EmailStr
    hashed_password: str
    role: str = "admin"
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class AdminLogin(BaseModel):
    username: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str
    user: dict

class LeadStats(BaseModel):
    total_leads: int
    seller_leads: int
    delivery_leads: int
    contact_leads: int
    general_leads: int
    today_leads: int

# Helper functions
def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

async def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    try:
        token = credentials.credentials
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise HTTPException(status_code=401, detail="Invalid authentication credentials")
        return payload
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token has expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")

# Routes
@api_router.get("/")
async def root():
    return {"message": "Mazishop API Server"}

@api_router.post("/leads", response_model=Lead)
async def create_lead(input: LeadCreate):
    """Submit a new lead from any form"""
    lead_obj = Lead(**input.model_dump())
    
    doc = lead_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    await db.leads.insert_one(doc)
    return lead_obj

@api_router.get("/leads", response_model=List[Lead])
async def get_all_leads(current_user: dict = Depends(get_current_user)):
    """Get all leads (admin only)"""
    leads = await db.leads.find({}, {"_id": 0}).sort("timestamp", -1).to_list(1000)
    
    for lead in leads:
        if isinstance(lead['timestamp'], str):
            lead['timestamp'] = datetime.fromisoformat(lead['timestamp'])
    
    return leads

@api_router.get("/leads/stats", response_model=LeadStats)
async def get_lead_stats(current_user: dict = Depends(get_current_user)):
    """Get lead statistics (admin only)"""
    total_leads = await db.leads.count_documents({})
    seller_leads = await db.leads.count_documents({"inquiry_type": "Seller"})
    delivery_leads = await db.leads.count_documents({"inquiry_type": "Delivery"})
    contact_leads = await db.leads.count_documents({"inquiry_type": "Contact"})
    general_leads = await db.leads.count_documents({"inquiry_type": "General"})
    
    today_start = datetime.now(timezone.utc).replace(hour=0, minute=0, second=0, microsecond=0)
    today_leads = await db.leads.count_documents({
        "timestamp": {"$gte": today_start.isoformat()}
    })
    
    return LeadStats(
        total_leads=total_leads,
        seller_leads=seller_leads,
        delivery_leads=delivery_leads,
        contact_leads=contact_leads,
        general_leads=general_leads,
        today_leads=today_leads
    )

@api_router.post("/admin/login", response_model=Token)
async def admin_login(credentials: AdminLogin):
    """Admin login"""
    admin = await db.admin_users.find_one({"username": credentials.username}, {"_id": 0})
    
    if not admin or not pwd_context.verify(credentials.password, admin['hashed_password']):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": admin['username'], "role": admin['role']}, 
        expires_delta=access_token_expires
    )
    
    return Token(
        access_token=access_token,
        token_type="bearer",
        user={
            "username": admin['username'],
            "email": admin['email'],
            "role": admin['role']
        }
    )

@api_router.post("/admin/setup")
async def setup_admin():
    """Setup default admin user (for initial setup only)"""
    existing_admin = await db.admin_users.find_one({"username": "admin"})
    
    if existing_admin:
        return {"message": "Admin user already exists"}
    
    hashed_password = pwd_context.hash("admin123")
    admin_user = AdminUser(
        username="admin",
        email="admin@mazishop.com",
        hashed_password=hashed_password
    )
    
    doc = admin_user.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    await db.admin_users.insert_one(doc)
    return {"message": "Admin user created successfully", "username": "admin", "password": "admin123"}

@api_router.get("/admin/verify")
async def verify_admin(current_user: dict = Depends(get_current_user)):
    """Verify admin token"""
    return {"valid": True, "user": current_user}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
