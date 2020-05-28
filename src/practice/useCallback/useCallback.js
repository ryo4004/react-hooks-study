import React, { useState, useCallback } from 'react';

const Callback = () => {
  const [count, setCount] = useState(0);

  const data = 'sample';

  function calculation (arr) {
    console.log('[useCallback] calclation');
    return arr.length;
  }

  const calculated = useCallback(calculation(data), [data]);

  console.log('[useCallback] render');

  return (
    <div className='counter'>
      <span>Count: {count}</span>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        "{data}".length is: {calculated}
      </div>
    </div>
  );
};

export default Callback;