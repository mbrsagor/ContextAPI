# ContextAPI counter app

> The project is basically ContextAPI counter app.

###### How to run the project on your localhost or local development server? Please bellow the command:

```
cd ContextAPI
yarn install
yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

##### Example:
Step: 1 Create a a new file `context.js`
```javascript
import React, { useState, createContext } from 'react';

// Create context Object
export const CounterContext = createContext()

export const CounterContextProvider = props => {
    const [count, setCount] = useState(0);

    return (
        <CounterContext.Provider value={[count, setCount]}>
            {props.children}
        </CounterContext.Provider>
    )
}
```

Step: 2 Create a a new file `counter-display.jsx`
```javascript
import React, { useContext } from 'react';
import { CounterContext } from '../../context/counter_context';


const CounterDispaly = () => {

    const [count] = useContext(CounterContext)
    return (
        <div>
            <h2>Count: {count}</h2>
        </div>
    );
}
export default CounterDispaly;
```

Step: 3 Create a a new file `counter-button.jsx`:
```javascript
import React, { useContext } from 'react';
import { CounterContext } from '../../context/counter_context';


const CounterButton = () => {
    const [count, setCount] = useContext(CounterContext);

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }


    return (
        <div>
            <button className="btn btn-success btn-sm mr-2" onClick={increment}>Increment</button>
            <button className="btn btn-success btn-sm mr-2" onClick={decrement}>Decrement</button>
            <button className="btn btn-danger btn-sm" onClick={reset}>Reset</button>
        </div>
    )

}

export default CounterButton;
```

Step: 4 Create a a new file `show-counter.jsx`:
```javascript
import React from 'react';

import CounterDisplay from '../components/counter/counter-display';
import CounterButton from '../components/counter/counter-button';
import { CounterContextProvider } from '../context/counter_context';


export default function ShowCounter() {
    return (
        <div className="card">
            <div className="card-header">
                <h4 className="card-title">Context API Counter</h4>
            </div>
            <div className="card-body">
                <CounterContextProvider>
                    <CounterDisplay />
                    <CounterButton />
                </CounterContextProvider>
            </div>
        </div>
    )
}
```
Step: 5 Create a a new file `app.jsx`:
```javascript
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
```
