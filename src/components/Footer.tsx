import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, ExternalLink, Check } from 'lucide-react';
import { Modal } from './ui/Modal';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://api.perpetualmotion.app/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setShowThankYou(true);
        setEmail('');
      }
    } catch (error) {
      console.error('Error subscribing:', error);
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Platform</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('showAppModal'))}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Launch App
                </button>
              </li>
              <li>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('showBuyModal'))}
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center"
                >
                  Buy $MOTION
                  <ExternalLink className="h-4 w-4 ml-1" />
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://perpetual-motion.gitbook.io/perpetual-motion-marketplace" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/perpetual-motion-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="text-gray-400">Get exclusive insights and platform updates</p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 text-white"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors"
                >
                  <Send className="h-5 w-5 text-white" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a
              href="https://x.com/officialPMapp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://t.me/perpetualmotionapp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.29-.48.79-.74 3.08-1.34 5.15-2.23 6.19-2.66 2.95-1.23 3.56-1.44 3.97-1.44.09 0 .28.02.41.09.11.06.19.14.22.24.03.11.04.21.01.3z"/>
              </svg>
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <span>&copy; 2025 Perpetual Motion. All rights reserved.</span>
          </div>
        </div>
      </div>

      {/* Thank You Modal */}
      <Modal isOpen={showThankYou} onClose={() => setShowThankYou(false)}>
        <div className="p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
            <Check className="h-8 w-8 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Thank You for Subscribing!</h2>
          <p className="text-gray-400 mb-6">
            You're now part of the Perpetual Motion community. We'll keep you updated with the latest news and exclusive offers.
          </p>
          <button
            onClick={() => setShowThankYou(false)}
            className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors text-white"
          >
            Got it
          </button>
        </div>
      </Modal>
    </footer>
  );
};