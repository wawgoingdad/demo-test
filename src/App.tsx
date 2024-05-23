import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/Login';
import ForgetPassword from './pages/ForgetPassword';
import LanguageSwitcher from './components/LanguageSwitcher';

const App: React.FC = () => {
  const isAuthenticated = false;

  return (
    <Router>
      <div style={{ position: 'relative' }}>
        <LanguageSwitcher />
        <Routes>
          <Route path="/" element={isAuthenticated ? <h1>Home Page</h1> : <Navigate to="/login" replace />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/login" element={isAuthenticated ? <Navigate to="/" replace /> : <LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
