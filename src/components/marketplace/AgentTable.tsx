import React from 'react';
import { LineChart, Users, Wallet } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AIAgent } from '../../types';

interface AgentTableProps {
  agents: AIAgent[];
}

const formatAddress = (address: string) => {
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
};

const formatMarketCap = (marketCap: number) => {
  if (marketCap >= 1e9) {
    return `$${(marketCap / 1e9).toFixed(2)}B`;
  }
  if (marketCap >= 1e6) {
    return `$${(marketCap / 1e6).toFixed(2)}M`;
  }
  return `$${(marketCap / 1e3).toFixed(2)}K`;
};

export const AgentTable = ({ agents }: AgentTableProps) => {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-800">
            <th className="text-left p-4 text-gray-400 font-medium">Agent</th>
            <th className="text-left p-4 text-gray-400 font-medium">Type</th>
            <th className="text-left p-4 text-gray-400 font-medium">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Token Holders</span>
              </div>
            </th>
            <th className="text-left p-4 text-gray-400 font-medium">
              <div className="flex items-center space-x-2">
                <LineChart className="h-4 w-4" />
                <span>Agent Performance</span>
              </div>
            </th>
            <th className="text-left p-4 text-gray-400 font-medium">
              <div className="flex items-center space-x-2">
                <Wallet className="h-4 w-4" />
                <span>Token Price</span>
              </div>
            </th>
            <th className="text-left p-4 text-gray-400 font-medium">Token Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {agents.map((agent) => (
            <tr
              key={agent.id}
              onClick={() => navigate(`/app/marketplace/live/${agent.id}`)}
              className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors cursor-pointer"
            >
              <td className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                    {agent.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-white">{agent.name}</div>
                    <div className="text-sm text-gray-400">{formatAddress(agent.walletAddress)}</div>
                  </div>
                </div>
              </td>
              <td className="p-4">
                <span className="inline-block px-3 py-1 rounded-full text-sm bg-gray-700 text-gray-300">
                  {agent.type}
                </span>
              </td>
              <td className="p-4 text-gray-400">247</td>
              <td className="p-4">
                <div className="space-y-1">
                  <div className="text-green-500">+{agent.performance.daily}% (24h)</div>
                  <div className="text-sm text-gray-400">+{agent.performance.weekly}% (7d)</div>
                </div>
              </td>
              <td className="p-4">
                <div className="font-medium text-white">${agent.tokenPrice.toFixed(2)}</div>
              </td>
              <td className="p-4 text-gray-400">{formatMarketCap(agent.marketCap)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};