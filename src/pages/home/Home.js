import React from 'react';
import HeroSection from '../../layout/Hero-section/HeroSection';
import Navbar from '../../layout/NavBar/Navbar';
import Sidebar from '../../components/sidebar-component';

const Home = () => (
  <div className="m-0 row">
    <div className="col-4">
      <Sidebar />
    </div>
    <div className="col-8">
      <Navbar />
      <HeroSection />
    </div>
  </div>
);

export default Home;
