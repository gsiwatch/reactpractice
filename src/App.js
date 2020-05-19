import React from 'react';
import './App.css';

function App() {
  const name = 'render name by putting any valid js expression';
  const element = <h4>example to {name}...</h4>
  return (
    element
  );
}

export default App;
