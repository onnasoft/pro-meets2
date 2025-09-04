import { useState } from 'react';
import { User } from '@onnasoft/pro-meets-core';
import { currentUser, mockUsers } from '~/components/social-network/data/mockData';
import { PostCreator } from '~/components/social-network/PostCreator';
import { PostList } from '~/components/social-network/PostList';
import SocialNetworkLayout from './SocialNetworkLayout';
import { NetworkSidebar } from './NetworkSidebar';
import { usePosts } from '~/hooks/posts';

export default function SocialNetwork() {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: posts = [] } = usePosts();
  const companiesToFollow = mockUsers.filter(user =>
    user.id !== currentUser.id
  );

  const handleLike = (postId: string) => {

  };

  const handleFollowCompany = (company: User) => {

  };

  return (
    <SocialNetworkLayout>
      <main className="flex-1 p-4">
        <PostCreator
          currentUser={currentUser}
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