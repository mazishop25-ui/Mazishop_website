import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ShoppingCart, Store, BarChart, Tabs, TabsList, TabsTrigger, TabsContent } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState('customer');

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      
      {/* Hero */}
      <section className="py-24 md:py-32" data-testid="how-it-works-hero">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-6" 
            style={{ fontFamily: 'Outfit, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            data-testid="how-it-works-heading"
          >
            How Mazishop Works
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-600 leading-relaxed" 
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            data-testid="how-it-works-description"
          >
            A seamless experience designed for customers, sellers, and administrators
          </motion.p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-12 md:py-24" data-testid="tabs-section">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12" data-testid="tab-buttons">
            <button
              onClick={() => setActiveTab('customer')}
              className={`px-8 py-4 rounded-full text-lg font-medium transition-all ${
                activeTab === 'customer'
                  ? 'bg-slate-900 text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
              data-testid="tab-customer"
            >
              For Customers
            </button>
            <button
              onClick={() => setActiveTab('seller')}
              className={`px-8 py-4 rounded-full text-lg font-medium transition-all ${
                activeTab === 'seller'
                  ? 'bg-slate-900 text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
              data-testid="tab-seller"
            >
              For Sellers
            </button>
            <button
              onClick={() => setActiveTab('admin')}
              className={`px-8 py-4 rounded-full text-lg font-medium transition-all ${
                activeTab === 'admin'
                  ? 'bg-slate-900 text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
              data-testid="tab-admin"
            >
              Admin & Management
            </button>
          </div>

          {/* Customer Tab Content */}
          {activeTab === 'customer' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
              data-testid="customer-content"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <ShoppingCart className="text-blue-500" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Customer Experience</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Browse Products</h3>
                      <p className="text-slate-600 leading-relaxed">Explore thousands of products from verified sellers across multiple categories</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Add to Cart</h3>
                      <p className="text-slate-600 leading-relaxed">Select items from multiple sellers and add them to your cart</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Secure Checkout</h3>
                      <p className="text-slate-600 leading-relaxed">Complete your purchase with multiple payment options</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Track Order</h3>
                      <p className="text-slate-600 leading-relaxed">Real-time tracking of your orders from warehouse to doorstep</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Receive & Review</h3>
                      <p className="text-slate-600 leading-relaxed">Get your products delivered and share your feedback</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Seller Tab Content */}
          {activeTab === 'seller' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
              data-testid="seller-content"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                  <Store className="text-orange-500" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Seller Journey</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Register Your Store</h3>
                      <p className="text-slate-600 leading-relaxed">Sign up with basic business information and get verified quickly</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">List Products</h3>
                      <p className="text-slate-600 leading-relaxed">Add product details, images, pricing, and inventory information</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Manage Orders</h3>
                      <p className="text-slate-600 leading-relaxed">Receive orders and prepare them for shipping</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Ship & Deliver</h3>
                      <p className="text-slate-600 leading-relaxed">Hand over to delivery partners or use your own logistics</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Receive Payments</h3>
                      <p className="text-slate-600 leading-relaxed">Get paid directly to your bank account on a regular schedule</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">6</div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Grow Your Business</h3>
                      <p className="text-slate-600 leading-relaxed">Use analytics and insights to optimize your sales and reach</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Admin Tab Content */}
          {activeTab === 'admin' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
              data-testid="admin-content"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <BarChart className="text-purple-500" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Platform Management</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Dashboard Overview</h3>
                      <p className="text-slate-600 leading-relaxed">Monitor platform health, sales metrics, and user activity in real-time</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Seller Verification</h3>
                      <p className="text-slate-600 leading-relaxed">Review and approve new seller registrations to maintain quality</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Order Management</h3>
                      <p className="text-slate-600 leading-relaxed">Track all orders, handle disputes, and ensure smooth operations</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Analytics & Reports</h3>
                      <p className="text-slate-600 leading-relaxed">Generate detailed reports on sales, revenue, and growth metrics</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Support Management</h3>
                      <p className="text-slate-600 leading-relaxed">Handle customer queries, seller support, and platform issues</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">6</div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Platform Optimization</h3>
                      <p className="text-slate-600 leading-relaxed">Continuously improve features and user experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
