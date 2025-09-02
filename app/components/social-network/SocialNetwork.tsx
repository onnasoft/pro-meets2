import { useState } from 'react';
import { Post, User } from '@onnasoft/pro-meets-core';
import { ChatList } from '~/components/social-network/ChatList';
import { ChatPopup } from '~/components/social-network/ChatPopup';
import { currentUser, mockPosts, mockUsers } from '~/components/social-network/data/mockData';
import { NetworkHeader } from '~/components/social-network/NetworkHeader';
import { NetworkSidebar } from '~/components/social-network/NetworkSidebar';
import { PostCreator } from '~/components/social-network/PostCreator';
import { PostList } from '~/components/social-network/PostList';
import { Chat, Message } from '~/components/social-network/types';
import { FloatingChatSystem, useChatSystem } from './FloatingChatBox';

export default function SocialNetwork() {
  const [posts, setPosts] = useState<Post[]>(mockPosts);
  const [searchTerm, setSearchTerm] = useState('');
  const [showChatList, setShowChatList] = useState(false);

  // Filtrar empresas para recomendar
  const companiesToFollow = mockUsers.filter(user =>
    user.id !== currentUser.id
  );

  const { chats, startChat, closeChat, addMessage, activeChatId, setActiveChat } = useChatSystem();


  const handlePostSubmit = (content: string) => {
    const newPostObj: Post = {
      id: Date.now().toString(),
      user: currentUser,
      content,
      likes: 0,
      comments: 0,
      shares: 0,
      timestamp: 'Just now'
    };

    setPosts([newPostObj, ...posts]);
  };

  const handleLike = (postId: string) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? {
          ...post,
          likes: post.liked ? post.likes - 1 : post.likes + 1,
          liked: !post.liked
        }
        : post
    ));
  };

  const handleFollowCompany = (company: User) => {

  };

  const handleChatSelect = (chatId: string) => {

  };

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

      <div className="flex flex-1 max-w-7xl mx-auto">
        <main className="flex-1 p-4">
          <PostCreator
            currentUser={currentUser}
            onSubmit={handlePostSubmit}
          />
          <PostList posts={posts} onLike={handleLike} />
        </main>

        <NetworkSidebar
          companies={companiesToFollow as User[]}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onFollowCompany={handleFollowCompany}
        />
      </div>
    </div>
  );
};