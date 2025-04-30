import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogs } from '../types';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowLeft } from 'react-feather';

export const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Blog post not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft size={20} className="mr-1" />
          Back to home
        </Link>

        <article className="card-football rounded-lg shadow-md p-6 bg-white bg-opacity-90">
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          <div className="flex items-center text-gray-600 mb-6">
            <span>{blog.date}</span>
            <span className="mx-2">•</span>
            <span>{blog.author}</span>
          </div>
          
          <img 
            src={blog.imageUrl} 
            alt={blog.title} 
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <div className="prose max-w-none">
            {/* Render content paragraphs */}
            {blog.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
};