import React from 'react';
import { useNavigate } from 'react-router-dom';

const Intro: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Welcome to VARD!</h1>
      <p className="mb-8 text-lg text-gray-600">Please login or sign up to continue.</p>
      <div className="space-x-4">
        <button
          onClick={() => navigate('/login')}
          className="px-6 py-2 bg-blue-500 text-white font-medium rounded shadow hover:bg-blue-600"
        >
          Login
        </button>
        <button
          onClick={() => navigate('/signup')}
          className="px-6 py-2 bg-green-500 text-white font-medium rounded shadow hover:bg-green-600"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Intro;
