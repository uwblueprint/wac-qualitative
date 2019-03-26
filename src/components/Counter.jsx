import React from 'react';

const Counter = ({ count, increment, decrement }) => {
  const incrementClick = () => increment();
  const decrementClick = () => decrement();
  return (
    <div className="TesterUI">
      {count}
      <button onClick={incrementClick}>Increment</button>
      <button onClick={decrementClick}>Decrement</button>
    </div>
  );
};

export default Counter;
