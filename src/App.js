import React from 'react';
import './App.css';

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
};

function formatName(user) {
  return `${user.firstName} ${user.lastName}`;
}

function App() {
  const element = <h4>second example of jsx: {formatName(user)}...</h4>
  return (
    element
  );
}

export default App;
