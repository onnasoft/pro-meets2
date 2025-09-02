import React, { useState } from 'react';
import { Image, Video, Link, Smile } from 'lucide-react';
import { User } from '@onnasoft/pro-meets-core';
import { getAvatarUrl } from '~/utils/gravatar';

interface PostCreatorProps {
  currentUser: User;
  onSubmit: (content: string) => void;
}

export const PostCreator: React.FC<PostCreatorProps> = ({ currentUser, onSubmit }) => {
  const [newPost, setNewPost] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.trim()) return;
    onSubmit(newPost);
    setNewPost('');
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-xs mb-4">
      <div className="flex gap-3 mb-4">
        <img
          src={getAvatarUrl(currentUser)}
          alt={currentUser.name}
          className="w-10 h-10 rounded-full"
        />
        <form onSubmit={handleSubmit} className="flex-1">
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="What's happening?"
            className="w-full border-none resize-none focus:outline-none focus:ring-0 text-gray-900 placeholder-gray-500"
            rows={3}
          />
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="flex gap-2">
              <button type="button" className="p-2 text-gray-400 hover:text-primary-600">
                <Image className="w-5 h-5" />
              </button>
              <button type="button" className="p-2 text-gray-400 hover:text-primary-600">
                <Video className="w-5 h-5" />
              </button>
              <button type="button" className="p-2 text-gray-400 hover:text-primary-600">
                <Link className="w-5 h-5" />
              </button>
              <button type="button" className="p-2 text-gray-400 hover:text-primary-600">
                <Smile className="w-5 h-5" />
              </button>
            </div>
            <button
              type="submit"
              disabled={!newPost.trim()}
              className="bg-primary-600 text-white px-4 py-2 rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-700"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};