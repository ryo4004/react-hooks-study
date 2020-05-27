import React, { useState, useMemo } from 'react';

const Memo = () => {
  const [count, setCount] = useState(0);

  const data = 'sample';

  function calculation (arr) {
    console.log('[useMemo] calclation');
    return arr.length;
  }

  const calculated = useMemo(() => calculation(data), [data]);

  console.log('[useMemo] render');

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

export default Memo;