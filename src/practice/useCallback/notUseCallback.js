import React, { useState } from 'react';
import Child from './Child';

const Callback = () => {
  const [count, setCount] = useState(0);

  function calculation (arr) {
    return arr && arr.length;
  }

  console.log('[useCallback] render');

  return (
    <div className='counter'>
      <span>Count: {count}</span>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <Child props={calculation} parent={'useCallback'} />
    </div>
  );
};

export default Callback;