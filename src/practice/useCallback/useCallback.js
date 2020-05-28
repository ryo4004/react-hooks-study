import React, { useState, useCallback } from 'react';
import Child from './Child';

const Callback = () => {
  const [count, setCount] = useState(0);

  function calculation (arr) {
    return arr && arr.length;
  }

  const calculationCallback = useCallback((data) => calculation(data), []);

  console.log('[useCallback] render');

  return (
    <div className='counter'>
      <span>Count: {count}</span>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <Child props={calculationCallback} parent={'useCallback'} />
    </div>
  );
};

export default Callback;