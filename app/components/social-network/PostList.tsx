import React from 'react';
import { PostItem } from './PostItem';
import { Post } from '@onnasoft/pro-meets-core';

interface PostListProps {
  posts: Post[];
  onLike: (postId: string) => void;
}

export const PostList: React.FC<PostListProps> = ({ posts, onLike }) => {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} onLike={onLike} />
      ))}
    </div>
  );
};