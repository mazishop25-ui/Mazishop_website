import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Users, Package, Truck, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [leads, setLeads] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    fetchData();
  }, [navigate]);

  const fetchData = async () => {
    const token = localStorage.getItem('adminToken');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    try {
      const [statsRes, leadsRes] = await Promise.all([
        axios.get(`${BACKEND_URL}/api/leads/stats`, config),
        axios.get(`${BACKEND_URL}/api/leads`, config)
      ]);
      setStats(statsRes.data);
      setLeads(leadsRes.data);
    } catch (error) {
      if (error.response?.status === 401) {
        toast.error('Session expired. Please login again.');
        handleLogout();
      } else {
        toast.error('Failed to fetch data');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/admin/login');
  };

  const filteredLeads = filter === 'all' 
    ? leads 
    : leads.filter(lead => lead.inquiry_type === filter);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-slate-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50" data-testid="admin-dashboard">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_mazishop-landing/artifacts/rf8wfc2w_Logo.jpeg" 
                alt="Mazishop Logo" 
                className="h-12 w-auto"
                data-testid="dashboard-logo"
              />
              <h1 className="text-2xl font-bold text-slate-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Admin Dashboard</h1>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900 px-4 py-2 hover:bg-slate-100 rounded-lg transition-colors"
              data-testid="logout-button"
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12" data-testid="stats-grid">
          <div className="bg-white rounded-2xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="text-blue-500" size={20} />
              </div>
              <span className="text-sm font-medium text-slate-600">Total Leads</span>
            </div>
            <div className="text-3xl font-bold text-slate-900" data-testid="total-leads">{stats?.total_leads || 0}</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Package className="text-orange-500" size={20} />
              </div>
              <span className="text-sm font-medium text-slate-600">Seller Leads</span>
            </div>
            <div className="text-3xl font-bold text-slate-900" data-testid="seller-leads">{stats?.seller_leads || 0}</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Truck className="text-green-500" size={20} />
              </div>
              <span className="text-sm font-medium text-slate-600">Delivery Leads</span>
            </div>
            <div className="text-3xl font-bold text-slate-900" data-testid="delivery-leads">{stats?.delivery_leads || 0}</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Mail className="text-purple-500" size={20} />
              </div>
              <span className="text-sm font-medium text-slate-600">Contact Leads</span>
            </div>
            <div className="text-3xl font-bold text-slate-900" data-testid="contact-leads">{stats?.contact_leads || 0}</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Calendar className="text-indigo-500" size={20} />
              </div>
              <span className="text-sm font-medium text-slate-600">Today's Leads</span>
            </div>
            <div className="text-3xl font-bold text-slate-900" data-testid="today-leads">{stats?.today_leads || 0}</div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
              data-testid="filter-all"
            >
              All ({leads.length})
            </button>
            <button
              onClick={() => setFilter('Seller')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === 'Seller'
                  ? 'bg-slate-900 text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
              data-testid="filter-seller"
            >
              Sellers ({stats?.seller_leads || 0})
            </button>
            <button
              onClick={() => setFilter('Delivery')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === 'Delivery'
                  ? 'bg-slate-900 text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
              data-testid="filter-delivery"
            >
              Delivery ({stats?.delivery_leads || 0})
            </button>
            <button
              onClick={() => setFilter('Contact')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === 'Contact'
                  ? 'bg-slate-900 text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
              data-testid="filter-contact"
            >
              Contact ({stats?.contact_leads || 0})
            </button>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden" data-testid="leads-table">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Phone</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Location</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Company</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Message</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="px-6 py-12 text-center text-slate-500">
                      No leads found
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map((lead, index) => (
                    <tr key={lead.id || index} className="border-b border-slate-100 hover:bg-slate-50" data-testid={`lead-row-${index}`}>
                      <td className="px-6 py-4 text-sm text-slate-600">{formatDate(lead.timestamp)}</td>
                      <td className="px-6 py-4 text-sm font-medium text-slate-900">{lead.name}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        <a href={`mailto:${lead.email}`} className="hover:text-orange-500">{lead.email}</a>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        <a href={`tel:${lead.phone}`} className="hover:text-orange-500">{lead.phone}</a>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">{lead.location}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${
                          lead.inquiry_type === 'Seller' ? 'bg-orange-100 text-orange-700' :
                          lead.inquiry_type === 'Delivery' ? 'bg-green-100 text-green-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {lead.inquiry_type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">{lead.company || '-'}</td>
                      <td className="px-6 py-4 text-sm text-slate-600 max-w-xs truncate">{lead.message || '-'}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
