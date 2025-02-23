import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LogEntry {
  timestamp: string;
  comments: string;
}

const mockLogs: LogEntry[] = [
  {
    timestamp: '2024-03-15T10:30:00Z',
    comments: 'Detected high volume spike in PEPE. Analyzing liquidity depth...'
  },
  {
    timestamp: '2024-03-15T10:29:30Z',
    comments: 'Successfully executed MEV opportunity. Net profit: +2.3 SOL'
  },
  {
    timestamp: '2024-03-15T10:28:45Z',
    comments: 'Monitoring mempool for potential sandwich opportunities'
  },
  {
    timestamp: '2024-03-15T10:27:15Z',
    comments: 'New trading pair identified: SOL/BONK. Calculating optimal entry points...'
  },
  {
    timestamp: '2024-03-15T10:26:00Z',
    comments: 'Updated gas price model based on network congestion patterns'
  }
];

export const AgentLog = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-lg font-semibold text-white">Log</h2>
        <button className="p-1 hover:bg-gray-700 rounded-lg transition-colors">
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-gray-400" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-400" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-4"
          >
            <div className="max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
              <table className="w-full">
                <thead className="sticky top-0 bg-gray-800 z-10">
                  <tr className="text-left border-b border-gray-700">
                    <th className="pb-3 text-gray-400 font-medium w-1/4">Timestamp</th>
                    <th className="pb-3 text-gray-400 font-medium">Comments</th>
                  </tr>
                </thead>
                <tbody>
                  {mockLogs.map((log, index) => (
                    <tr key={index} className="border-b border-gray-700/50">
                      <td className="py-3 text-gray-300">{formatDate(log.timestamp)}</td>
                      <td className="py-3 text-gray-300">{log.comments}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};