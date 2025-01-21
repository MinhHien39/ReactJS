// TestComponent.js

import React from 'react';

// Functional TestComponent
const TestComponent = ({ title, onClick }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{title || "Default Title"}</h1>
      <button style={styles.button} onClick={onClick}>
        Click Me
      </button>
    </div>
  );
};

// Functional AnotherComponent
const AnotherComponent = ({ description }) => {
  return (
    <div style={styles.anotherContainer}>
      <p style={styles.description}>{description || "Default Description"}</p>
    </div>
  );
};

// Functional BComponent
const BComponent = ({ message }) => {
  return (
    <div style={styles.bContainer}>
      <p style={styles.message}>{message || "Default Message"}</p>
    </div>
  );
};

// Functional TestComponentDev
const TestComponentDev = ({ title, description, onButtonClick, onDescriptionClick, extraInfo }) => {
  return (
    <div style={styles.devContainer}>
      <div style={styles.section}>
        <h1 style={styles.title}>{title || "Development Title"}</h1>
        <button style={styles.button} onClick={onButtonClick}>
          Perform Action
        </button>
      </div>
      <div style={styles.section} onClick={onDescriptionClick}>
        <p style={styles.description}>{description || "Development Description"}</p>
      </div>
      {extraInfo && (
        <div style={styles.extraInfoContainer}>
          <h2 style={styles.extraTitle}>Extra Information</h2>
          <p style={styles.extraContent}>{extraInfo}</p>
        </div>
      )}
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
  bContainer: {
    padding: '15px',
    border: '1px solid #aaa',
    borderRadius: '6px',
    textAlign: 'center',
    maxWidth: '250px',
    margin: '15px auto',
    backgroundColor: '#f0f0f0',
  },
  message: {
    fontSize: '16px',
    color: '#444',
  },
  devContainer: {
    padding: '25px',
    border: '2px dashed #ccc',
    borderRadius: '10px',
    textAlign: 'left',
    maxWidth: '400px',
    margin: '30px auto',
    backgroundColor: '#eaeaea',
  },
  section: {
    marginBottom: '15px',
  },
  extraInfoContainer: {
    marginTop: '20px',
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '6px',
    backgroundColor: '#fefefe',
  },
  extraTitle: {
    fontSize: '18px',
    color: '#222',
    marginBottom: '10px',
  },
  extraContent: {
    fontSize: '14px',
    color: '#666',
  },
};

export { TestComponent, AnotherComponent, TestComponentDev, BComponent };
