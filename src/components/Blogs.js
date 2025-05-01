import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css';
import heroImg from '../assets/hero-life.jpg';
import edible from '../assets/edible.jpg'
import biotech from '../assets/biotech.jpg';
import drug from '../assets/drug.jpg';
import biopharm from '../assets/biopharming.jpg';
import synthetic from '../assets/synthetic.jpg';
import genetic from '../assets/genetic.jpg';

const blogData = [
  {
    id: 1,
    category: 'Life Science',
    title: 'Edible Vaccines',
    excerpt: 'Edible vaccines represent a groundbreaking innvoation in...',
    image:edible ,
  },
  {
    id: 2,
    category: 'Career',
    title: 'Top Careers in Biotechnology',
    excerpt: 'Discover high-demand biotech roles shaping the future...',
    image: biotech,
  },
  {
    id: 3,
    category: 'Innovation',
    title: 'AI in Drug Discovery',
    excerpt: 'Artificial intelligence is accelerating pharma innovation...',
    image: drug,
  },
  {
    id: 4,
    category: 'Life Science',
    title: 'Biopharming',
    excerpt: 'Biopharming a subset of agricultural biotechnology...',
    image: biopharm,
  },
 { id: 5,
  category: 'Life Science',
  title: 'Synthetic biology',
  excerpt: 'Synthetic biology is an emerging field that combines biology...',
  image:synthetic,
} ,
{ id: 6,
    category: 'Life Science',
    title: 'Genetic Engineering in Medicine',
    excerpt: 'Genetic engineering in medicine is revolutionizing how we approach...',
    image:genetic,
  } ,
];

function Blogs() {
  const [filter, setFilter] = useState('All');

  const filteredBlogs =
    filter === 'All'
      ? blogData
      : blogData.filter((blog) => blog.category === filter);

  return (
    <div className="blog-page">
     
      <section
        className="blog-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="overlay">
          <h1>Explore the Future of Life Sciences</h1>
          <p>
            From CRISPR to AI, dive into the innovations revolutionizing biology, careers, and research.
          </p>
        </div>
      </section>

     
      <div className="blog-container">
        <h2 className="main-heading">BSL Blogs</h2>

     
        <div className="category-buttons">
          {['All', 'Life Science', 'Career', 'Innovation'].map((cat) => (
            <button
              key={cat}
              className={filter === cat ? 'active' : ''}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

       
        <div className="blog-list">
          {filteredBlogs.map((blog) => (
            <Link to={`/blogs/${blog.id}`} className="blog-card" key={blog.id}>
              <img src={blog.image} alt={blog.title} />
              <h3>{blog.title}</h3>
              <p>{blog.excerpt}</p>
              <span className="read-more">Read More →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;

