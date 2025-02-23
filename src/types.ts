export interface AIAgent {
  id: string;
  name: string;
  type: string;
  specialization: string;
  network: string;
  walletAddress: string;
  ticker: string;
  profitability: number;
  performance: {
    daily: number;
    weekly: number;
    monthly: number;
  };
  tokenPrice: number;
  marketCap: number;
  createdAt: string;
  holders: number;
  tvl: number;
  volume24h: number;
  socialMetrics: {
    mindshare: number;
    impressions: number;
    engagement: number;
    followers: number;
    smartFollowers: number;
  };
  biography: string;
  framework: string[];
  toolkits: string[];
  developerStake: number;
}

export interface Trade {
  txId: string;
  amount: number;
  timestamp: string;
  tokenBought: string;
  profitLoss: number;
}

export interface WalletState {
  connected: boolean;
  address: string | null;
  balance: number;
}