import React, { useState, useEffect } from 'react';

const Counter: React.FC = () => {
  const [number, setNumber] = useState<number>(0);

  useEffect(() => {
    // Fetch the initial number from the server
    fetch('http://localhost:3001/number')
      .then(response => response.json())
      .then(data => {
        setNumber(data.number);
      })
      .catch(error => {
        console.error('There was an error fetching the number!', error);
      });
  }, []);

  const updateNumber = () => {
    fetch('http://localhost:3001/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        setNumber(data.number);
      })
      .catch(error => {
        console.error('There was an error updating the number!', error);
      });
  };

  return (
    <div>
      <h1>Counter: {number}</h1>
      <button onClick={updateNumber}>Increment</button>
    </div>
  );
};

export default Counter;