import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Chat } from './types';
import { getAvatarUrl } from '~/utils/gravatar';

interface ChatListProps {
  chats: Chat[];
  isOpen: boolean;
  onChatSelect: (chatId: string) => void;
  onClose: () => void;
}

export const ChatList: React.FC<ChatListProps> = ({ chats, isOpen, onChatSelect, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-12 w-80 bg-white rounded-lg shadow-xl z-50 border border-gray-200">
      <div className="p-3 border-b border-gray-200">
        <h3 className="font-semibold text-gray-900">Messages</h3>
      </div>
      
      <div className="max-h-96 overflow-y-auto">
        {chats.length > 0 ? (
          chats.map((chat) => (
            <button
              key={chat.id}
              className="p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
              onClick={() => onChatSelect(chat.id)}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={getAvatarUrl(chat.user)}
                    alt={chat.user.name}
                    className="w-10 h-10 rounded-full"
                  />
                  {/*chat.user.online && */ (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-gray-900 truncate">
                      {chat.user.name}
                    </h4>
                    <span className="text-xs text-gray-500">
                      {chat.messages[chat.messages.length - 1]?.timestamp}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm truncate">
                    {chat.messages[chat.messages.length - 1]?.content || 'Start a conversation'}
                  </p>
                </div>
                {chat.unread > 0 && (
                  <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded-full min-w-[20px] text-center">
                    {chat.unread}
                  </span>
                )}
              </div>
            </button>
          ))
        ) : (
          <div className="p-6 text-center text-gray-500">
            <MessageCircle className="w-12 h-12 mx-auto mb-2 opacity-50" />
            <p>No messages yet</p>
          </div>
        )}
      </div>
      
      <div className="p-3 border-t border-gray-200">
        <button 
          className="w-full text-primary-600 font-medium text-sm hover:text-primary-700"
          onClick={onClose}
        >
          New message
        </button>
      </div>
    </div>
  );
};