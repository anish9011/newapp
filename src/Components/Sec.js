import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    const newcount= count+2;
    setCount(newcount);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter Application</h1>
        <div className="counter-display">
          <h2>{count}</h2>
        </div>
        <div className="counter-buttons">
          <button onClick={increment}>Increment&nbsp;&nbsp;&nbsp;</button>
          <button onClick={decrement}>Decrement&nbsp;&nbsp;&nbsp;</button>
          <button onClick={reset}>Reset</button>
        </div>
      </header>
    </div>
  );
}

export default App;
