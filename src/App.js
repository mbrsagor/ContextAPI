import React, { createContext, useState } from 'react'
import Cart from './components/Cart';
import Shop from './components/Shop';
import Name from './pages/Name';
import Sagor from './pages/Sagor';

export const numberContext = createContext();

const App = () => {

  const [count, setCount] = useState(0);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 offset-3">

          <numberContext.Provider value={count}>
              <div className="card text-center">
                <div className="card-header">
                  <h4 className="card-title">Counter Context API & Hooks</h4>
                </div>
                <div className="card-body">
                  <h2>{count}</h2>
                    <button onClick={() => setCount(count+1)} className="btn btn-success btn-sm">+</button>
                    <button onClick={() => setCount(count-1)} className="btn btn-success btn-sm ml-2 mr-2">-</button>
                  <button onClick={() => setCount(0)} className="btn btn-danger btn-sm">x</button>
                  <hr />
                  <Cart />
                  <hr />
                  <Shop/>
                  <hr />
                  <Name />
                  <hr />
                  <Sagor />
                </div>
              </div>
          </numberContext.Provider>

        </div>
      </div>
    </div>
  )
}
export default App;
