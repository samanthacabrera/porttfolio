import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (

    <div className="Home">
          <h2>Front End Web Developer</h2>
          <h1 className="hvr-shrink">Samantha Cabrera</h1>

        <div className="scroll-down">
        <p>⌄</p>
        </div>

          <Link to="/about" className="about-link"><span>about</span></Link>
          <Link to="/work" className="work-link"><span>work</span></Link>
          <Link to="/contact" className="contact-link"><span>contact</span></Link>
      
    </div>
      )
}

export default Home;
    
