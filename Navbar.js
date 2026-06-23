import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 30px',
      backgroundColor: '#007bff',
      color: 'white',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ margin: 0, fontSize: '24px' }}>EduBridge 🎓</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        <span style={{ cursor: 'pointer', fontWeight: '500' }}>Dashboard</span>
        <span style={{ cursor: 'pointer', fontWeight: '500' }}>Post a Job</span>
      </div>
    </nav>
  );
};

export default Navbar;