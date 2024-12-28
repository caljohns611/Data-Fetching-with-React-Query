import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from './api';

const PostsList = () => {
  const { data: posts, isLoading, error } = useQuery(['posts'], fetchPosts);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred</div>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;