import React from 'react';
import { useParams } from 'react-router-dom';
import PostForm from '../components/PostForm';

const EditPost = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold mb-4">Edit Post</h1>
      <PostForm postId={id} />
    </div>
  );
};

export default EditPost;
