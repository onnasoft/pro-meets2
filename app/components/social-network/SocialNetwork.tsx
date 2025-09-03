import { useState } from 'react';
import { Post, User } from '@onnasoft/pro-meets-core';
import { currentUser, mockPosts, mockUsers } from '~/components/social-network/data/mockData';
import { PostCreator } from '~/components/social-network/PostCreator';
import { PostList } from '~/components/social-network/PostList';
import SocialNetworkLayout from './SocialNetworkLayout';
import { NetworkSidebar } from './NetworkSidebar';

export default function SocialNetwork() {
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState<Post[]>(mockPosts);
  const companiesToFollow = mockUsers.filter(user =>
    user.id !== currentUser.id
  );

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

  return (
    <SocialNetworkLayout>
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
    </SocialNetworkLayout>
  );
};