import React from 'react';
import './hero.css';
import Button from '../../components/Button-Component';

const HeroSection = () => (
  <div className="hero">
    <div className="container">
      <div>
        <h1>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          I'm Face
        </h1>
        <h2 className="text-uppercase"> your Human Resource Assistance </h2>
      </div>
      <h4> Welcome </h4>
      <p>
        Our Human Resource tool
        <span className="btn btn-info rounded-pill mx-3"> Coming soon</span>
      </p>
      <div>
        <Button label="Contact now" buttontype="submit" />
      </div>
    </div>
  </div>
);

export default HeroSection;
