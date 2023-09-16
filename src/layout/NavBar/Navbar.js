import React from 'react';
import Button from '../../components/Button-Component';

const Navbar = () => (
  <div className="container p-2">
    <div className="d-flex flex-row justify-content-between">
      <div>
        <h1> Face HR </h1>
      </div>
      <div>
        <Button type="button" label="Contact Us" />
      </div>
    </div>
  </div>
);

export default Navbar;
