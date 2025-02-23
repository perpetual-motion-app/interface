import React, { useState } from 'react';
import { Copy, Search, SlidersHorizontal } from 'lucide-react';

interface InvestedToken {
  id: string;
  name: string;
  symbol: string;
  icon: string;
  walletAddress: string;
  marketCap: number;
  performance: {
    daily: number;
    weekly: number;
  };
  holders: number;
  type: string;
  price: number;
  apy: number;
}

const mockTokens: InvestedToken[] = [
  {
    id: '1',
    name: 'MEV Hunter Pro',
    symbol: 'MEVH',
    icon: '🤖',
    walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
    marketCap: 12500000,
    performance: {
      daily: 2.5,
      weekly: 12.8
    },
    holders: 2500,
    type: 'AI Trading',
    price: 125.50,
    apy: 15.5
  },
  {
    id: '2',
    name: 'Arbitrage Master',
    symbol: 'ARBM',
    icon: '📊',
    walletAddress: '0xabcdef1234567890abcdef1234567890abcdef12',
    marketCap: 8500000,
    performance: {
      daily: -1.2,
      weekly: 8.5
    },
    holders: 1800,
    type: 'Arbitrage',
    price: 85.75,
    apy: 12.8
  }
];

const formatNumber = (num: number) => {
  if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
  if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
  if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`;
  return `$${num.toFixed(2)}`;
};

const formatAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const MyAssets = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const copyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">My Assets</h1>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search tokens..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 px-4 py-2 pl-10 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
            <Search className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
          
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-blue-500 transition-colors">
            <SlidersHorizontal className="h-4 w-4" />
            <span>Filters</span>
          </button>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left p-4 text-gray-400 font-medium">Token</th>
                <th className="text-left p-4 text-gray-400 font-medium">Wallet Address</th>
                <th className="text-left p-4 text-gray-400 font-medium">Market Cap</th>
                <th className="text-left p-4 text-gray-400 font-medium">24h Change</th>
                <th className="text-left p-4 text-gray-400 font-medium">7d Change</th>
                <th className="text-left p-4 text-gray-400 font-medium">Holders</th>
                <th className="text-left p-4 text-gray-400 font-medium">Type</th>
                <th className="text-left p-4 text-gray-400 font-medium">Price</th>
                <th className="text-left p-4 text-gray-400 font-medium">APY</th>
              </tr>
            </thead>
            <tbody>
              {mockTokens.map((token) => (
                <tr key={token.id} className="border-b border-gray-700/50 hover:bg-gray-700/30 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{token.icon}</div>
                      <div>
                        <div className="font-medium text-white">{token.name}</div>
                        <div className="text-sm text-gray-400">{token.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-300">{formatAddress(token.walletAddress)}</span>
                      <button
                        onClick={() => copyAddress(token.walletAddress)}
                        className="p-1 hover:bg-gray-700 rounded-lg transition-colors"
                      >
                        <Copy className="h-4 w-4 text-gray-400" />
                      </button>
                    </div>
                  </td>
                  <td className="p-4 text-gray-300">{formatNumber(token.marketCap)}</td>
                  <td className="p-4">
                    <span className={token.performance.daily >= 0 ? 'text-green-400' : 'text-red-400'}>
                      {token.performance.daily >= 0 ? '+' : ''}{token.performance.daily}%
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={token.performance.weekly >= 0 ? 'text-green-400' : 'text-red-400'}>
                      {token.performance.weekly >= 0 ? '+' : ''}{token.performance.weekly}%
                    </span>
                  </td>
                  <td className="p-4 text-gray-300">{token.holders.toLocaleString()}</td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                      {token.type}
                    </span>
                  </td>
                  <td className="p-4 text-gray-300">${token.price.toFixed(2)}</td>
                  <td className="p-4 text-green-400">{token.apy}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};