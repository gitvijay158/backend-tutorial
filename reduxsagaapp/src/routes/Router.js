import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from '../components/users/User';

const Routerapp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<User/>} />
      </Routes>
    </Router>
  );
};

export default Routerapp;
