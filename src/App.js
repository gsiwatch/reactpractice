import React from 'react';
import './App.css';

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
};

function formatName(user) {
  return `${user.firstName} ${user.lastName}`;
}

const element = (
  <h4>
    Hello, {formatName(user)}...
  </h4>
);

/**
 * babel complies these to ReactDOM.createElement function that
 * intakes three params as argument
 * ReactDOM.createElement(
 *    <targetElement>, {className: 'attributeoptions'}, child or content
 * )
 */
function App() {
  return (
    element
  );
}

export default App;
