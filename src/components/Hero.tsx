import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, LineChart, Zap, Puzzle, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Modal } from './ui/Modal';

export const Hero = () => {
  const [showAppModal, setShowAppModal] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative container mx-auto px-4 pt-24 md:pt-32 pb-16 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Automate Trading
            <br />
            Tokenize Success
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8">
            The First Marketplace of AI Trading Agents Built for Functionality
          </p>
          
          <p className="text-base sm:text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Build, Launch, Profit – Create No-Code AI Agents with Our Simple Drag-and-Drop Interface.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 md:mb-24">
            <button 
              onClick={() => setShowAppModal(true)}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors w-full sm:w-auto"
            >
              Launch App
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              onClick={() => setShowBuyModal(true)}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors w-full sm:w-auto"
            >
              Buy $MOTION
              <LineChart className="ml-2 h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl text-left"
            >
              <Bot className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">No-Code AI Agents</h3>
              <p className="text-sm sm:text-base text-gray-400">Build powerful trading agents without writing a line of code.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl text-left"
            >
              <LineChart className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Live Market Data</h3>
              <p className="text-sm sm:text-base text-gray-400">Leverage exclusive data streams like liquidity metrics and mempool activity.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl text-left"
            >
              <DollarSign className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Earn More</h3>
              <p className="text-sm sm:text-base text-gray-400">Trade, optimize, and sell your AI agent's token in our marketplace for maximum profit.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl text-left"
            >
              <Puzzle className="h-8 w-8 text-yellow-400 mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Customizable Toolkits</h3>
              <p className="text-sm sm:text-base text-gray-400">Use our resources to create unique, strategy-driven agents.</p>
            </motion.div>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-sm p-4 sm:p-8 rounded-xl text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">Why Choose Us</h2>
            <div className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="border-l-4 border-blue-500 pl-4"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Built for Traders</h3>
                <p className="text-sm sm:text-base text-gray-400">Unlike other platforms focused on entertainment, we're all about trading performance.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="border-l-4 border-purple-500 pl-4"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2">AI Agents Tokenized</h3>
                <p className="text-sm sm:text-base text-gray-400">Every agent you create is an asset, ready to earn and trade.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="border-l-4 border-green-500 pl-4"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Collaborative Growth</h3>
                <p className="text-sm sm:text-base text-gray-400">Build alongside Perpetual Motion's cutting-edge AI models.</p>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-8 sm:mt-12 text-center"
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Join Perpetual Motion — Where AI Trading Meets Opportunity
            </h2>
            <button
              onClick={() => setShowAppModal(true)}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all w-full sm:w-auto"
            >
              Launch App
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Coming Soon Modal for Launch App */}
      <Modal isOpen={showAppModal} onClose={() => setShowAppModal(false)}>
        <div className="p-6 sm:p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/20 rounded-full flex items-center justify-center">
            <Bot className="h-8 w-8 text-blue-500" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Platform Launch Coming Soon</h2>
          <p className="text-gray-400 mb-6">
            We're putting the finishing touches on something extraordinary. Join our newsletter to be the first to know when we launch!
          </p>
          <button
            onClick={() => setShowAppModal(false)}
            className="w-full sm:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-white"
          >
            Got it
          </button>
        </div>
      </Modal>

      {/* Coming Soon Modal for Buy $MOTION */}
      <Modal isOpen={showBuyModal} onClose={() => setShowBuyModal(false)}>
        <div className="p-6 sm:p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center">
            <DollarSign className="h-8 w-8 text-purple-500" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">$MOTION Token Coming Soon</h2>
          <p className="text-gray-400 mb-6">
            The $MOTION token will be available for purchase soon. Subscribe to our newsletter for exclusive pre-sale access and updates!
          </p>
          <button
            onClick={() => setShowBuyModal(false)}
            className="w-full sm:w-auto px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors text-white"
          >
            Stay Tuned
          </button>
        </div>
      </Modal>
    </div>
  );
};