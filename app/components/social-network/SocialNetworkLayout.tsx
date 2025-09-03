import { useState } from 'react';
import { FloatingChatSystem, useChatSystem } from '~/components/social-network/FloatingChatBox';
import { currentUser } from '~/components/social-network/data/mockData';
import { NetworkHeader } from '~/components/social-network/NetworkHeader';
import { Message } from '~/components/social-network/types';

interface SocialNetworkLayoutProps {
  readonly children: React.ReactNode;
}

export default function SocialNetworkLayout({ children }: SocialNetworkLayoutProps) {
  const [showChatList, setShowChatList] = useState(false);
  const { chats, startChat, closeChat, addMessage, activeChatId, setActiveChat } = useChatSystem();

  const availableUsers = [currentUser]

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      <style>
        {`
          html {
            height: 100vh;
          }
          body {
            height: 100%;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>

      <NetworkHeader
        currentUser={currentUser}
        unreadCount={0}
        onChatClick={() => setShowChatList(!showChatList)}
      />

      <FloatingChatSystem
        chats={chats}
        availableUsers={availableUsers}
        onSendMessage={(chatId, message) => {
          const newMessage: Message = {
            id: Date.now().toString(),
            user: currentUser,
            content: message,
            timestamp: new Date().toLocaleTimeString()
          };
          addMessage(chatId, newMessage, true);
        }}
        activeChatId={activeChatId}
        onSetActiveChat={setActiveChat}
        onStartChat={(user) => { startChat(currentUser) }}
        onCloseChat={closeChat}
      />

      <div className="flex flex-1 max-w-7xl w-full mx-auto">
        {children}
      </div>
    </div>
  );
};