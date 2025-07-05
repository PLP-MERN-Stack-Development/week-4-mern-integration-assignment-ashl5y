import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-600 text-white p-4 flex justify-between">
    <h1 className="font-bold text-xl">MERN Blog</h1>
    <div className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/create">Create Post</Link>
      <Link to="/login">Login</Link>
    </div>
  </nav>
);

export default Navbar;
