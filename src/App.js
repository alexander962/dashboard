import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ecommerce from './pages/Ecommerce';
import Auth from './pages/auth/Auth';
import Registration from './pages/auth/Registration';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ecommerce />} />
        <Route path="/authorization" element={<Auth />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
