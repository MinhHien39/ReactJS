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

// Functional CComponent
const CComponent = ({ title, description, items, onItemClick }) => {
  return (
    <div style={styles.cContainer}>
      <h1 style={styles.title}>{title || "C Component Title"}</h1>
      <p style={styles.description}>{description || "This is a description for C Component."}</p>
      <ul style={styles.itemList}>
        {items && items.length > 0 ? (
          items.map((item, index) => (
            <li 
              key={index} 
              style={styles.item} 
              onClick={() => onItemClick && onItemClick(item)}
            >
              {item}
            </li>
          ))
        ) : (
          <li style={styles.itemEmpty}>No items available</li>
        )}
      </ul>
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
  cContainer: {
    padding: '25px',
    border: '2px solid #bbb',
    borderRadius: '10px',
    textAlign: 'left',
    maxWidth: '400px',
    margin: '20px auto',
    backgroundColor: '#eef2f3',
  },
  itemList: {
    listStyleType: 'none',
    padding: 0,
    marginTop: '15px',
  },
  item: {
    padding: '10px',
    margin: '5px 0',
    backgroundColor: '#f4f4f4',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
  itemEmpty: {
    padding: '10px',
    margin: '5px 0',
    color: '#888',
    textAlign: 'center',
  },

};

export { TestComponent, AnotherComponent, TestComponentDev, BComponent, CComponent };
