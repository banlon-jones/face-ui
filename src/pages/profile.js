import React from 'react';
import EllipseImg from '../assets/Icons/EllipseImg.png';
import Down from '../assets/Icons/Down.png';

export default function Profile() {
  return (
    <div className="container">
      <div className="border-secondary border-4 d-flex">
        <div className="m-2">
          <img src={EllipseImg} alt="User name" />
        </div>
        <div>
          <div className="m-2">
            <span className="me-2">Fiona Anye</span>
          </div>
          <small className="text-sm-center p-2">Software Developer</small>
        </div>
        <div>
          <img src={Down} alt="User name" className="ms-4" />
        </div>
      </div>
    </div>
  );
}
