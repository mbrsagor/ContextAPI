import React, { Component } from "react";
import ShowCounter from './views/showCounter'


class App extends Component {
  render() {
    return (
      <div>
        <h3>Counter context</h3>
        <ShowCounter />
      </div>
    );
  }
}

export default App;
