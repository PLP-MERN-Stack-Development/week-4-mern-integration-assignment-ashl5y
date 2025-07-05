import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => (
  <div className="border rounded p-4 shadow">
    <h2 className="text-lg font-bold">
      <Link to={`/posts/${post._id}`}>{post.title}</Link>
    </h2>
    <p className="text-sm text-gray-500">By {post.author?.name || 'Anonymous'}</p>
    <p>{post.excerpt || post.content.substring(0, 100)}...</p>
  </div>
);

export default PostCard;
