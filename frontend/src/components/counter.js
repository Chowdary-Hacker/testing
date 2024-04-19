import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('black');

   useEffect(() => {
     setColor(count % 2 == 0? 'green':'yellow') ;
  }, [count]); 

  const raise = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2 style={{ color: color} }>Clicked Count: {count}</h2>
      <button onClick={raise}>Click</button>
    </div>
  );
};

export default Counter;
