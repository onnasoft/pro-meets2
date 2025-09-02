import React from 'react';
import { Chat } from './types';
import { ChatWindow } from './ChatWindow';

interface ChatPopupProps {
  chats: Chat[];
  activeChatId: string | null;
  messageInput: string;
  onMessageChange: (message: string) => void;
  onSendMessage: () => void;
  onMinimize: (chatId: string) => void;
  onClose: (chatId: string) => void;
}

export const ChatPopup: React.FC<ChatPopupProps> = ({
  chats,
  activeChatId,
  messageInput,
  onMessageChange,
  onSendMessage,
  onMinimize,
  onClose
}) => {
  const activeChat = chats.find(chat => chat.id === activeChatId);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-3">
      {chats.map((chat) => (
        chat.isOpen && (
          <ChatWindow
            key={chat.id}
            chat={chat}
            messageInput={messageInput}
            onMessageChange={onMessageChange}
            onSendMessage={onSendMessage}
            onMinimize={onMinimize}
            onClose={onClose}
          />
        )
      ))}
    </div>
  );
};