import { useEffect } from 'react';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';

class CounterStore {
  number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  fetchNumber = async () => {
    try {
      const response = await fetch('http://localhost:3001/number');
      const data = await response.json();
      this.number = data.number;
    } catch (error) {
      console.error('There was an error fetching the number!', error);
    }
  };

  updateNumber = async () => {
    try {
      const response = await fetch('http://localhost:3001/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      this.number = data.number;
    } catch (error) {
      console.error('There was an error updating the number!', error);
    }
  };
}

const counterStore = new CounterStore();

const Counter = observer(() => {
  useEffect(() => {
    counterStore.fetchNumber();
  }, []);

  return (
    <div>
      <h1>Counter: {counterStore.number}</h1>
      <button onClick={counterStore.updateNumber}>Increment</button>
    </div>
  );
});

export default Counter;