import React, { createContext, useReducer } from 'react';
import reducer, { createActions } from '../reducer/counter_reducer';



const CounterContext = createContext();

const CounterProvider = props => {
    const [count, dispatch] = useReducer(reducer, 0);
    const actions = createActions(dispatch);

    return (
        <CounterContext.Provider values={{ count, actions }}>
            {props.children}
        </CounterContext.Provider>
    )

}
export { CounterContext, CounterProvider }
