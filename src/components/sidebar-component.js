import React from 'react';
import gridF from '../assets/Icons/Grid.png';
import ShoppingCart from '../assets/Icons/ShoppingCart.png';
import ViewList from '../assets/Icons/ViewList.png';
import ChatDots from '../assets/Icons/ChatDots.png';
import Profile from '../pages/profile';

export default function Sidebar() {
  return (
    <div className="container-fluid row">
      <div className="bg-white">
        <Profile />
        <ul className="list-unstyled">
          <li>
            <a href="/" className="d-block p-3 link-dark text-decoration-none" data-bs-toggle="tooltip">
              <img src={gridF} alt="Logo" className="me-3 bg-white" />
              Overview
            </a>
          </li>
          <li>
            <a href="/" className="d-block p-3 link-dark text-decoration-none" data-bs-toggle="tooltip">
              <img src={ShoppingCart} alt="Logo" className="me-3 bg-white" />
              Shop
            </a>
          </li>
          <li>
            <a href="/" className="d-block p-3 link-dark text-decoration-none" data-bs-toggle="tooltip">
              <img src={ViewList} alt="Logo" className="me-3 bg-white" />
              Released
            </a>
          </li>
          <li>
            <a href="/" className="d-block p-3 link-dark text-decoration-none" data-bs-toggle="tooltip">
              <img src={ChatDots} alt="Logo" className="me-3 bg-white" />
              Comments
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
