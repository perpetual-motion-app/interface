import React from 'react';
import { ExternalLink, Copy, Twitter, Globe } from 'lucide-react';
import { AIAgent } from '../../types';

interface AgentHeaderProps {
  agent: AIAgent;
}

export const AgentHeader = ({ agent }: AgentHeaderProps) => {
  const copyAddress = () => {
    navigator.clipboard.writeText(agent.walletAddress);
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6 mb-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
            {agent.name.charAt(0)}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">
              {agent.name} <span className="text-gray-400">({agent.ticker})</span>
            </h1>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-gray-400">{agent.walletAddress.slice(0, 6)}...{agent.walletAddress.slice(-4)}</span>
              <button 
                onClick={copyAddress}
                className="p-1 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Copy className="h-4 w-4 text-gray-400" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <a
            href={`https://twitter.com/${agent.ticker}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
          >
            <Twitter className="h-5 w-5 text-gray-300" />
          </a>
          <a
            href={`https://etherscan.io/address/${agent.walletAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
          >
            <ExternalLink className="h-5 w-5 text-gray-300" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
          >
            <Globe className="h-5 w-5 text-gray-300" />
          </a>
        </div>
      </div>
    </div>
  );
};