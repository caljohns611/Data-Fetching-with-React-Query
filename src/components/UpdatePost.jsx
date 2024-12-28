import React, { useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { updatePost } from './api';

const UpdatePost = ({ post, onPostUpdated }) => {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const mutation = useMutation({
    mutationFn: updatePost,
    onSuccess: (updatedPost) => {
      onPostUpdated(updatedPost);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = { ...post, title, body };
    mutation.mutate(updatedPost);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Post</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <button type="submit" disabled={mutation.isLoading}>
        {mutation.isLoading ? 'Updating...' : 'Update Post'}
      </button>
    </form>
  );
};

export default UpdatePost;