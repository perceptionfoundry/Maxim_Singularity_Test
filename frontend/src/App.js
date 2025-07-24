import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => setMessage('Error connecting to backend.'));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React + Node.js Full Stack App</h1>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
