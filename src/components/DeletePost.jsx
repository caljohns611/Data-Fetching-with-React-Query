import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { deletePost } from './api';

const DeletePost = ({ postId, onPostDeleted }) => {
  const mutation = useMutation({
    mutationFn: deletePost,
    onMutate: () => {
      onPostDeleted(postId);
    },
  });

  return (
    <button onClick={() => mutation.mutate(postId)} disabled={mutation.isLoading}>
      {mutation.isLoading ? 'Deleting...' : 'Delete Post'}
    </button>
  );
};

export default DeletePost;