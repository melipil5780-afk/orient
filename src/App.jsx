import React from 'react';

function App() {
  return (
    <div style={{ 
      background: '#0a0f1e', 
      color: '#f1f5f9',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'DM Sans, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ 
          fontFamily: 'Fraunces, serif',
          fontSize: '3rem',
          marginBottom: '1rem'
        }}>
          ORIENT
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1.2rem' }}>
          15 seconds to find your way
        </p>
        <p style={{ marginTop: '2rem', color: '#475569' }}>
          Setup complete! Ready to build.
        </p>
      </div>
    </div>
  );
}

export default App;