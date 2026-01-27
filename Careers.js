import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Briefcase, Heart, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Careers = () => {
  const positions = [
    {
      title: 'Senior Backend Developer',
      department: 'Engineering',
      location: 'Nagpur, Maharashtra',
      type: 'Full-time'
    },
    {
      title: 'Frontend Developer (React)',
      department: 'Engineering',
      location: 'Nagpur, Maharashtra',
      type: 'Full-time'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Nagpur, Maharashtra',
      type: 'Full-time'
    },
    {
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'Nagpur, Maharashtra / Remote',
      type: 'Full-time'
    },
    {
      title: 'Customer Support Lead',
      department: 'Operations',
      location: 'Nagpur, Maharashtra',
      type: 'Full-time'
    },
    {
      title: 'Business Development Associate',
      department: 'Sales',
      location: 'Nagpur, Maharashtra',
      type: 'Full-time'
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      
      {/* Hero */}
      <section className="py-24 md:py-32" data-testid="careers-hero">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-6" 
            style={{ fontFamily: 'Outfit, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            data-testid="careers-heading"
          >
            Join Our Team
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-600 leading-relaxed" 
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            data-testid="careers-description"
          >
            Help us build India's most trusted e-commerce marketplace. Join a team that's making a difference.
          </motion.p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 bg-white" data-testid="why-work-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Why Work at Mazishop?</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Growth</h3>
              <p className="text-slate-600">Rapid career advancement opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Culture</h3>
              <p className="text-slate-600">Collaborative and inclusive environment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-green-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Benefits</h3>
              <p className="text-slate-600">Competitive salary and comprehensive benefits</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="text-purple-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Impact</h3>
              <p className="text-slate-600">Work on products that matter</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24" data-testid="open-positions">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Open Positions</h2>
            <p className="text-xl text-slate-600" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Join us in building the future of e-commerce</p>
          </div>
          <div className="space-y-4">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-orange-500 transition-all hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                data-testid={`position-${index}`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                      <span className="bg-slate-100 px-3 py-1 rounded-full">{position.department}</span>
                      <span className="bg-slate-100 px-3 py-1 rounded-full">{position.location}</span>
                      <span className="bg-slate-100 px-3 py-1 rounded-full">{position.type}</span>
                    </div>
                  </div>
                  <Link 
                    to="/contact" 
                    className="bg-slate-900 text-white hover:bg-slate-800 rounded-full px-6 py-3 font-medium transition-all hover:scale-105 text-center"
                    data-testid={`apply-button-${index}`}
                  >
                    Apply Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white" data-testid="careers-cta">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>Don't See Your Role?</h2>
          <p className="text-xl text-slate-600 mb-8" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            We're always looking for talented individuals. Send us your resume and tell us how you can contribute to Mazishop.
          </p>
          <Link 
            to="/contact" 
            className="bg-orange-500 text-white hover:bg-orange-600 rounded-full px-8 py-4 text-lg font-medium transition-all hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/20 inline-flex items-center justify-center"
            data-testid="general-application-button"
          >
            Submit General Application
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
