
import React from 'react';
import { Home, Search, Calendar, User } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentTab?: 'home' | 'search' | 'bookings' | 'profile';
  onTabChange?: (tab: 'home' | 'search' | 'bookings' | 'profile') => void;
}

const Layout = ({ children, currentTab = 'home', onTabChange }: LayoutProps) => {
  const handleTabClick = (tab: 'home' | 'search' | 'bookings' | 'profile') => {
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-md mx-auto relative">
      {/* Main Content */}
      <div className="flex-1 pb-20 overflow-y-auto">
        {children}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around items-center">
          <button
            onClick={() => handleTabClick('home')}
            className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${
              currentTab === 'home' 
                ? 'text-sky-blue-500 bg-sky-blue-50' 
                : 'text-gray-500 hover:text-sky-blue-500'
            }`}
          >
            <Home size={24} />
            <span className="text-xs mt-1 font-medium">Home</span>
          </button>

          <button
            onClick={() => handleTabClick('search')}
            className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${
              currentTab === 'search' 
                ? 'text-sky-blue-500 bg-sky-blue-50' 
                : 'text-gray-500 hover:text-sky-blue-500'
            }`}
          >
            <Search size={24} />
            <span className="text-xs mt-1 font-medium">Search</span>
          </button>

          <button
            onClick={() => handleTabClick('bookings')}
            className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${
              currentTab === 'bookings' 
                ? 'text-sky-blue-500 bg-sky-blue-50' 
                : 'text-gray-500 hover:text-sky-blue-500'
            }`}
          >
            <Calendar size={24} />
            <span className="text-xs mt-1 font-medium">Bookings</span>
          </button>

          <button
            onClick={() => handleTabClick('profile')}
            className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${
              currentTab === 'profile' 
                ? 'text-sky-blue-500 bg-sky-blue-50' 
                : 'text-gray-500 hover:text-sky-blue-500'
            }`}
          >
            <User size={24} />
            <span className="text-xs mt-1 font-medium">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Layout;
