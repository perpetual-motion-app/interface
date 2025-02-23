import React from 'react';
import { TrendingUp, Users, Wallet, LineChart } from 'lucide-react';
import { AIAgent } from '../../types';

interface TokenDataProps {
  agent: AIAgent;
}

const formatNumber = (num: number) => {
  if (num >= 1e9) return `${(num / 1e9).toFixed(2)}B`;
  if (num >= 1e6) return `${(num / 1e6).toFixed(2)}M`;
  if (num >= 1e3) return `${(num / 1e3).toFixed(2)}K`;
  return num.toFixed(2);
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffMonths = (now.getFullYear() - date.getFullYear()) * 12 + now.getMonth() - date.getMonth();
  return `${diffMonths} months ago`;
};

export const TokenData = ({ agent }: TokenDataProps) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h2 className="text-lg font-semibold text-white mb-4">Token Metrics</h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <TrendingUp className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <div className="text-sm text-gray-400">Token Market Cap</div>
              <div className="text-white font-medium">${formatNumber(agent.marketCap)}</div>
            </div>
          </div>
          <div className="text-sm">
            <span className={agent.performance.daily >= 0 ? 'text-green-500' : 'text-red-500'}>
              {agent.performance.daily >= 0 ? '+' : ''}{agent.performance.daily}%
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <Users className="h-5 w-5 text-purple-500" />
            </div>
            <div>
              <div className="text-sm text-gray-400">Token Holders</div>
              <div className="text-white font-medium">{formatNumber(agent.holders)}</div>
            </div>
          </div>
          <div className="text-sm text-gray-400">
            Created {formatDate(agent.createdAt)}
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-500/20 rounded-lg">
              <Wallet className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <div className="text-sm text-gray-400">Token TVL</div>
              <div className="text-white font-medium">${formatNumber(agent.tvl)}</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-yellow-500/20 rounded-lg">
              <LineChart className="h-5 w-5 text-yellow-500" />
            </div>
            <div>
              <div className="text-sm text-gray-400">Token 24h Volume</div>
              <div className="text-white font-medium">${formatNumber(agent.volume24h)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};