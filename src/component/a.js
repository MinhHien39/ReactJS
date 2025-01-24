// TestComponent.js

import React from 'react';

// A simple functional component
const TestComponent = ({ title, onClick }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{title || "Default Title"}</h1>
      <button style={styles.button} onClick={onClick}>

        AA

      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center',
    maxWidth: '300px',
    margin: '20px auto',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: '20px',
    marginBottom: '10px',
    color: '#333',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default TestComponent;
