import React from 'react';
import CounterContext from '../../context/counter_context';



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
    const { count, actions } = useContext(CounterContext);
    return (
        <div>
            <h3>I'm counter from context API</h3>
            <h4>Count: {count}</h4>
            <Controller />
        </div>
    );
}

export default Counter;
