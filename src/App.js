import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Dashboard from './pages/Dashboard';
import Auth from './pages/auth/Auth';
import Registration from './pages/auth/Registration';
import Favourites from './pages/Favourites';
import Plans from './pages/Plans';
import Profile from './pages/Profile';
import Company from './pages/Company';
import DashboardAdmin from './pages/DashboardAdmin';
import Users from './pages/Users';
import Update from './pages/Update';
import Companies from './pages/Companies';
import User from './pages/User';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          <Route
            path="/dashboard-admin"
            element={
              <PrivateRoute role="admin">
                <DashboardAdmin />
              </PrivateRoute>
            }
          />
          <Route
            path="/users"
            element={
              <PrivateRoute role="admin">
                <Users />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/:id"
            element={
              <PrivateRoute role="admin">
                <User />
              </PrivateRoute>
            }
          />
          <Route
            path="/update"
            element={
              <PrivateRoute role="admin">
                <Update />
              </PrivateRoute>
            }
          />
          <Route
            path="/all-companies"
            element={
              <PrivateRoute role="admin">
                <Companies />
              </PrivateRoute>
            }
          />
          <Route
            path="/"
            element={
              <PrivateRoute role="user">
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/authorization" element={<Auth />} />
          <Route path="/registration" element={<Registration />} />
          <Route
            path="/favourites"
            element={
              <PrivateRoute role="user">
                <Favourites />
              </PrivateRoute>
            }
          />
          <Route
            path="/plans"
            element={
              <PrivateRoute role="user">
                <Plans />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/company/:id"
            element={
              <PrivateRoute role="user">
                <Company />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

const PrivateRoute = ({ children, role }) => {
  const { isAuthenticated, userData } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/authorization" />;
  }

  if (role === 'user' && userData.role === 'admin') {
    return <Navigate to="/dashboard-admin" />;
  }

  if (role === 'admin' && userData.role !== 'admin') {
    return <Navigate to="/" />;
  }

  return children;
};

export default App;
