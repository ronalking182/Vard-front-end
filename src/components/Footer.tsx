import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-500 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
        <div className="mt-2">
          <a href="/privacy" className="hover:text-blue-300 mx-2">Privacy Policy</a>
          <a href="/terms" className="hover:text-blue-300 mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
