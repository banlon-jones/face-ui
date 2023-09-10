import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from '../pages/home/Home';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
