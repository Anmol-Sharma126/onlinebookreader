import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function FrontPage() {
  return (
    <main>
    <div className="front-page">
      <header>
        <h1>Welcome to our Online Book Reader</h1>
      </header>
      <main>
        <section className="intro-section">
          <h2>Discover a World of Books</h2>
          <p>Explore our vast collection of books across various genres.</p>
          <button>Start Reading</button>
        </section>
        <section className="featured-books-section">
          <h2>Featured Books</h2>
          {/* Display featured books here */}
        </section>
        <section className="about-section">
          <h2>About Us</h2>
          <p>Learn more about our mission and vision for this platform.</p>
          <button>Learn More</button>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Online Book Reader. All rights reserved.</p>
      </footer>
    </div>
    
    </main>
  );
}
