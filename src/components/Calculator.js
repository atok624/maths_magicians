import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculator';

function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });
  function onButtonClick(name) {
    const result = calculate(state, name);
    setState(result);
  }

  return (
    <div className="Calculator">
      <div className="calcspan">
        <h2>Lets do some Maths!</h2>
      </div>
      <div className="calculator">
        <div className="display">
          {state.next || state.total || state.operation || '0'}
        </div>
        <div className="keypad">
          <button
            type="button"
            onClick={(e) => onButtonClick(e.target.value)}
            value="AC"
            id="clear"
            className="key"
          >
            AC
          </button>
          <button
            type="button"
            onClick={(e) => onButtonClick(e.target.value)}
            value="+/-"
            id="sign"
            className="key"
          >
            +/-
          </button>
          <button
            type="button"
            onClick={(e) => onButtonClick(e.target.value)}
            value="%"
            id="modulo"
            className="key"
          >
            %
          </button>
          <button
            type="button"
            onClick={(e) => onButtonClick(e.target.value)}
            value="÷"
            id="divide"
            className="key orange"
          >
            ÷
          </button>
          <button
            type="button"
            onClick={(e) => onButtonClick(e.target.value)}
            value="7"
            id="seven"
            className="key"
          >
            7
          </button>
          <button
            type="button"
            onClick={(e) => onButtonClick(e.target.value)}
            value="8"
            id="eight"
            className="key"
          >
            8
          </button>
          <button
            type="button"
            onClick={(e) => onButtonClick(e.target.value)}
            value="9"
            id="nine"
            className="key"
          >
            9
          </button>
          <button
            type="button"
            onClick={(e) => onButtonClick(e.target.value)}
            value="x"
            id="multiply"
            className="key orange"
          >
            x
          </button>
          <button
            type="button"
            onClick={(e) => onButtonClick(e.target.value)}
            value="4"
            id="four"
            className="key"
          >
            4
          </button>
          <button
            type="button"
            onClick={(e) => onButtonClick(e.target.value)}
            value="5"
            id="five"
            className="key"
          >
            5
          </button>
          <button
            type="button"
            onClick={(e) => onButtonClick(e.target.value)}
            value="6"
            id="six"
            className="key"
          >
            6
          </button>
          <button
            type="button"
            onClick={(e) => onButtonClick(e.target.value)}
            value="-"
            id="minus"
            className="key orange"
          >
            -
          </button>
          <button
            type="button"
            onClick={(e) => onButtonClick(e.target.value)}
            value="1"
            id="one"
            className="key"
          >
            1
          </button>
          <button
            type="button"
            onClick={(e) => onButtonClick(e.target.value)}
            value="2"
            id="two"
            className="key"
          >
            2
          </button>
          <button
            type="button"
            onClick={(e) => onButtonClick(e.target.value)}
            value="3"
            id="three"
            className="key"
          >
            3
          </button>
          <button
            type="button"
            onClick={(e) => onButtonClick(e.target.value)}
            value="+"
            id="plus"
            className="key orange"
          >
            +
          </button>
          <button
            type="button"
            onClick={(e) => onButtonClick(e.target.value)}
            value="0"
            id="zero"
            className="key zero"
          >
            0
          </button>
          <button
            type="button"
            onClick={(e) => onButtonClick(e.target.value)}
            value="."
            id="dot"
            className="key"
          >
            .
          </button>
          <button
            type="button"
            onClick={(e) => onButtonClick(e.target.value)}
            value="="
            id="equals"
            className="key orange"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
