import React, { Component } from "react";
import ShowCounter from './views/showCounter'


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-3 text-center">
            <ShowCounter />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
