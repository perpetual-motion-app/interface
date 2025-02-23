import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  PlusCircle, 
  Store, 
  Rocket,
  User,
  Briefcase,
  Bot,
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { Modal } from '../ui/Modal';

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}

const NavItem = ({ to, icon, label, isActive }: NavItemProps) => (
  <Link
    to={to}
    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
      isActive 
        ? 'bg-blue-600 text-white' 
        : 'text-gray-400 hover:text-white hover:bg-gray-800'
    }`}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

interface NavGroupProps {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const NavGroup = ({ label, icon, children }: NavGroupProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="space-y-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2 text-gray-400 hover:text-white transition-colors"
      >
        <div className="flex items-center space-x-2">
          {icon}
          <span>{label}</span>
        </div>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="pl-10 space-y-1">
          {children}
        </div>
      )}
    </div>
  );
};

export const Sidebar = () => {
  const location = useLocation();
  const [showComingSoon, setShowComingSoon] = useState(false);
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-64 bg-gray-900 border-r border-gray-800 p-4 flex flex-col">
      <Link to="/" className="flex items-center space-x-2 px-4 py-2 mb-8">
        <div className="w-8 h-8">
          <svg 
            viewBox="0 0 189.03 208" 
            className="text-blue-500 w-full h-full"
            aria-label="Perpetual Motion Logo"
          >
            <g>
              <path 
                fill="currentColor"
                d="M104.92,6v45h-61.5c-.83,0-7.54,2.5-8.87,3.13-21.43,10.1-15.73,36.52-15.58,55.33.12,15.98-.69,32.13-.08,48.08.19,5.04,3.84,13.22-4.51,5.51C-4.86,145.26.65,115.71.97,92.45c.18-13.27-1.87-21.47,4.09-34.81,6.96-15.58,25.29-26.64,42.36-26.64h41.5V0l16,6Z"
              />
              <path 
                fill="currentColor"
                d="M102.92,175v33c-1.93-.98-17-6.08-17-7v-46h56.5c1,0,7-1.95,8.48-2.52,27.93-10.6,19.04-44.91,18.97-67.94-.04-14.24,1.26-28.33,1.06-42.55,9.2,6.78,15.22,17.21,16.98,28.51-1.78,29.14,9.33,68.98-14,91.98-5.9,5.82-22.33,12.51-30.49,12.51h-40.5Z"
              />
              <path 
                fill="currentColor"
                d="M115.92,12c.68-.77,13.06,7.91,15.4,8.1l1.61,2.39c-1.3,19.73,1.72,41.58.03,61.04-1.1,12.63-11.11,27.02-24.53,28.47-16.79,1.81-31.85-7.11-33.55,16.45-1.35,18.79.18,39.33,1.03,58.05.08,1.68.35,10.09,0,10.48-.64.72-14.89-7.92-17.39-8.1l-1.66-3.34c1.38-21.16-1.63-44.17.02-65.09,1.27-16.05,9.74-27.48,26.5-28.5,8.59-.52,23.7,4.59,29.39-3.62.74-1.06,3.15-6.98,3.15-7.85V12Z"
              />
              <path 
                fill="currentColor"
                d="M104.92,62v20c-11.22-.29-43.56-4.15-51.94,2.56-1.91,1.53-6.06,8.66-6.06,10.94v82c0,.17,2.54,3.44-.48,2.49s-13.45-6.19-15.91-8.1c-.88-.69-1.62-1.06-1.62-2.38l-.03-81.04c.86-12.85,10.41-25.99,23.83-27.26,3.1-.29,5,.84,7.67.84,14.85-.02,29.71-.08,44.54-.05Z"
              />
              <path 
                fill="currentColor"
                d="M142.92,27c.77-.87,15.19,7.42,17.04,8.67v80.87c-.13,8.85-12.55,26.46-21.54,26.46h-51.5c-1,0-.78-18.43-1.01-20.01l43.02-.39c6.32-.1,13.98-8.2,13.98-14.11V27Z"
              />
            </g>
          </svg>
        </div>
        <span className="text-xl font-bold text-white">Perpetual Motion</span>
      </Link>

      <button
        onClick={() => setShowComingSoon(true)}
        className="flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors mb-6"
      >
        <PlusCircle className="h-5 w-5" />
        <span>Create New Agent</span>
      </button>

      <nav className="space-y-6">
        <NavGroup label="Marketplace" icon={<Store className="h-5 w-5" />}>
          <NavItem
            to="/app/marketplace/live"
            icon={<Bot className="h-4 w-4" />}
            label="Live Agents"
            isActive={isActive('/app/marketplace/live')}
          />
          <NavItem
            to="/app/marketplace/iao"
            icon={<Rocket className="h-4 w-4" />}
            label="Initial Agent Offering"
            isActive={isActive('/app/marketplace/iao')}
          />
        </NavGroup>

        <NavGroup label="My Profile" icon={<User className="h-5 w-5" />}>
          <NavItem
            to="/app/profile/assets"
            icon={<Briefcase className="h-4 w-4" />}
            label="My Assets"
            isActive={isActive('/app/profile/assets')}
          />
          <NavItem
            to="/app/profile/agents"
            icon={<Bot className="h-4 w-4" />}
            label="My Agents"
            isActive={isActive('/app/profile/agents')}
          />
        </NavGroup>
      </nav>

      <Modal isOpen={showComingSoon} onClose={() => setShowComingSoon(false)}>
        <div className="p-6 text-center">
          <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Sparkles className="h-8 w-8 text-blue-500" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Coming Soon</h2>
          <p className="text-gray-400 mb-6">
            The agent creation feature is currently in development. Stay tuned for updates!
          </p>
          <button
            onClick={() => setShowComingSoon(false)}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-white"
          >
            Got it
          </button>
        </div>
      </Modal>
    </div>
  );
};