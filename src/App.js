import React from 'react';
import Counter from './components/counter';
import CounterContext from './context/counter_context';

function App() {
  return (
    <div className="App">
      <CounterContext>
        <Counter />
      </CounterContext>
    </div>
  );
}

export default App;
