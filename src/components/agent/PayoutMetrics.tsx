import React from 'react';
import { DollarSign, Flame, ArrowDownRight, Building } from 'lucide-react';

interface PayoutMetricsProps {
  tradingFees: {
    creator: number;
    treasury: number;
  };
  profits: {
    buybackAmount: number;
    creatorAmount: number;
    tokensBurnt: number;
  };
}

export const PayoutMetrics = ({ tradingFees, profits }: PayoutMetricsProps) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h2 className="text-lg font-semibold text-white mb-4">All-Time Payouts</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-400 mb-3">Trading Fees (1% per Trade)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-700/50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 text-green-400 mb-2">
                <DollarSign className="h-5 w-5" />
                <span className="text-sm">Creator Rewards</span>
              </div>
              <div className="text-2xl font-bold text-white">
                ${tradingFees.creator.toLocaleString()}
              </div>
              <div className="text-sm text-gray-400">0.5% per trade</div>
            </div>

            <div className="bg-gray-700/50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 text-blue-400 mb-2">
                <Building className="h-5 w-5" />
                <span className="text-sm">Treasury</span>
              </div>
              <div className="text-2xl font-bold text-white">
                ${tradingFees.treasury.toLocaleString()}
              </div>
              <div className="text-sm text-gray-400">0.5% per trade</div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-400 mb-3">Profit Distribution</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-700/50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 text-orange-400 mb-2">
                <Flame className="h-5 w-5" />
                <span className="text-sm">Buyback & Burn (20%)</span>
              </div>
              <div className="text-2xl font-bold text-white">
                ${profits.buybackAmount.toLocaleString()}
              </div>
              <div className="text-sm text-gray-400">
                {profits.tokensBurnt.toLocaleString()} $MOTION burnt
              </div>
            </div>

            <div className="bg-gray-700/50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 text-purple-400 mb-2">
                <ArrowDownRight className="h-5 w-5" />
                <span className="text-sm">Creator Profits (80%)</span>
              </div>
              <div className="text-2xl font-bold text-white">
                ${profits.creatorAmount.toLocaleString()}
              </div>
              <div className="text-sm text-gray-400">Total retained earnings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};