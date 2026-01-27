import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Package, CreditCard, BarChart, Shield, Truck, HeadphonesIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: <Package size={32} />,
      title: 'Multi-Store Management',
      description: 'Manage multiple stores from a single dashboard with ease',
      color: 'orange'
    },
    {
      icon: <CreditCard size={32} />,
      title: 'Secure Payment Processing',
      description: 'Multiple payment gateways with bank-level security',
      color: 'blue'
    },
    {
      icon: <BarChart size={32} />,
      title: 'Analytics & Reporting',
      description: 'Real-time insights into sales, inventory, and performance',
      color: 'green'
    },
    {
      icon: <Shield size={32} />,
      title: 'Buyer Protection',
      description: 'Secure transactions with money-back guarantee',
      color: 'purple'
    },
    {
      icon: <Truck size={32} />,
      title: 'Smart Logistics',
      description: 'Integrated delivery network for fast and reliable shipping',
      color: 'red'
    },
    {
      icon: <HeadphonesIcon size={32} />,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for sellers and customers',
      color: 'indigo'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      orange: 'bg-orange-100 text-orange-500',
      blue: 'bg-blue-100 text-blue-500',
      green: 'bg-green-100 text-green-500',
      purple: 'bg-purple-100 text-purple-500',
      red: 'bg-red-100 text-red-500',
      indigo: 'bg-indigo-100 text-indigo-500'
    };
    return colors[color] || colors.orange;
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      
      {/* Hero */}
      <section className="py-24 md:py-32" data-testid="features-hero">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-6" 
            style={{ fontFamily: 'Outfit, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            data-testid="features-heading"
          >
            Powerful Features
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-600 leading-relaxed" 
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            data-testid="features-description"
          >
            Everything you need to run and grow your e-commerce business
          </motion.p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="pb-24 md:pb-32" data-testid="features-grid">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                data-testid={`feature-${index}`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${getColorClasses(feature.color)}`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-24 bg-white" data-testid="detailed-features">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Built for Growth</h2>
            <p className="text-xl text-slate-600" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Comprehensive tools for every aspect of your business</p>
          </div>

          <div className="space-y-24">
            {/* Feature 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }} data-testid="detail-inventory-title">
                  Inventory Management
                </h3>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Keep track of your stock levels in real-time. Get low-stock alerts, manage variants, and sync inventory across multiple channels.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-600">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Real-time stock tracking
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Automated low-stock alerts
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Bulk upload and updates
                  </li>
                </ul>
              </div>
              <div className="bg-slate-100 rounded-3xl p-8 h-80 flex items-center justify-center">
                <Package size={120} className="text-slate-300" />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-slate-100 rounded-3xl p-8 h-80 flex items-center justify-center order-2 lg:order-1">
                <BarChart size={120} className="text-slate-300" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }} data-testid="detail-analytics-title">
                  Advanced Analytics
                </h3>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Make data-driven decisions with comprehensive analytics. Track sales trends, customer behavior, and revenue metrics.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Sales and revenue reports
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Customer insights
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Performance dashboards
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
