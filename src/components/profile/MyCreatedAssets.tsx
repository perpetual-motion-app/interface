import React, { useState } from 'react';
import { Search, SlidersHorizontal, ExternalLink } from 'lucide-react';

interface CreatedAsset {
  id: string;
  name: string;
  symbol: string;
  icon: string;
  status: 'IAO' | 'Live';
  creationDate: string;
  tokenSupply: {
    total: number;
    circulating: number;
  };
  performance: {
    daily: number;
    weekly: number;
  };
  volume: {
    daily: number;
    weekly: number;
  };
  feesCollected: number;
  strategy: string;
}

const mockAssets: CreatedAsset[] = [
  {
    id: '1',
    name: 'Trench Digger',
    symbol: 'TRENCH',
    icon: '⛏️',
    status: 'Live',
    creationDate: '2024-02-15',
    tokenSupply: {
      total: 1000000,
      circulating: 750000
    },
    performance: {
      daily: 3.5,
      weekly: 15.8
    },
    volume: {
      daily: 125000,
      weekly: 875000
    },
    feesCollected: 25000,
    strategy: 'High Frequency Trading'
  },
  {
    id: '2',
    name: 'Alpha Seeker',
    symbol: 'ALPHA',
    icon: '🎯',
    status: 'IAO',
    creationDate: '2024-03-10',
    tokenSupply: {
      total: 500000,
      circulating: 100000
    },
    performance: {
      daily: 1.2,
      weekly: 5.5
    },
    volume: {
      daily: 50000,
      weekly: 350000
    },
    feesCollected: 8500,
    strategy: 'Market Making'
  }
];

const formatNumber = (num: number) => {
  if (num >= 1e9) return `${(num / 1e9).toFixed(2)}B`;
  if (num >= 1e6) return `${(num / 1e6).toFixed(2)}M`;
  if (num >= 1e3) return `${(num / 1e3).toFixed(2)}K`;
  return num.toFixed(2);
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export const MyCreatedAssets = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">My Created Assets</h1>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search assets..."
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
                <th className="text-left p-4 text-gray-400 font-medium">Agent</th>
                <th className="text-left p-4 text-gray-400 font-medium">Status</th>
                <th className="text-left p-4 text-gray-400 font-medium">Created</th>
                <th className="text-left p-4 text-gray-400 font-medium">Token Supply</th>
                <th className="text-left p-4 text-gray-400 font-medium">24h Change</th>
                <th className="text-left p-4 text-gray-400 font-medium">7d Change</th>
                <th className="text-left p-4 text-gray-400 font-medium">24h Volume</th>
                <th className="text-left p-4 text-gray-400 font-medium">7d Volume</th>
                <th className="text-left p-4 text-gray-400 font-medium">Fees Collected</th>
                <th className="text-left p-4 text-gray-400 font-medium">Strategy</th>
              </tr>
            </thead>
            <tbody>
              {mockAssets.map((asset) => (
                <tr key={asset.id} className="border-b border-gray-700/50 hover:bg-gray-700/30 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{asset.icon}</div>
                      <div>
                        <div className="font-medium text-white">{asset.name}</div>
                        <div className="text-sm text-gray-400">{asset.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      asset.status === 'Live'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {asset.status}
                    </span>
                  </td>
                  <td className="p-4 text-gray-300">{formatDate(asset.creationDate)}</td>
                  <td className="p-4">
                    <div className="space-y-1">
                      <div className="text-gray-300">Total: {formatNumber(asset.tokenSupply.total)}</div>
                      <div className="text-sm text-gray-400">Circ: {formatNumber(asset.tokenSupply.circulating)}</div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={asset.performance.daily >= 0 ? 'text-green-400' : 'text-red-400'}>
                      {asset.performance.daily >= 0 ? '+' : ''}{asset.performance.daily}%
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={asset.performance.weekly >= 0 ? 'text-green-400' : 'text-red-400'}>
                      {asset.performance.weekly >= 0 ? '+' : ''}{asset.performance.weekly}%
                    </span>
                  </td>
                  <td className="p-4 text-gray-300">${formatNumber(asset.volume.daily)}</td>
                  <td className="p-4 text-gray-300">${formatNumber(asset.volume.weekly)}</td>
                  <td className="p-4 text-green-400">${formatNumber(asset.feesCollected)}</td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                      {asset.strategy}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};