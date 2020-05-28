import React, { useState } from 'react';

const Memo = () => {
  const [count, setCount] = useState(0);

  const data = 'sample';

  function calculation (arr) {
    console.log('[notUseMemo] calclation');
    return arr.length;
  }

  const calculated = calculation(data);

  console.log('[notUseMemo] render');

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