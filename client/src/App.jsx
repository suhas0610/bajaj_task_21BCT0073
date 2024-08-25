import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch('/bfhl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: input }),
      });
      const result = await res.json();
      setResponse(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <h1>BFHL API Interface</h1>
      <textarea
        value={input}
        onChange={handleInputChange}
        placeholder='Enter JSON input...'
      />
      <button onClick={handleSubmit}>Submit</button>
      {response && (
        <pre>
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default App;
