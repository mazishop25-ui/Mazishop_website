import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Store, TrendingUp, Users, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const SellerOnboarding = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(`${BACKEND_URL}/api/leads`, {
        ...formData,
        inquiry_type: 'Seller'
      });
      toast.success('Application submitted successfully! We\'ll contact you soon.');
      setFormData({ name: '', email: '', phone: '', location: '', company: '', message: '' });
    } catch (error) {
      toast.error('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      
      {/* Hero */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-orange-50 to-white" data-testid="seller-hero">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }} data-testid="seller-heading">
                Start Selling on Mazishop
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Join thousands of successful sellers and grow your business nationwide.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-700">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                  <span>No registration fees</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                  <span>Reach millions of customers</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                  <span>Easy-to-use seller dashboard</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <img 
                src="https://images.pexels.com/photos/4473351/pexels-photo-4473351.jpeg" 
                alt="Happy shopkeeper"
                className="rounded-3xl shadow-2xl w-full"
                data-testid="seller-hero-image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24" data-testid="seller-benefits">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Why Sell on Mazishop?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                <Store className="text-orange-500" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Easy Setup</h3>
              <p className="text-slate-600 leading-relaxed">Get your store online in minutes with our simple onboarding process</p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="text-green-500" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Growth Tools</h3>
              <p className="text-slate-600 leading-relaxed">Access powerful analytics and marketing tools to boost sales</p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Users className="text-blue-500" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Dedicated Support</h3>
              <p className="text-slate-600 leading-relaxed">Get help from our seller support team whenever you need it</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 bg-white" data-testid="seller-form-section">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Apply to Become a Seller</h2>
            <p className="text-lg text-slate-600" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Fill out the form below and our team will get back to you</p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-slate-200 p-8 shadow-lg" data-testid="seller-form">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 w-full bg-white border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 rounded-xl transition-all px-4"
                  data-testid="seller-name-input"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12 w-full bg-white border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 rounded-xl transition-all px-4"
                  data-testid="seller-email-input"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="h-12 w-full bg-white border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 rounded-xl transition-all px-4"
                  data-testid="seller-phone-input"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="location">Location/City *</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="h-12 w-full bg-white border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 rounded-xl transition-all px-4"
                  data-testid="seller-location-input"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="company">Business/Company Name *</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="h-12 w-full bg-white border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 rounded-xl transition-all px-4"
                  data-testid="seller-company-input"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="message">Tell us about your business (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-white border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 rounded-xl transition-all px-4 py-3"
                  data-testid="seller-message-input"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-slate-900 text-white hover:bg-slate-800 rounded-full px-8 py-4 text-lg font-medium transition-all hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/20 disabled:opacity-50 disabled:cursor-not-allowed"
                data-testid="seller-submit-button"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Have questions? Contact us:</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="mailto:mazishop25@gmail.com" className="flex items-center gap-2 text-slate-700 hover:text-orange-500">
                <Mail size={18} />
                mazishop25@gmail.com
              </a>
              <a href="tel:+917745800792" className="flex items-center gap-2 text-slate-700 hover:text-orange-500">
                <Phone size={18} />
                +91 7745800792
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SellerOnboarding;
