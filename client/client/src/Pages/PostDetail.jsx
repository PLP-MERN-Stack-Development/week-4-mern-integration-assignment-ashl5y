import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { postService } from '../services/api';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await postService.getPost(id);
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };
    fetchPost();
  }, [id]);

  return (
    <div className="container mx-auto px-4 py-6">
      {post ? (
        <>
          <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
          <img src={`/uploads/${post.featuredImage}`} alt={post.title} className="mb-4 rounded" />
          <p className="mb-6">{post.content}</p>
          <CommentForm postId={post._id} />
          <CommentList comments={post.comments} />
        </>
      ) : (
        <p>Loading post...</p>
      )}
    </div>
  );
};

export default PostDetail;
