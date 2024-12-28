import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { createPost } from './api';

const CreatePost = ({ onPostCreated }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: (newPost) => {
      onPostCreated(newPost);
      setTitle('');
      setBody('');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, body, userId: 1 };
    mutation.mutate(newPost);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create a New Post</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <button type="submit" disabled={mutation.isLoading}>
        {mutation.isLoading ? 'Creating...' : 'Create Post'}
      </button>
    </form>
  );
};

export default CreatePost;