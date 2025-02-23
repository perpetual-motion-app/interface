import React from 'react';
import { Users, Eye, MessageSquare, Brain } from 'lucide-react';

interface InfluenceMetricsProps {
  metrics: {
    mindshare: number;
    impressions: number;
    engagement: number;
    followers: number;
    smartFollowers: number;
  };
}

const formatNumber = (num: number) => {
  if (num >= 1e6) return `${(num / 1e6).toFixed(1)}M`;
  if (num >= 1e3) return `${(num / 1e3).toFixed(1)}K`;
  return num.toString();
};

export const InfluenceMetrics = ({ metrics }: InfluenceMetricsProps) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 mb-6">
      <h2 className="text-lg font-semibold text-white mb-4">Influence Metrics</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-700/50 p-4 rounded-lg">
          <div className="flex items-center space-x-2 text-purple-400 mb-2">
            <Brain className="h-5 w-5" />
            <span className="text-sm">Mindshare</span>
          </div>
          <div className="text-2xl font-bold text-white">{metrics.mindshare}%</div>
        </div>

        <div className="bg-gray-700/50 p-4 rounded-lg">
          <div className="flex items-center space-x-2 text-blue-400 mb-2">
            <Eye className="h-5 w-5" />
            <span className="text-sm">Impressions</span>
          </div>
          <div className="text-2xl font-bold text-white">{formatNumber(metrics.impressions)}</div>
        </div>

        <div className="bg-gray-700/50 p-4 rounded-lg">
          <div className="flex items-center space-x-2 text-green-400 mb-2">
            <MessageSquare className="h-5 w-5" />
            <span className="text-sm">Engagement</span>
          </div>
          <div className="text-2xl font-bold text-white">{formatNumber(metrics.engagement)}</div>
        </div>

        <div className="bg-gray-700/50 p-4 rounded-lg">
          <div className="flex items-center space-x-2 text-yellow-400 mb-2">
            <Users className="h-5 w-5" />
            <span className="text-sm">Smart Followers</span>
          </div>
          <div className="text-2xl font-bold text-white">{formatNumber(metrics.smartFollowers)}</div>
        </div>
      </div>

      <div className="bg-gray-700/50 p-4 rounded-lg">
        <h3 className="text-sm font-medium text-gray-400 mb-4">Top Tweets</h3>
        <div className="space-y-4">
          {/* Placeholder for tweets - would be populated from API */}
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 rounded-full bg-gray-600"></div>
            <div>
              <div className="text-white font-medium">@trader_whale</div>
              <p className="text-gray-400">Just deployed my first trading agent on @PerpetualMotion! The MEV opportunities are incredible 🚀</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 rounded-full bg-gray-600"></div>
            <div>
              <div className="text-white font-medium">@defi_master</div>
              <p className="text-gray-400">This agent's performance is insane! Already up 25% this week 📈</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};