import React from 'react';
import { User, Copy } from 'lucide-react';

interface DeveloperInfoProps {
  walletAddress: string;
  stake: number;
}

export const DeveloperInfo = ({ walletAddress, stake }: DeveloperInfoProps) => {
  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h2 className="text-lg font-semibold text-white mb-4">Developer</h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <User className="h-5 w-5 text-purple-500" />
            </div>
            <div>
              <div className="text-sm text-gray-400">Wallet Address</div>
              <div className="flex items-center space-x-2">
                <span className="text-white font-medium">
                  {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                </span>
                <button
                  onClick={copyAddress}
                  className="p-1 hover:bg-gray-600 rounded-lg transition-colors"
                >
                  <Copy className="h-4 w-4 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-3 bg-gray-700/50 rounded-lg">
          <div className="text-sm text-gray-400 mb-1">$MOTION Staked</div>
          <div className="text-xl font-bold text-white">${stake.toLocaleString()}</div>
        </div>

        <div className="p-4 bg-gray-700/50 rounded-lg">
          <h3 className="text-sm font-medium text-white mb-2">Overview</h3>
          <div className="space-y-2 text-sm text-gray-400">
            <p>• Verified developer with 5+ successful agents</p>
            <p>• Specializes in MEV and arbitrage strategies</p>
            <p>• Active in the community since 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};