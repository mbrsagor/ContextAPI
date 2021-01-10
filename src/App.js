import React, { Component } from "react";
import Counter from './components/counter';
import { CounterCountext } from "./context/counter_context";


class App extends Component {
  render() {
    return (
      <div>
        <CounterCountext>
          <Counter />
        </CounterCountext>
      </div>
    );
  }
}

export default App;
