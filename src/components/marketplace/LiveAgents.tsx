import React, { useState } from 'react';
import { Search, SlidersHorizontal, LayoutGrid, Table2 } from 'lucide-react';
import { AgentCard } from './AgentCard';
import { AgentTable } from './AgentTable';
import { AIAgent } from '../../types';

const mockAgents: AIAgent[] = [
  {
    id: '1',
    name: 'Trench Digger',
    type: 'High Frequency',
    walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
    profitability: 89,
    performance: {
      daily: 2.5,
      weekly: 12.8,
      monthly: 45.2
    },
    tokenPrice: 125.50,
    marketCap: 12500000
  },
  {
    id: '2',
    name: 'MEV Hunter Pro',
    type: 'MEV',
    walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
    profitability: 89,
    performance: {
      daily: 2.5,
      weekly: 12.8,
      monthly: 45.2
    },
    tokenPrice: 125.50,
    marketCap: 12500000
  },
  {
    id: '3',
    name: 'Meme Scout Elite',
    type: 'MemeCoin',
    walletAddress: '0xabcdef1234567890abcdef1234567890abcdef12',
    profitability: 76,
    performance: {
      daily: 3.2,
      weekly: 15.5,
      monthly: 52.8
    },
    tokenPrice: 85.75,
    marketCap: 8575000
  },
  {
    id: '4',
    name: 'Arbitrage Master',
    type: 'Arbitrage',
    walletAddress: '0x7890abcdef1234567890abcdef1234567890abcd',
    profitability: 92,
    performance: {
      daily: 1.8,
      weekly: 9.6,
      monthly: 38.4
    },
    tokenPrice: 175.25,
    marketCap: 17525000
  }
];

type LayoutType = 'grid' | 'table';

export const LiveAgents = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [layout, setLayout] = useState<LayoutType>('table');

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-white">Live Agents</h1>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => setLayout('grid')}
              className={`p-2 rounded-lg transition-colors ${
                layout === 'grid'
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setLayout('table')}
              className={`p-2 rounded-lg transition-colors ${
                layout === 'table'
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Table2 className="h-4 w-4" />
            </button>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search agents..."
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

      {layout === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockAgents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      ) : (
        <AgentTable agents={mockAgents} />
      )}
    </div>
  );
};