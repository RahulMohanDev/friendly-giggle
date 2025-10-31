import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleAdd = () => {
    setResult(Number(num1) + Number(num2));
  };

  const handleSubtract = () => {
    setResult(Number(num1) - Number(num2));
  };

  const handleClear = () => {
    setNum1('');
    setNum2('');
    setResult(null);
  };

  return (
    <div className="calculator">
      <h1>Simple Calculator</h1>
      <div>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="First number"
          data-testid="num1-input"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Second number"
          data-testid="num2-input"
        />
      </div>
      <div>
        <button onClick={handleAdd} data-testid="add-button">
          Add
        </button>
        <button onClick={handleSubtract} data-testid="subtract-button">
          Subtract
        </button>
        <button onClick={handleClear} data-testid="clear-button">
          Clear
        </button>
      </div>
      {result !== null && (
        <div data-testid="result">
          Result: {result}
        </div>
      )}
    </div>
  );
}

export default Calculator;
