import React, {useContext} from 'react';
import {CounterCountext} from '../../context/counter_context';


const Controller = ({actions}) => {
    return (
        <div>
           <button className="btn btn-success btn-sm mr-2" onClick={actions.increment}>Increment</button>
           <button className="btn btn-success btn-sm mr-2" onClick={actions.decrement}>Decrement</button>
           <button className="btn btn-danger btn-sm mr-2" onClick={actions.reset}>Reset</button>
        </div>
    )
}

const Counter = () => {
    const { count, actions } = useContext(CounterCountext);
    return (
        <div>
            <h3>Hooks and context API</h3>
            <h4>Counter : {count}</h4>
            <Controller actions={actions} />
        </div>
    );
}

export default Counter;
