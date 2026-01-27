import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Package, TrendingUp, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32" data-testid="hero-section">
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-100/50 via-blue-50/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }} data-testid="hero-heading">
                India's Multi-Seller
                <span className="text-orange-500"> Marketplace</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} data-testid="hero-description">
                Connect with thousands of sellers and millions of buyers. Scale your business with Mazishop's trusted platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/seller-onboarding" 
                  className="bg-slate-900 text-white hover:bg-slate-800 rounded-full px-8 py-6 text-lg font-medium transition-all hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/20 inline-flex items-center justify-center gap-2"
                  data-testid="hero-cta-seller"
                >
                  Start Selling Today
                  <ArrowRight size={20} />
                </Link>
                <Link 
                  to="/delivery-partner" 
                  className="bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 rounded-full px-8 py-6 text-lg font-medium transition-all hover:border-slate-300 shadow-sm inline-flex items-center justify-center"
                  data-testid="hero-cta-delivery"
                >
                  Become a Delivery Partner
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/4473351/pexels-photo-4473351.jpeg" 
                alt="Happy shopkeeper with tablet"
                className="rounded-3xl shadow-2xl w-full"
                data-testid="hero-image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-white border-y border-slate-200" data-testid="trust-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2" data-testid="stat-sellers">500+</div>
              <div className="text-slate-600">Active Sellers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2" data-testid="stat-products">10K+</div>
              <div className="text-slate-600">Products</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2" data-testid="stat-orders">50K+</div>
              <div className="text-slate-600">Orders Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2" data-testid="stat-cities">25+</div>
              <div className="text-slate-600">Cities Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 md:py-32" data-testid="how-it-works-preview">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>How It Works</h2>
            <p className="text-xl text-slate-600" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Simple steps to success</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1"
              whileHover={{ y: -5 }}
              data-testid="step-register"
            >
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                <Users className="text-orange-500" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Register</h3>
              <p className="text-slate-600 leading-relaxed">Sign up as a seller or delivery partner in minutes. No hidden fees.</p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1"
              whileHover={{ y: -5 }}
              data-testid="step-list"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Package className="text-blue-500" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">List & Sell</h3>
              <p className="text-slate-600 leading-relaxed">Add your products and start reaching millions of customers across India.</p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1"
              whileHover={{ y: -5 }}
              data-testid="step-grow"
            >
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="text-green-500" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Grow</h3>
              <p className="text-slate-600 leading-relaxed">Track analytics, manage orders, and scale your business with our tools.</p>
            </motion.div>
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/how-it-works" 
              className="text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 rounded-full px-6 py-4 inline-flex items-center gap-2 font-medium transition-all"
              data-testid="learn-more-link"
            >
              Learn More
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-24 md:py-32 bg-white" data-testid="features-highlight">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>Why Choose Mazishop?</h2>
              <p className="text-xl text-slate-600 mb-8" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Built for Indian businesses with powerful features and unwavering support.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3" data-testid="feature-secure">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Secure Payments</h4>
                    <p className="text-slate-600">Safe and fast payment processing with multiple payment options</p>
                  </div>
                </li>
                <li className="flex items-start gap-3" data-testid="feature-management">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Easy Management</h4>
                    <p className="text-slate-600">Intuitive dashboard to manage products, orders, and inventory</p>
                  </div>
                </li>
                <li className="flex items-start gap-3" data-testid="feature-support">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">24/7 Support</h4>
                    <p className="text-slate-600">Dedicated support team always ready to help you succeed</p>
                  </div>
                </li>
              </ul>
              <Link 
                to="/features" 
                className="mt-8 inline-flex items-center gap-2 text-slate-900 font-medium hover:gap-3 transition-all"
                data-testid="view-all-features-link"
              >
                View All Features
                <ArrowRight size={18} />
              </Link>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/4480797/pexels-photo-4480797.jpeg" 
                alt="Warehouse operations"
                className="rounded-3xl shadow-2xl w-full"
                data-testid="features-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-slate-900 text-white" data-testid="cta-section">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Outfit, sans-serif' }} data-testid="cta-heading">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-slate-300 mb-8" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} data-testid="cta-description">
            Join thousands of successful sellers and delivery partners on Mazishop today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/seller-onboarding" 
              className="bg-orange-500 text-white hover:bg-orange-600 rounded-full px-8 py-6 text-lg font-medium transition-all hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/20 inline-flex items-center justify-center gap-2"
              data-testid="cta-seller-button"
            >
              Become a Seller
              <ArrowRight size={20} />
            </Link>
            <Link 
              to="/contact" 
              className="bg-white text-slate-900 hover:bg-slate-100 rounded-full px-8 py-6 text-lg font-medium transition-all inline-flex items-center justify-center"
              data-testid="cta-contact-button"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
