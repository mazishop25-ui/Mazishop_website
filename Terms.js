import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-24" data-testid="terms-conditions">
        <h1 className="text-5xl font-bold text-slate-900 mb-8" style={{ fontFamily: 'Outfit, sans-serif' }}>Terms and Conditions</h1>
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          <p className="text-slate-600 mb-6"><strong>Last Updated:</strong> December 2024</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              By accessing and using the Mazishop platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Use of Services</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our platform provides e-commerce marketplace services connecting sellers, buyers, and delivery partners. You agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account</li>
              <li>Not use the service for any illegal purpose</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not engage in fraudulent activities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Seller Terms</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Sellers on our platform agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Provide accurate product descriptions and pricing</li>
              <li>Fulfill orders in a timely manner</li>
              <li>Maintain adequate inventory</li>
              <li>Provide customer support for their products</li>
              <li>Comply with all applicable product safety regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Delivery Partner Terms</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Delivery partners agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Handle all deliveries with care</li>
              <li>Deliver orders within specified timeframes</li>
              <li>Maintain valid licenses and permits</li>
              <li>Provide professional service to customers</li>
              <li>Follow all safety protocols</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Payment Terms</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Payment processing is subject to our payment terms:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>All prices are in Indian Rupees (INR)</li>
              <li>Payment must be made through approved payment methods</li>
              <li>Refunds are subject to our refund policy</li>
              <li>Commission fees apply to all sales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Intellectual Property</h2>
            <p className="text-slate-600 leading-relaxed">
              All content on the Mazishop platform, including text, graphics, logos, and software, is the property of Mazi Shop Private Limited and protected by copyright and trademark laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed">
              Mazishop shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Dispute Resolution</h2>
            <p className="text-slate-600 leading-relaxed">
              Any disputes arising from these terms shall be resolved through arbitration in accordance with Indian law, with proceedings conducted in Nagpur, Maharashtra.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Termination</h2>
            <p className="text-slate-600 leading-relaxed">
              We reserve the right to terminate or suspend your account and access to our services at our sole discretion, without notice, for conduct that we believe violates these terms or is harmful to other users.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Changes to Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the service constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Contact Information</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              For questions about these Terms and Conditions, please contact:
            </p>
            <div className="bg-slate-50 rounded-xl p-6">
              <p className="text-slate-700 mb-2"><strong>Email:</strong> mazishop25@gmail.com</p>
              <p className="text-slate-700 mb-2"><strong>Phone:</strong> +91 7745800792</p>
              <p className="text-slate-700"><strong>Address:</strong> Mazi Shop Private Limited, Nagpur, Maharashtra, India</p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
