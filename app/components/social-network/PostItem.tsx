import React from 'react';
import { Heart, MessageSquare, Share } from 'lucide-react';
import { getAvatarUrl } from '~/utils/gravatar';
import { Post } from '@onnasoft/pro-meets-core';
import HTMLView from '../HTMLView';

interface PostItemProps {
  post: Post;
  onLike: (postId: string) => void;
}

export const PostItem: React.FC<PostItemProps> = ({ post, onLike }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-xs">
      <div className="flex gap-3">
        <img
          src={getAvatarUrl(post.user)}
          alt={post.user?.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold text-gray-900">{post.user?.name}</h4>
            {/*post.user.isCompany && */  (
              <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                Company
              </span>
            )}
            <span className="text-gray-500">@{post.user?.email}</span>
            <span className="text-gray-400">·</span>
            <span className="text-gray-500 text-sm">{post.timestamp}</span>
          </div>
          <p className="text-gray-800 mb-4">
            <HTMLView value={post.content} />
          </p>
          
          <div className="flex gap-6 text-gray-500">
            <button
              onClick={() => onLike(post.id)}
              className={`flex items-center gap-1 ${post.liked ? 'text-red-500' : 'hover:text-red-500'}`}
            >
              <Heart className={`w-5 h-5 ${post.liked ? 'fill-current' : ''}`} />
              <span>{post.likes}</span>
            </button>
            <button className="flex items-center gap-1 hover:text-primary-600">
              <MessageSquare className="w-5 h-5" />
              <span>{post.comments}</span>
            </button>
            <button className="flex items-center gap-1 hover:text-primary-600">
              <Share className="w-5 h-5" />
              <span>{post.shares}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};