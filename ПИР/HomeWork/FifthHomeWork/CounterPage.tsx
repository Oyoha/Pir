import React, { useState } from 'react'
import useDebounce from './useDebounce'

function CounterPage() {
  const [count, setCount] = useState(0);
  const debouncedIncrement = useDebounce(() => setCount(count + 1), 500);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Счетчик: {count}</h1>
      <button onClick={debouncedIncrement}>Увеличить</button>
    </div>
  );
}

export default CounterPage;
