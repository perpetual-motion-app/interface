import React, { useState } from 'react';
import { ArrowDownUp } from 'lucide-react';
import { AIAgent } from '../../types';

interface AgentSwapProps {
  agent: AIAgent;
}

export const AgentSwap = ({ agent }: AgentSwapProps) => {
  const [amount, setAmount] = useState('');

  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h2 className="text-lg font-semibold text-white mb-4">Swap</h2>
      
      <div className="space-y-4">
        <div className="bg-gray-700/50 rounded-lg p-4">
          <div className="text-sm text-gray-400 mb-2">From</div>
          <div className="flex items-center space-x-3">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.0"
              className="bg-transparent text-white text-lg focus:outline-none flex-1"
            />
            <div className="px-3 py-1 bg-gray-700 rounded-lg text-white">
              $MOTION
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
            <ArrowDownUp className="h-5 w-5 text-gray-300" />
          </button>
        </div>

        <div className="bg-gray-700/50 rounded-lg p-4">
          <div className="text-sm text-gray-400 mb-2">To</div>
          <div className="flex items-center space-x-3">
            <input
              type="number"
              value={amount ? (Number(amount) * agent.tokenPrice).toFixed(2) : ''}
              readOnly
              placeholder="0.0"
              className="bg-transparent text-white text-lg focus:outline-none flex-1"
            />
            <div className="px-3 py-1 bg-gray-700 rounded-lg text-white">
              ${agent.ticker}
            </div>
          </div>
        </div>

        <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
          Connect Wallet to Swap
        </button>
      </div>
    </div>
  );
};