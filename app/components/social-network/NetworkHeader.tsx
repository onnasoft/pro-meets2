import React from 'react';
import { Search } from 'lucide-react';
import { User } from '@onnasoft/pro-meets-core';
import { getAvatarUrl } from '~/utils/gravatar';

interface NetworkHeaderProps {
  currentUser: User;
  unreadCount: number;
  onChatClick: () => void;
}

export const NetworkHeader: React.FC<NetworkHeaderProps> = ({ currentUser, unreadCount, onChatClick }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold text-primary-600">ProMeets</h1>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        
        <img
          src={getAvatarUrl(currentUser)}
          alt={currentUser.name}
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
};