import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-24" data-testid="privacy-policy">
        <h1 className="text-5xl font-bold text-slate-900 mb-8" style={{ fontFamily: 'Outfit, sans-serif' }}>Privacy Policy</h1>
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          <p className="text-slate-600 mb-6"><strong>Last Updated:</strong> December 2024</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Welcome to Mazi Shop Private Limited ("Mazishop," "we," "us," or "our"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Name, email address, phone number, and location</li>
              <li>Business information (for sellers)</li>
              <li>Account credentials</li>
              <li>Communication preferences</li>
              <li>Any other information you choose to provide</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Provide, maintain, and improve our services</li>
              <li>Process your applications and inquiries</li>
              <li>Send you updates and marketing communications</li>
              <li>Respond to your comments and questions</li>
              <li>Analyze usage patterns and trends</li>
              <li>Detect and prevent fraud</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Information Sharing</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Service providers who assist in our operations</li>
              <li>Business partners with your consent</li>
              <li>Law enforcement when required by law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Security</h2>
            <p className="text-slate-600 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Your Rights</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Cookies and Tracking</h2>
            <p className="text-slate-600 leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Changes to This Policy</h2>
            <p className="text-slate-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us:
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

export default PrivacyPolicy;
