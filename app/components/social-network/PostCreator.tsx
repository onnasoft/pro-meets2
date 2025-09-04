import React, { useRef, useState } from 'react';
import { User } from '@onnasoft/pro-meets-core';
import { getAvatarUrl } from '~/utils/gravatar';
import HTMLEditor, { HTMLEditorHandle } from '../HTMLEditor';

interface PostCreatorProps {
  currentUser: User;
  onSubmit: (content: string) => void;
}

export const PostCreator: React.FC<PostCreatorProps> = ({ currentUser, onSubmit }) => {
  const editorRef = useRef<HTMLEditorHandle>(null);
  const [newPost, setNewPost] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.trim()) return;
    onSubmit(newPost);
    setNewPost('');
    editorRef.current?.clearContent();
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-xs mb-4">
      <div className="flex gap-3 my-4">
        <img
          src={getAvatarUrl(currentUser)}
          alt={currentUser.name}
          className="w-10 h-10 rounded-full"
        />
        <form onSubmit={handleSubmit} className="flex-1">
          <div className='h-[214px]'>
            <HTMLEditor
              ref={editorRef}
              height={150}
              value={newPost}
              onChange={(content) => setNewPost(content)}
            />
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <button
              type="submit"
              disabled={!newPost.trim()}
              className="bg-primary-600 w-[100px] z-10 text-white px-4 py-2 rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-700"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};