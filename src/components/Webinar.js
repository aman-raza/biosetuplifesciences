import React from 'react';
import './Webinar.css';
import heroImage from '../assets/hero-image.jpg';
import { Link } from 'react-router-dom';

const upcomingWebinars = [
  {
    title: "Advances in Biotech Innovation",
    date: "May 10, 2025",
    time: "3:00 PM IST",
    description: "Explore the latest breakthroughs in biotech with industry experts.",
    link: "#"
  },
  {
    title: "Sustainable Lab Practices",
    date: "May 20, 2025",
    time: "5:30 PM IST",
    description: "Learn how to implement sustainability in daily lab operations.",
    link: "#"
  },
  {
    title: "CRISPR & Gene Editing",
    date: "May 30, 2025",
    time: "4:00 PM IST",
    description: "Dive into the power and ethics of CRISPR technology.",
    link: "#"
  },
  {
    title: "BioStartups Pitch Day",
    date: "June 5, 2025",
    time: "6:00 PM IST",
    description: "Meet the future stars of biotech entrepreneurship.",
    link: "#"
  }
];

const pastWebinars = [
  {
    title: "Genomics & Future Medicine",
    date: "April 10, 2025",
    time: "2:00 PM IST",
    description: "A deep dive into genomics and its future applications."
  },
  {
    title: "Women in Biotech Panel",
    date: "March 15, 2025",
    time: "11:00 AM IST",
    description: "Celebrating the contributions of women in biotechnology."
  },
  {
    title: "AI in Drug Discovery",
    date: "Feb 28, 2025",
    time: "5:00 PM IST",
    description: "How AI is transforming pharmaceutical research."
  },
  {
    title: "Biopharma Trends 2025",
    date: "Jan 20, 2025",
    time: "4:30 PM IST",
    description: "Industry trends and predictions for biopharma in 2025."
  },
  {
    title: "Ethics in Biotechnology",
    date: "Dec 10, 2024",
    time: "3:00 PM IST",
    description: "Discussion on bioethics in research and innovation."
  },
  {
    title: "Vaccine Development Post-COVID",
    date: "Nov 5, 2024",
    time: "12:00 PM IST",
    description: "Examining the rapid development of vaccines in a post-pandemic world."
  },
  {
    title: "Bioinformatics & Big Data",
    date: "Oct 2, 2024",
    time: "10:00 AM IST",
    description: "Using big data and computing in life sciences."
  },
  {
    title: "Startup Success Stories in Biotech",
    date: "Sep 14, 2024",
    time: "6:00 PM IST",
    description: "Inspiring stories of emerging biotech entrepreneurs."
  }
];

const Webinars = () => {
  return (
    <div className="webinar-page">
      <section className="hero">
        <img src={heroImage} alt="Hero" className="hero-img" />
        <div className="hero-text">
          <h1 className="animated-title">Webinars & Events</h1>
          <p>Explore, Learn, and Connect with Science</p>
        </div>
      </section>

      <h2 className="section-title">Upcoming Webinars</h2>
      <div className="webinar-list">
        {upcomingWebinars.map((item, index) => (
          <div className="webinar-card" key={index}>
            <h2>{item.title}</h2>
            <p><strong>Date:</strong> {item.date}</p>
            <p><strong>Time:</strong> {item.time}</p>
            <p>{item.description}</p>
            <Link to="/register" className="register-btn">Register</Link>
          </div>
        ))}
      </div>

      <h2 className="section-title past-title">Past Events</h2>
      <div className="webinar-list past-webinars">
        {pastWebinars.map((item, index) => (
          <div className="webinar-card past-card" key={index}>
            <h2>{item.title}</h2>
            <p><strong>Date:</strong> {item.date}</p>
            <p><strong>Time:</strong> {item.time}</p>
            <p>{item.description}</p>
            <Link to="/watch" className="watch-btn">Watch</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Webinars;





