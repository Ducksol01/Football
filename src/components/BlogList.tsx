import React from 'react';
import { Link } from 'react-router-dom';
import { Blog } from '../types';

interface BlogListProps {
  blogs: Blog[];
}

export const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Latest Football News & Analysis</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="card-football rounded-lg shadow-md overflow-hidden bg-white bg-opacity-90 hover:shadow-lg transition-shadow">
            <img 
              src={blog.imageUrl} 
              alt={blog.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{blog.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{blog.date} • {blog.author}</p>
              <p className="text-gray-700 mb-4 line-clamp-3">{blog.summary}</p>
              <Link 
                to={`/blog/${blog.slug}`} 
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};