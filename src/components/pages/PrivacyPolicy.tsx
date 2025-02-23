import React from 'react';

export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        
        <div className="space-y-8 text-gray-300">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
            <p>
              Perpetual Motion values your privacy. This Privacy Policy outlines how we collect, use, 
              and protect your personal information when you use our platform.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium text-white">Personal Information:</span> Name, email 
                address, and wallet address.
              </li>
              <li>
                <span className="font-medium text-white">Usage Data:</span> Activity logs, 
                interactions, and preferences on our platform.
              </li>
              <li>
                <span className="font-medium text-white">Device Information:</span> IP address, 
                browser type, and device identifiers.
              </li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and improve our services.</li>
              <li>To process transactions and manage accounts.</li>
              <li>Communicate updates and marketing offers.</li>
              <li>To ensure security and prevent fraud.</li>
            </ul>
          </section>

          {/* Sharing Your Information */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Sharing Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>With third-party service providers for payment and analytics.</li>
              <li>With legal authorities if required by law.</li>
              <li>We do not sell your personal information.</li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Data Security</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We implement industry-standard security measures to protect your data.</li>
              <li>Users are responsible for safeguarding their account credentials.</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access, update, or delete your personal information.</li>
              <li>Opt out of marketing communications.</li>
              <li>Request a copy of your stored data.</li>
            </ul>
          </section>

          {/* Cookies and Tracking Technologies */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Cookies and Tracking Technologies</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We use cookies to enhance user experience and analyze platform performance.</li>
              <li>Users can manage cookie preferences through their browser settings.</li>
            </ul>
          </section>

          {/* Policy Updates */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Policy Updates</h2>
            <p>
              We may update this Privacy Policy periodically. Users will be notified of significant changes.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Contact Us</h2>
            <p>
              For questions about this Privacy Policy, contact us at{' '}
              <a href="mailto:contact@perpetualmotion.app" className="text-blue-400 hover:text-blue-300">
                contact@perpetualmotion.app
              </a>
            </p>
          </section>

          {/* Agreement */}
          <section className="pt-4 border-t border-gray-800">
            <p className="font-medium">
              By using Perpetual Motion, you agree to the terms of this Privacy Policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};