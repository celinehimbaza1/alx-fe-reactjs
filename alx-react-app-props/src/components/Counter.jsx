import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '30px',
        backgroundColor: '#f2f2f2',
        padding: '20px',
        borderRadius: '8px',
        width: '250px',
        margin: '30px auto',
      }}
    >
      <h2>Counter App</h2>
      <p style={{ fontSize: '20px' }}>Current Count: {count}</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button
          onClick={() => setCount(count + 1)}
          style={{ padding: '8px 12px', cursor: 'pointer' }}
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          style={{ padding: '8px 12px', cursor: 'pointer' }}
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          style={{ padding: '8px 12px', cursor: 'pointer' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
