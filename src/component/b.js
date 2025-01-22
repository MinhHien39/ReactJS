// TestComponent.js

import React from 'react';

// A simple functional component
const TestComponent = ({ title, onClick }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{title || "Default Title"}</h1>
      <button style={styles.button} onClick={onClick}>

        BASCSSSS223344556677

      </button>
    </div>
  );
};

const AnotherComponent = ({ description }) => {
  return (
    <div style={styles.anotherContainer}>
      <p style={styles.description}>{description || "Default Description123123111111111111111111"}</p>
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
  anotherContainer: {
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '6px',
    textAlign: 'center',
    maxWidth: '250px',
    margin: '15px auto',
    backgroundColor: '#fff',
  },
  description: {
    fontSize: '16px',
    color: '#555',
  },
};

export { TestComponent, AnotherComponent };
