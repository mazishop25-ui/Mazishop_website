import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Bike, DollarSign, Clock, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const DeliveryPartner = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
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
        inquiry_type: 'Delivery'
      });
      toast.success('Application submitted successfully! We\'ll contact you soon.');
      setFormData({ name: '', email: '', phone: '', location: '', message: '' });
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
      <section className="py-24 md:py-32 bg-gradient-to-br from-orange-50 to-white" data-testid="delivery-hero">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }} data-testid="delivery-heading">
                Join as a <span className="text-orange-500">Delivery Partner</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Be your own boss. Earn on your schedule. Deliver with Mazishop.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-700">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                  <span>Flexible working hours</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                  <span>Competitive earnings</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                  <span>Weekly payouts</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <img 
                src="https://images.pexels.com/photos/4393245/pexels-photo-4393245.jpeg" 
                alt="Delivery partner with package"
                className="rounded-3xl shadow-2xl w-full"
                data-testid="delivery-hero-image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24" data-testid="delivery-benefits">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Why Deliver with Us?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                <DollarSign className="text-orange-500" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Earn More</h3>
              <p className="text-slate-600 leading-relaxed">Competitive pay per delivery plus tips and bonuses</p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="text-blue-500" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Flexible Hours</h3>
              <p className="text-slate-600 leading-relaxed">Work when you want, as much as you want</p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <Bike className="text-green-500" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Easy to Start</h3>
              <p className="text-slate-600 leading-relaxed">Simple onboarding process, start earning quickly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-24 bg-white" data-testid="delivery-requirements">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Requirements</h2>
            <p className="text-lg text-slate-600" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>What you need to join</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Age</h3>
              <p className="text-slate-600">Must be 18 years or older</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Vehicle</h3>
              <p className="text-slate-600">Own a bike, scooter, or bicycle</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="font-semibold text-slate-900 mb-2">License</h3>
              <p className="text-slate-600">Valid driving license (for motorized vehicles)</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Smartphone</h3>
              <p className="text-slate-600">Android or iOS device for the delivery app</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24" data-testid="delivery-form-section">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Apply to Join</h2>
            <p className="text-lg text-slate-600" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Start your journey with Mazishop today</p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-slate-200 p-8 shadow-lg" data-testid="delivery-form">
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
                  data-testid="delivery-name-input"
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
                  data-testid="delivery-email-input"
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
                  data-testid="delivery-phone-input"
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
                  data-testid="delivery-location-input"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="message">Additional Information (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-white border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 rounded-xl transition-all px-4 py-3"
                  placeholder="Tell us about your vehicle, availability, etc."
                  data-testid="delivery-message-input"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 text-white hover:bg-orange-600 rounded-full px-8 py-4 text-lg font-medium transition-all hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                data-testid="delivery-submit-button"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Questions about becoming a delivery partner?</p>
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

export default DeliveryPartner;
