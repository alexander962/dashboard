import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Auth from './pages/auth/Auth';
import Registration from './pages/auth/Registration';
import Favourites from './pages/Favourites';
import Plans from './pages/Plans';
import Profile from './pages/Profile';
import Company from './pages/Company';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/authorization" element={<Auth />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/company/:id" element={<Company />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
