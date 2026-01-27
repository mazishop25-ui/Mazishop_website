import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Contact = () => {
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
        inquiry_type: 'Contact'
      });
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', phone: '', location: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      
      {/* Hero */}
      <section className="py-24 md:py-32" data-testid="contact-hero">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-6" 
            style={{ fontFamily: 'Outfit, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            data-testid="contact-heading"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-600 leading-relaxed" 
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            data-testid="contact-description"
          >
            Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
          </motion.p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="pb-24" data-testid="contact-main-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-8" style={{ fontFamily: 'Outfit, sans-serif' }}>Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4" data-testid="contact-email">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <a href="mailto:mazishop25@gmail.com" className="text-slate-600 hover:text-orange-500">
                      mazishop25@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4" data-testid="contact-phone">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                    <a href="tel:+917745800792" className="text-slate-600 hover:text-blue-500">
                      +91 7745800792
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4" data-testid="contact-address">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-green-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Address</h3>
                    <p className="text-slate-600">
                      Mazi Shop Private Limited<br />
                      Nagpur, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-12 bg-slate-100 rounded-2xl p-6">
                <h3 className="font-semibold text-slate-900 mb-3">Business Hours</h3>
                <div className="space-y-2 text-slate-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-slate-200 p-8 shadow-lg" data-testid="contact-form">
                <h2 className="text-3xl font-bold text-slate-900 mb-8" style={{ fontFamily: 'Outfit, sans-serif' }}>Send us a Message</h2>
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
                      data-testid="contact-name-input"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
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
                        data-testid="contact-email-input"
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
                        data-testid="contact-phone-input"
                      />
                    </div>
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
                      data-testid="contact-location-input"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="message">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full bg-white border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 rounded-xl transition-all px-4 py-3"
                      placeholder="How can we help you?"
                      data-testid="contact-message-input"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-slate-900 text-white hover:bg-slate-800 rounded-full px-8 py-4 text-lg font-medium transition-all hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/20 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                    data-testid="contact-submit-button"
                  >
                    <Send size={20} />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
