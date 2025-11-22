import React from 'react';

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #6B46C1, #9333EA)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        background: 'white',
        padding: '60px 80px',
        borderRadius: '20px',
        textAlign: 'center',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          color: '#1F2937',
          margin: '0 0 20px 0'
        }}>
          Hello there!
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: '#6B7280',
          margin: '0 0 10px 0'
        }}>
          Welcome to our application
        </p>
        <p style={{
          fontSize: '1rem',
          color: '#9CA3AF',
          margin: '0'
        }}>
          We're glad to have you here
        </p>
      </div>
    </div>
  );
}