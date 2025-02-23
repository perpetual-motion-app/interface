import React from 'react';
import { Wallet } from 'lucide-react';

export const TopBar = () => {
  const handleConnect = () => {
    // Wallet connection logic will be implemented later
    console.log('Connecting wallet...');
  };

  return (
    <div className="h-16 border-b border-gray-800 bg-gray-900 px-6 flex items-center justify-end">
      <button
        onClick={handleConnect}
        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
      >
        <Wallet className="h-4 w-4" />
        <span>Connect Wallet</span>
      </button>
    </div>
  );
};