const API_URL = 'https://jsonplaceholder.typicode.com/posts';


export const fetchPosts = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};


export const createPost = async (newPost) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Failed to create post');
  }
  return response.json();
};


export const updatePost = async (updatedPost) => {
  const response = await fetch(`${API_URL}/${updatedPost.id}`, {
    method: 'PUT',
    body: JSON.stringify(updatedPost),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Failed to update post');
  }
  return response.json();
};


export const deletePost = async (postId) => {
  const response = await fetch(`${API_URL}/${postId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete post');
  }
  return postId;
};