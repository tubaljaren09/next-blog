import React from "react";
import { Post } from "../_data/Post";
import Link from "next/link";

const Blogs = (): React.JSX.Element => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Post.map((post) => (
          <Link
            key={post.id}
            className="bg-white p-4 rounded-md shadow-md"
            href={`/blogs/${post.id}`}
          >
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>Written by: {post.username}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
