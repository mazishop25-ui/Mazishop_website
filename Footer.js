import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white" data-testid="main-footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <img 
              src="https://customer-assets.emergentagent.com/job_mazishop-landing/artifacts/rf8wfc2w_Logo.jpeg" 
              alt="Mazishop Logo" 
              className="h-12 w-auto mb-4 brightness-0 invert"
              data-testid="footer-logo"
            />
            <p className="text-slate-400 text-sm leading-relaxed">
              India's trusted multi-seller marketplace platform connecting sellers, buyers, and delivery partners.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors" data-testid="footer-link-about">About Us</Link></li>
              <li><Link to="/how-it-works" className="text-slate-400 hover:text-white transition-colors" data-testid="footer-link-how-it-works">How It Works</Link></li>
              <li><Link to="/features" className="text-slate-400 hover:text-white transition-colors" data-testid="footer-link-features">Features</Link></li>
              <li><Link to="/careers" className="text-slate-400 hover:text-white transition-colors" data-testid="footer-link-careers">Careers</Link></li>
            </ul>
          </div>

          {/* For Partners */}
          <div>
            <h3 className="font-semibold text-lg mb-4">For Partners</h3>
            <ul className="space-y-2">
              <li><Link to="/seller-onboarding" className="text-slate-400 hover:text-white transition-colors" data-testid="footer-link-seller">Become a Seller</Link></li>
              <li><Link to="/delivery-partner" className="text-slate-400 hover:text-white transition-colors" data-testid="footer-link-delivery">Join as Delivery Partner</Link></li>
              <li><Link to="/privacy-policy" className="text-slate-400 hover:text-white transition-colors" data-testid="footer-link-privacy">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-400 hover:text-white transition-colors" data-testid="footer-link-terms">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-400">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <a href="mailto:mazishop25@gmail.com" className="hover:text-white transition-colors" data-testid="footer-email">
                  mazishop25@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <a href="tel:+917745800792" className="hover:text-white transition-colors" data-testid="footer-phone">
                  +91 7745800792
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span data-testid="footer-address">
                  Mazi Shop Private Limited<br />
                  Nagpur, Maharashtra, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400 text-sm">
          <p data-testid="footer-copyright">&copy; {new Date().getFullYear()} Mazi Shop Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
