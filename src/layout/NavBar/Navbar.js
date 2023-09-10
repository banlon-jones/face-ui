import React from 'react';

const Navbar = () => (
  <div className="container p-2">
    <div className="d-flex flex-row justify-content-between">
      <div>
        <h1> Face HR </h1>
      </div>
      <div>
        <button type="button" className="btn btn-primary rounded-pill"> Contact Us </button>
      </div>
    </div>
  </div>
);

export default Navbar;
