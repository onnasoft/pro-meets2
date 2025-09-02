import React, { useRef, useEffect } from 'react';
import { Send, X } from 'lucide-react';
import { Chat } from './types';
import { getAvatarUrl } from '~/utils/gravatar';

interface ChatWindowProps {
  chat: Chat;
  messageInput: string;
  onMessageChange: (message: string) => void;
  onSendMessage: () => void;
  onMinimize: (chatId: string) => void;
  onClose: (chatId: string) => void;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({
  chat,
  messageInput,
  onMessageChange,
  onSendMessage,
  onMinimize,
  onClose
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat.messages]);

  if (!chat.isOpen || chat.isMinimized) return null;

  return (
    <div className="bg-white rounded-lg shadow-xl w-80 h-96 transition-all duration-300 overflow-hidden">
      {/* Header del chat */}
      <div className="bg-primary-600 text-white p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <img
              src={getAvatarUrl(chat.user)}
              alt={chat.user.name}
              className="w-6 h-6 rounded-full"
            />
            {/*chat.user.online && */ (
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-400 rounded-full border border-white"></div>
            )}
          </div>
          <span className="font-medium">{chat.user.name}</span>
          {chat.unread > 0 && (
            <span className="bg-white text-primary-600 text-xs rounded-full px-1.5 py-0.5">
              {chat.unread}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => onMinimize(chat.id)}
            className="p-1 hover:bg-primary-500 rounded"
          >
            <MinimizeIcon />
          </button>
          <button
            onClick={() => onClose(chat.id)}
            className="p-1 hover:bg-primary-500 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mensajes */}
      <div className="h-64 overflow-y-auto p-3 space-y-3 bg-gray-50">
        {chat.messages.length > 0 ? (
          chat.messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.user.id === chat.user.id ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-3 py-2 rounded-lg ${
                  message.user.id === chat.user.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-900 border border-gray-200'
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <span
                  className={`text-xs block mt-1 ${
                    message.user.id === chat.user.id
                      ? 'text-primary-200'
                      : 'text-gray-500'
                  }`}
                >
                  {message.timestamp}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            <p>No messages yet</p>
            <p className="text-sm mt-1">Send a message to start a conversation</p>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input de mensaje */}
      <div className="p-3 border-t border-gray-200">
        <div className="flex gap-2">
          <input
            type="text"
            value={messageInput}
            onChange={(e) => onMessageChange(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-gray-100 border-none rounded-full px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                onSendMessage();
              }
            }}
          />
          <button
            onClick={onSendMessage}
            disabled={!messageInput.trim()}
            className="bg-primary-600 text-white p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-700"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const MinimizeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
  </svg>
);