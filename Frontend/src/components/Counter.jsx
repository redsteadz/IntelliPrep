import React, { useState } from 'react';

const Counter = () => {
  // Using useState to create a state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  // Event handler to increment the count when the button is clicked
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      {/* Button to trigger the increment */}
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Counter;
