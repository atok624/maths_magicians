import React from 'react';
import './Calculator.css';
import Display from './display';

function Calculator() {
  return (
    <div className="calculator">
      <Display />
      <div className="keypad">
        <button type="button" className="key">AC</button>
        <button type="button" className="key">+/-</button>
        <button type="button" className="key">%</button>
        <button type="button" className="key orange">÷</button>
        <button type="button" className="key">7</button>
        <button type="button" className="key">8</button>
        <button type="button" className="key">9</button>
        <button type="button" className="key orange">x</button>
        <button type="button" className="key">4</button>
        <button type="button" className="key">5</button>
        <button type="button" className="key">6</button>
        <button type="button" className="key orange">-</button>
        <button type="button" className="key">1</button>
        <button type="button" className="key">2</button>
        <button type="button" className="key">3</button>
        <button type="button" className="key orange">+</button>
        <button type="button" className="key zero">0</button>
        <button type="button" className="key">.</button>
        <button type="button" className="key orange">=</button>
      </div>
    </div>
  );
}

export default Calculator;
