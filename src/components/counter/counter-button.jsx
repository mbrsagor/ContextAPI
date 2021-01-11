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
