import React, { Component } from "react";
import ShowCounter from './views/showCounter';
import {Demo} from './views/demo';


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center">
            <ShowCounter />
            <hr />
          </div>
          <div className="col-md-6 text-center">
            <Demo />
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
