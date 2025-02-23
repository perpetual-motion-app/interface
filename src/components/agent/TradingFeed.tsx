import React, { useEffect, useState, useRef } from 'react';
import { ExternalLink, Copy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Trade {
  address: string;
  spent_sol: number;
  token: string;
  created_at: string;
  agent_pnl: number;
}

interface TradingFeedProps {
  agentId: string;
}

export const TradingFeed = ({ agentId }: TradingFeedProps) => {
  const [trades, setTrades] = useState<Trade[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  const fetchTrades = async () => {
    try {
      const response = await fetch('https://smwrqeprxpynbfoggqpr.supabase.co/rest/v1/agent_trading_feed', {
        headers: {
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtd3JxZXByeHB5bmJmb2dncXByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk3NDIzMTgsImV4cCI6MjA1NTMxODMxOH0.uxB0o6fOIoZJk0RrthhQxwxSsxwLncsSZM8X_lY4zHg'
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch trades');
      }
      const data = await response.json();
      
      setTrades(prevTrades => {
        const newTrades = [...data];
        // Filter out trades that already exist
        const uniqueNewTrades = newTrades.filter(
          newTrade => !prevTrades.some(
            existingTrade => existingTrade.address === newTrade.address
          )
        );
        // Combine new trades with existing ones
        return [...uniqueNewTrades, ...prevTrades];
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch trades');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTrades();
    // Set up polling for new trades every 10 seconds
    const interval = setInterval(fetchTrades, 10000);
    return () => clearInterval(interval);
  }, []);

  const copyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  if (isLoading) {
    return (
      <div className="bg-gray-800 rounded-xl p-6 mb-6">
        <div className="text-gray-400 text-center">Loading trades...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-800 rounded-xl p-6 mb-6">
        <div className="text-red-400 text-center">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="space-y-6 mb-6">
      <div className="bg-gray-800 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Agent Trading Feed</h2>

        <div className="overflow-x-auto">
          <div ref={tableRef} className="w-full max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
            <table className="w-full">
              <thead className="sticky top-0 bg-gray-800 z-10">
                <tr className="text-left border-b border-gray-700">
                  <th className="pb-3 text-gray-400 font-medium">Address</th>
                  <th className="pb-3 text-gray-400 font-medium">Spent SOL</th>
                  <th className="pb-3 text-gray-400 font-medium">Token</th>
                  <th className="pb-3 text-gray-400 font-medium">Time</th>
                  <th className="pb-3 text-gray-400 font-medium text-right">Agent P/L</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence>
                  {trades.map((trade, index) => (
                    <motion.tr
                      key={trade.address}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                      className="border-b border-gray-700/50 hover:bg-gray-700/30"
                    >
                      <td className="py-3">
                        <div className="flex items-center space-x-2">
                          <a
                            href={`https://solscan.io/tx/${trade.address}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300"
                          >
                            {trade.address.slice(0, 8)}...{trade.address.slice(-6)}
                          </a>
                          <button
                            onClick={() => copyAddress(trade.address)}
                            className="p-1 hover:bg-gray-700 rounded-lg transition-colors"
                          >
                            <Copy className="h-4 w-4 text-gray-400" />
                          </button>
                        </div>
                      </td>
                      <td className="py-3 text-white">{trade.spent_sol} SOL</td>
                      <td className="py-3 text-white">{trade.token}</td>
                      <td className="py-3 text-gray-400">
                        {formatDate(trade.created_at)}
                      </td>
                      <td className={`py-3 text-right ${
                        trade.agent_pnl >= 0 
                          ? 'text-green-400' 
                          : 'text-red-400'
                      }`}>
                        {trade.agent_pnl.toFixed(2)}%
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Agent Performance</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-700/50 p-4 rounded-lg">
            <div className="text-sm text-gray-400 mb-1">24h Agent P/L</div>
            <div className="text-xl font-bold text-green-400">+$1,234.56</div>
          </div>
          <div className="bg-gray-700/50 p-4 rounded-lg">
            <div className="text-sm text-gray-400 mb-1">7d Agent P/L</div>
            <div className="text-xl font-bold text-green-400">+$5,678.90</div>
          </div>
          <div className="bg-gray-700/50 p-4 rounded-lg">
            <div className="text-sm text-gray-400 mb-1">30d Agent P/L</div>
            <div className="text-xl font-bold text-red-400">-$2,345.67</div>
          </div>
          <div className="bg-gray-700/50 p-4 rounded-lg">
            <div className="text-sm text-gray-400 mb-1">All-time Agent P/L</div>
            <div className="text-xl font-bold text-green-400">+$12,345.67</div>
          </div>
        </div>
      </div>
    </div>
  );
};