// TestComponent.js

import React from 'react';

// A simple functional component for demonstrating a title and button
const TestComponent = ({ title, onClick }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{title || "Default Title"}</h1>
      <button style={styles.button} onClick={onClick}>

        CCDDEEFFGG3344

      </button>
    </div>
  );
};

// Another component to display a description text
const AnotherComponent = ({ description }) => {
  return (
    <div style={styles.anotherContainer}>
      <p style={styles.description}>{description || "Default Description11111111111111111111111111111"}</p>
    </div>
  );
};

// A test component for development with extended functionality
const TestComponentDev = ({ title, description, onButtonClick, onDescriptionClick }) => {
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
};

export { TestComponent, AnotherComponent, TestComponentDev };
