// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


import './App.css'
import Intro from './pages/Intro';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App:React.FC = () =>{
  const isAuthenticated = localStorage.getItem('auth') === 'true';

  return (
    <Router>
      <Navbar/>
      <div className="min-h-screen">
      <Routes>
      <Route path="/" element={<Navigate to="/intro" />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App


