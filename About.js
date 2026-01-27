import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Target, Eye, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      
      {/* Hero */}
      <section className="py-24 md:py-32" data-testid="about-hero">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-6" 
            style={{ fontFamily: 'Outfit, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            data-testid="about-heading"
          >
            About Mazishop
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-600 leading-relaxed" 
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            data-testid="about-description"
          >
            We're building India's most trusted multi-seller marketplace, empowering businesses of all sizes to reach millions of customers.
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-white" data-testid="vision-mission-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="bg-orange-50 rounded-3xl p-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              data-testid="vision-card"
            >
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Our Vision</h2>
              <p className="text-lg text-slate-700 leading-relaxed" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                To create a seamless e-commerce ecosystem where every Indian business, from small shops to large enterprises, can thrive and reach customers nationwide with ease.
              </p>
            </motion.div>
            <motion.div 
              className="bg-blue-50 rounded-3xl p-12"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              data-testid="mission-card"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Our Mission</h2>
              <p className="text-lg text-slate-700 leading-relaxed" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                To democratize e-commerce by providing powerful, easy-to-use tools that help sellers grow their business while delivering exceptional shopping experiences to customers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32" data-testid="values-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Our Values</h2>
            <p className="text-xl text-slate-600" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>What drives us every day</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-center"
              whileHover={{ y: -5 }}
              data-testid="value-trust"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-green-500" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Trust</h3>
              <p className="text-slate-600 leading-relaxed">Building lasting relationships through transparency and reliability</p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-center"
              whileHover={{ y: -5 }}
              data-testid="value-innovation"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-purple-500" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Innovation</h3>
              <p className="text-slate-600 leading-relaxed">Constantly evolving to meet the needs of modern commerce</p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-center"
              whileHover={{ y: -5 }}
              data-testid="value-community"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-orange-500" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Community</h3>
              <p className="text-slate-600 leading-relaxed">Growing together as a family of sellers, partners, and customers</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white" data-testid="story-section">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center" style={{ fontFamily: 'Outfit, sans-serif' }}>Our Story</h2>
          <div className="prose prose-lg max-w-none" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            <p className="text-slate-600 leading-relaxed mb-6">
              Founded in Nagpur, Maharashtra, Mazishop was born from a simple observation: small and medium businesses in India needed a platform that truly understood their needs. We saw talented sellers struggling with complex systems, high fees, and lack of support.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Today, Mazishop connects hundreds of sellers with millions of customers across 25+ cities in India. We've processed over 50,000 orders and helped countless businesses grow beyond their local markets.
            </p>
            <p className="text-slate-600 leading-relaxed">
              But we're just getting started. Every day, we work to make e-commerce more accessible, more efficient, and more rewarding for everyone in our ecosystem – from sellers to delivery partners to customers.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
