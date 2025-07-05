import React from 'react';
import PostForm from '../components/PostForm';

const CreatePost = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold mb-4">Create New Post</h1>
      <PostForm />
    </div>
  );
};

export default CreatePost;
