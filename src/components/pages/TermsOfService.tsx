import React from 'react';

export const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        
        <div className="space-y-8 text-gray-300">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
            <p>
              By accessing and using Perpetual Motion, you agree to these Terms of Service. 
              Please read them carefully.
            </p>
          </section>

          {/* Use of Services */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Use of Services</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must be at least 18 years old to use our platform.</li>
              <li>You agree to use our services only for lawful purposes.</li>
              <li>Account security is your responsibility.</li>
            </ul>
          </section>

          {/* User Conduct */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. User Conduct</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Prohibited activities include attempting to exploit, hack, or misuse the platform.</li>
              <li>Spamming, harassment, or illegal activity is strictly forbidden.</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All content on our platform is owned by Perpetual Motion.</li>
              <li>You may not copy or distribute content without permission.</li>
            </ul>
          </section>

          {/* Payments and Transactions */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Payments and Transactions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All transactions are final unless stated otherwise.</li>
              <li>Users are responsible for any transaction fees.</li>
            </ul>
          </section>

          {/* Disclaimers and Limitations of Liability */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Disclaimers and Limitations of Liability</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Services are provided "as is" without warranties.</li>
              <li>We are not responsible for losses from trading or third-party services.</li>
            </ul>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Termination</h2>
            <p>
              We may suspend or terminate your account for violations of these terms.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Changes to Terms</h2>
            <p>
              Terms may be updated periodically. Continued use indicates acceptance of changes.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Contact Us</h2>
            <p>
              For inquiries, contact us at{' '}
              <a href="mailto:contact@perpetualmotion.app" className="text-blue-400 hover:text-blue-300">
                contact@perpetualmotion.app
              </a>
            </p>
          </section>

          {/* Agreement */}
          <section className="pt-4 border-t border-gray-800">
            <p className="font-medium">
              By using our platform, you acknowledge that you understand and agree to these Terms of Service.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};