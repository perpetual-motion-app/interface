import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';

export const DashboardLayout = () => {
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  useEffect(() => {
    // Calculate scrollbar width on mount
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';
    document.body.appendChild(outer);

    const inner = document.createElement('div');
    outer.appendChild(inner);

    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
    setScrollbarWidth(scrollbarWidth);

    document.body.removeChild(outer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex">
        {/* Fixed sidebar */}
        <div className="fixed left-0 top-0 h-screen w-64 z-30">
          <Sidebar />
        </div>

        {/* Main content area with horizontal scroll */}
        <div 
          className="flex-1 ml-64"
          style={{ 
            minWidth: `calc(100% - 16rem)`, // 16rem = 64 (sidebar width)
            paddingRight: scrollbarWidth 
          }}
        >
          {/* Fixed top bar */}
          <div className="fixed top-0 left-64 right-0 z-20 bg-gray-900">
            <TopBar />
          </div>
          
          {/* Main content with padding for fixed top bar */}
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 pt-16">
            <main className="p-6 min-w-[800px]">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};