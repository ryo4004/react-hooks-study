import React, { useState } from 'react';

const Memo = () => {
  const [count, setCount] = useState(0);

  const data = 'sample';

  function calculation (arr) {
    console.log('[notUseMemo] called calclation');
    return arr.length;
  }

  console.log('[notUseMemo] render');

  return (
    <div className='counter'>
      <span>Count: {count}</span>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        "{data}".length is: {calculation(data)}
      </div>
    </div>
  );
};

export default Memo;