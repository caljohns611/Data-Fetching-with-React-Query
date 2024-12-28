import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PostsList from './PostsList';
import CreatePost from './CreatePost';
import UpdatePost from './UpdatePost';
import DeletePost from './DeletePost';

const queryClient = new QueryClient();

function App() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  const handlePostCreated = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  const handlePostUpdated = (updatedPost) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
    setEditingPost(null);
  };

  const handlePostDeleted = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>React Query CRUD Example</h1>
        <CreatePost onPostCreated={handlePostCreated} />
        <PostsList posts={posts} />
        {editingPost && (
          <UpdatePost post={editingPost} onPostUpdated={handlePostUpdated} />
        )}
        {posts.map((post) => (
          <div key={post.id}>
            <DeletePost postId={post.id} onPostDeleted={handlePostDeleted} />
          </div>
        ))}
      </div>
    </QueryClientProvider>
  );
}

export default App;