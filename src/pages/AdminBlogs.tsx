import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { Blog } from '../types';

export const AdminBlogs: React.FC = () => {
  const { blogs, addBlog, updateBlog, deleteBlog } = useAdmin();
  const [isEditing, setIsEditing] = useState(false);
  const [currentBlog, setCurrentBlog] = useState<Blog | null>(null);

  // Form state for new/edit blog
  const [formData, setFormData] = useState<Omit<Blog, 'id' | 'slug'>>({ 
    title: '',
    summary: '',
    content: '',
    author: '',
    date: new Date().toISOString().split('T')[0],
    imageUrl: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isEditing && currentBlog) {
      updateBlog({ ...currentBlog, ...formData });
    } else {
      addBlog(formData);
    }
    
    resetForm();
  };

  const handleEdit = (blog: Blog) => {
    setIsEditing(true);
    setCurrentBlog(blog);
    setFormData({
      title: blog.title,
      summary: blog.summary,
      content: blog.content,
      author: blog.author,
      date: blog.date,
      imageUrl: blog.imageUrl
    });
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      deleteBlog(id);
    }
  };

  const resetForm = () => {
    setIsEditing(false);
    setCurrentBlog(null);
    setFormData({ 
      title: '',
      summary: '',
      content: '',
      author: '',
      date: new Date().toISOString().split('T')[0],
      imageUrl: ''
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">{isEditing ? 'Edit Blog Post' : 'Add New Blog Post'}</h2>
      
      <form onSubmit={handleSubmit} className="mb-8 bg-gray-50 p-4 rounded-lg">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Summary</label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            rows={2}
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            rows={8}
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Author</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">Image URL</label>
            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>
        
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            {isEditing ? 'Update Blog Post' : 'Add Blog Post'}
          </button>
          
          {isEditing && (
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
      
      <h3 className="text-xl font-semibold mb-4">Blog Posts</h3>
      
      {blogs.length === 0 ? (
        <p className="text-gray-500">No blog posts available.</p>
      ) : (
        <div className="space-y-4">
          {blogs.map(blog => (
            <div key={blog.id} className="border rounded-lg p-4 bg-white">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold">{blog.title}</h4>
                  <p className="text-sm text-gray-600">{blog.date} • {blog.author}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </div>
              </div>
              
              <p className="text-gray-700 mb-2">{blog.summary}</p>
              
              {blog.imageUrl && (
                <div className="w-full h-32 overflow-hidden rounded mb-2">
                  <img 
                    src={blog.imageUrl} 
                    alt={blog.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <p className="text-sm text-gray-500">
                Content: {blog.content.substring(0, 100)}...
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};