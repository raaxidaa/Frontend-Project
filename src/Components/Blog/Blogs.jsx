import React, { useState, useEffect } from 'react';
import blogs from './blog.json';

export const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  const truncateTitle = (title) => {
    return title.length > 20 ? title.substring(0, 40) + '...' : title;
  };

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(blogs.filter(blog => blog.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="Blogs container">
      <h4>Latest Articles</h4>
      <div className="filters">
        <span onClick={() => setSelectedCategory('All')}>All</span>
        <span onClick={() => setSelectedCategory('Dolar')}>Dolar</span>
        <span onClick={() => setSelectedCategory('Lorem')}>Lorem</span>
        <span onClick={() => setSelectedCategory('Sitaa')}>Sitaa</span>
        <span onClick={() => setSelectedCategory('Ameet')}>Ameet</span>
      </div>
      <div className="center">
        {filteredBlogs.map(blog => (
          <div key={blog.id} className="blog">
            <img src={blog.image} alt={blog.topic} />
            <span>{blog.topic}</span>
            <h4>{truncateTitle(blog.title)}</h4>
            <div className="data">
              <img src={blog.authorImage} alt={blog.author} />
              <span>{blog.author}</span>
              <span>on {blog.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
