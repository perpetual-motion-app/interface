import React from 'react';
import { LineChart, ArrowRight, Users, Wallet } from 'lucide-react';
import { AIAgent } from '../../types';

interface AgentCardProps {
  agent: AIAgent;
}

export const AgentCard = ({ agent }: AgentCardProps) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">{agent.name}</h3>
            <span className="inline-block px-3 py-1 rounded-full text-sm bg-gray-700 text-gray-300">
              {agent.type}
            </span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <Users className="h-4 w-4" />
            <span className="text-sm">247 holders</span>
          </div>
        </div>

        <p className="text-gray-400 mb-6">{agent.description}</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-900 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400">Performance</span>
              <LineChart className="h-4 w-4 text-green-500" />
            </div>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-gray-400">Daily</span>
                <span className="text-green-500">+{agent.performance.daily}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Weekly</span>
                <span className="text-green-500">+{agent.performance.weekly}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Monthly</span>
                <span className="text-green-500">+{agent.performance.monthly}%</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400">Token Price</span>
              <Wallet className="h-4 w-4 text-blue-500" />
            </div>
            <div className="text-2xl font-bold text-white">
              ${agent.tokenPrice.toFixed(2)}
            </div>
            <div className="text-gray-400 text-sm">
              Staking APY: {agent.stakingAPY}%
            </div>
          </div>
        </div>

        <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
          <span>View Details</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};