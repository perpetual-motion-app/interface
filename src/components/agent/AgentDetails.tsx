import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ExternalLink, Copy, Twitter, Globe } from 'lucide-react';
import { AgentHeader } from './AgentHeader';
import { AgentChart } from './AgentChart';
import { AgentSwap } from './AgentSwap';
import { TokenData } from './TokenData';
import { InfluenceMetrics } from './InfluenceMetrics';
import { AgentBio } from './AgentBio';
import { TradingFeed } from './TradingFeed';
import { DeveloperInfo } from './DeveloperInfo';
import { PayoutMetrics } from './PayoutMetrics';
import { AgentLog } from './AgentLog';
import { AIAgent } from '../../types';

// This would come from your API in a real application
const mockAgent: AIAgent = {
  id: '1',
  name: 'Trench Digger',
  ticker: '$TRENCH',
  type: 'AI-Driven High-Frequency Trading Agent',
  specialization: 'Pump Bot Exploitation & Early-Launch Sniping',
  network: 'Solana (Jupiter Aggregator)',
  walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
  profitability: 89,
  performance: {
    daily: -4.68,
    weekly: 12.8,
    monthly: 45.2
  },
  tokenPrice: 125.50,
  marketCap: 12500000,
  createdAt: '2023-05-15T00:00:00Z',
  holders: 292200,
  tvl: 1500000,
  volume24h: 65690,
  socialMetrics: {
    mindshare: 0.4,
    impressions: 228995,
    engagement: 4587,
    followers: 51004,
    smartFollowers: 925
  },
  biography: 'Maximize profits on Solana DEXes by exploiting pump-and-dump bot patterns through real-time auto-trading, wallet rotation, and AI-driven signal detection',
  framework: ['Perpetual Motion v2', 'HFT Framework'],
  toolkits: ['Recon', 'Snipe', 'Take Profit', 'Wallet Generator', 'Liquidate', 'Evolve', 'Wallet Detection', 'JUP Deploy'],
  developerStake: 50000
};

// Mock payout data
const mockPayouts = {
  tradingFees: {
    creator: 125000,
    treasury: 125000,
  },
  profits: {
    buybackAmount: 450000,
    creatorAmount: 1800000,
    tokensBurnt: 225000,
  },
};

export const AgentDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [timeframe, setTimeframe] = useState<'24h' | '7d' | '30d' | 'all'>('24h');

  // In a real application, you would fetch the agent data based on the ID
  const agent = mockAgent;

  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="grid grid-cols-12 gap-4 lg:gap-6">
        {/* Left Column */}
        <div className="col-span-12 lg:col-span-8 space-y-4 lg:space-y-6">
          <AgentHeader agent={agent} />
          <AgentChart />
          <InfluenceMetrics metrics={agent.socialMetrics} />
          <AgentBio 
            biography={agent.biography}
            framework={agent.framework}
            toolkits={agent.toolkits}
            name={agent.name}
            type={agent.type}
            network={agent.network}
            token={agent.ticker}
          />
          <TradingFeed agentId={agent.id} timeframe={timeframe} onTimeframeChange={setTimeframe} />
          <AgentLog />
        </div>

        {/* Right Column */}
        <div className="col-span-12 lg:col-span-4 space-y-4 lg:space-y-6">
          <AgentSwap agent={agent} />
          <TokenData agent={agent} />
          <DeveloperInfo 
            walletAddress={agent.walletAddress}
            stake={agent.developerStake}
          />
          <PayoutMetrics 
            tradingFees={mockPayouts.tradingFees}
            profits={mockPayouts.profits}
          />
        </div>
      </div>
    </div>
  );
};