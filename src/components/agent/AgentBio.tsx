import React from 'react';
import { Code2, Wrench, Network, Coins } from 'lucide-react';

interface AgentBioProps {
  biography: string;
  framework: string[];
  toolkits: string[];
  name: string;
  type: string;
  network: string;
  token: string;
}

export const AgentBio = ({ biography, framework, toolkits, name, type, network, token }: AgentBioProps) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 mb-6">
      <h2 className="text-lg font-semibold text-white mb-4">About</h2>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-2">Name</h3>
              <div className="text-white">{name}</div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-2">Type</h3>
              <div className="text-white">{type}</div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-2">Network</h3>
              <div className="flex items-center space-x-2">
                <Network className="h-4 w-4 text-blue-400" />
                <span className="text-white">{network}</span>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-2">Token</h3>
              <div className="flex items-center space-x-2">
                <Coins className="h-4 w-4 text-yellow-400" />
                <span className="text-white">{token}</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-400 mb-3">Description</h3>
          <p className="text-gray-300 leading-relaxed">{biography}</p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-400 mb-3">Framework</h3>
          <div className="flex flex-wrap gap-2">
            {framework.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 px-3 py-1 bg-gray-700/50 rounded-lg text-gray-300"
              >
                <Code2 className="h-4 w-4 text-blue-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-400 mb-3">Toolkits</h3>
          <div className="flex flex-wrap gap-2">
            {toolkits.map((tool, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 px-3 py-1 bg-gray-700/50 rounded-lg text-gray-300"
              >
                <Wrench className="h-4 w-4 text-purple-400" />
                <span>{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};