import React from 'react';
import Counter from './components/counter';
import { CounterCountext } from "./context/counter_context";

function App() {
  return (
    <div className="App">
      <CounterCountext>
        <Counter />
      </CounterCountext>
    </div>
  );
}

export default App;
