import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f1f1f1' }}>
      <p>&copy; {new Date().getFullYear()} Comunix Landing. All rights reserved.</p>
    </footer>
  );
};

export default Footer;