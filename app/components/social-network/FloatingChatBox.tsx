import React, { useState } from 'react';
import { MessageCircle, X, Search, Send, Maximize2, Minimize2 } from 'lucide-react';
import { User } from '@onnasoft/pro-meets-core';
import { getAvatarUrl } from '~/utils/gravatar';

interface Chat {
  id: string;
  user: User;
  lastMessage?: string;
  timestamp?: string;
  unread: number;
  isOnline?: boolean;
  messages: Message[];
}

interface Message {
  id: string;
  user: User;
  content: string;
  timestamp: string;
}

interface FloatingChatSystemProps {
  chats: Chat[];
  availableUsers: User[];
  onSendMessage: (chatId: string, message: string) => void;
  onStartChat: (userId: string) => void;
  onCloseChat: (chatId: string) => void;
  activeChatId: string | null;
  onSetActiveChat: (chatId: string | null) => void;
}

export const FloatingChatSystem: React.FC<FloatingChatSystemProps> = ({
  chats,
  availableUsers,
  onSendMessage,
  onStartChat,
  onCloseChat,
  activeChatId,
  onSetActiveChat
}) => {
  const [isListOpen, setIsListOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [isMaximized, setIsMaximized] = useState(false);

  const activeChat = chats.find(chat => chat.id === activeChatId);
  const unreadCount = chats.reduce((total, chat) => total + chat.unread, 0);

  const filteredUsers = availableUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendMessage = () => {
    if (!messageInput.trim() || !activeChatId) return;
    
    onSendMessage(activeChatId, messageInput);
    setMessageInput('');
  };

  const handleStartChat = (userId: string) => {
    onStartChat(userId);
    setIsListOpen(false);
    setSearchTerm('');
  };

  const handleCloseChat = () => {
    if (activeChatId) {
      onCloseChat(activeChatId);
    }
    onSetActiveChat(null);
    setIsMaximized(false);
  };

  const handleToggleList = () => {
    if (activeChatId) {
      // Ocultar chat activo al abrir la lista
      onSetActiveChat(null);
      setIsMaximized(false);
    }
    setIsListOpen(!isListOpen);
  };

  const handleToggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const handleChatSelect = (chatId: string) => {
    onSetActiveChat(chatId);
    setIsListOpen(false);
    // Restablecer a tamaño normal al seleccionar nuevo chat
    setIsMaximized(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
      {/* Lista de Usuarios para Chats */}
      {isListOpen && (
        <div className="bg-white rounded-lg shadow-xl border border-gray-200 w-80 max-h-96 overflow-hidden flex flex-col mb-2">
          <div className="p-3 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">Messages</h3>
            <button
              onClick={() => setIsListOpen(false)}
              className="p-1 hover:bg-gray-200 rounded transition-colors"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          <div className="p-3 border-b border-gray-200">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search people..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {filteredUsers.length > 0 ? (
              <div className="divide-y divide-gray-100">
                {filteredUsers.map((user) => (
                  <div
                    key={user.id}
                    className="p-3 hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => handleStartChat(user.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img
                          src={getAvatarUrl(user)}
                          alt={user.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 text-sm truncate">
                          {user.name}
                        </h4>
                        <p className="text-xs text-gray-600 truncate">
                          Start conversation
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-6 text-center text-gray-500">
                <MessageCircle className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">No people found</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Chat Activo */}
      {activeChat && (
        <div className={`bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col mb-2 ${
          isMaximized ? 'w-96 h-[80vh]' : 'w-80 h-96'
        } transition-all duration-300`}>
          <div className="p-3 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={getAvatarUrl(activeChat.user)}
                alt={activeChat.user.name}
                className="w-6 h-6 rounded-full"
              />
              <span className="font-medium text-sm">{activeChat.user.name}</span>
              {activeChat.isOnline && (
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              )}
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={handleToggleMaximize}
                className="p-1 hover:bg-gray-200 rounded transition-colors"
                title={isMaximized ? "Minimize" : "Maximize"}
              >
                {isMaximized ? (
                  <Minimize2 className="w-4 h-4 text-gray-600" />
                ) : (
                  <Maximize2 className="w-4 h-4 text-gray-600" />
                )}
              </button>
              <button
                onClick={handleCloseChat}
                className="p-1 hover:bg-gray-200 rounded transition-colors"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50">
            {activeChat.messages.length > 0 ? (
              activeChat.messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.user.id === activeChat.user.id ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg ${
                      message.user.id === activeChat.user.id
                        ? 'bg-white text-gray-900 border border-gray-200'
                        : 'bg-primary-600 text-white'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <span
                      className={`text-xs block mt-1 ${
                        message.user.id === activeChat.user.id
                          ? 'text-gray-500'
                          : 'text-primary-200'
                      }`}
                    >
                      {message.timestamp}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <MessageCircle className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">No messages yet</p>
                <p className="text-xs mt-1">Send a message to start the conversation</p>
              </div>
            )}
          </div>

          <div className="p-3 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-gray-100 border-none rounded-full px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSendMessage();
                  }
                }}
              />
              <button
                onClick={handleSendMessage}
                disabled={!messageInput.trim()}
                className="bg-primary-600 text-white p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-700"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Botón de Lista de Chats */}
      <button
        onClick={handleToggleList}
        className="bg-white text-gray-700 p-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors relative border border-gray-200"
      >
        <MessageCircle className="w-6 h-6" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full min-w-[20px] h-5 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Lista de Chats Disponibles (solo iconos) */}
      {chats.length > 0 && !activeChat && !isListOpen && (
        <div className="flex gap-2">
          {chats.slice(0, 4).map((chat) => (
            <button
              key={chat.id}
              onClick={() => handleChatSelect(chat.id)}
              className="bg-white rounded-full shadow-md border border-gray-200 p-2 hover:bg-gray-50 transition-colors relative"
              title={`Chat with ${chat.user.name}`}
            >
              <img
                src={getAvatarUrl(chat.user)}
                alt={chat.user.name}
                className="w-6 h-6 rounded-full"
              />
              {chat.unread > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full min-w-[16px] h-4 flex items-center justify-center">
                  {chat.unread}
                </span>
              )}
            </button>
          ))}
          {chats.length > 4 && (
            <button
              onClick={handleToggleList}
              className="bg-gray-100 rounded-full shadow-md border border-gray-200 p-2 hover:bg-gray-200 transition-colors"
              title="View all chats"
            >
              <span className="text-xs font-medium text-gray-600">+{chats.length - 4}</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

// Hook simplificado para gestionar el estado de los chats
export const useChatSystem = () => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [activeChatId, setActiveChatId] = useState<string | null>(null);

  const startChat = (user: User) => {
    const existingChat = chats.find(chat => chat.user.id === user.id);
    
    if (existingChat) {
      // Si ya existe, activar el chat existente
      setActiveChatId(existingChat.id);
      // Marcar como leído
      setChats(prev => prev.map(chat => 
        chat.id === existingChat.id ? { ...chat, unread: 0 } : chat
      ));
      return existingChat.id;
    }

    // Crear nuevo chat
    const newChat: Chat = {
      id: Date.now().toString(),
      user,
      messages: [],
      unread: 0,
      isOnline: true,
      lastMessage: undefined,
      timestamp: undefined
    };

    setChats(prev => [...prev, newChat]);
    setActiveChatId(newChat.id);
    return newChat.id;
  };

  const closeChat = (chatId: string) => {
    setChats(prev => prev.filter(chat => chat.id !== chatId));
    if (activeChatId === chatId) {
      setActiveChatId(null);
    }
  };

  const addMessage = (chatId: string, message: Message, isOwnMessage: boolean = false) => {
    setChats(prev => prev.map(chat => {
      if (chat.id === chatId) {
        const updatedChat = {
          ...chat,
          messages: [...chat.messages, message],
          lastMessage: message.content,
          timestamp: 'Just now'
        };
        
        // No aumentar unread para mensajes propios
        if (!isOwnMessage) {
          updatedChat.unread = chat.unread + 1;
        }
        
        return updatedChat;
      }
      return chat;
    }));
  };

  const setActiveChat = (chatId: string | null) => {
    setActiveChatId(chatId);
    // Marcar como leído al activar
    if (chatId) {
      setChats(prev => prev.map(chat => 
        chat.id === chatId ? { ...chat, unread: 0 } : chat
      ));
    }
  };

  return {
    chats,
    activeChatId,
    startChat,
    closeChat,
    addMessage,
    setActiveChat,
    setChats
  };
};