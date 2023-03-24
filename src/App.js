import './App.css';
import React from 'react';
import Calculator from './components/Calculator';
import RandomQuote from './components/quotes';

function App() {
  return (
    <div className="app">
      <Calculator />
      <RandomQuote />
    </div>
  );
}

export default App;
