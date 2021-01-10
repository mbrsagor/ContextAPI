import React, { createContext, useReducer } from 'react';
import reducer, {createActions} from '../reducer/counter_reducer';


const CounterCountext = createContext();


const CounterProvider = props => {
    const [count, dispatch] = useReducer(reducer, 1);
    const actions = createActions(dispatch);

    return (
        <CounterCountext.Provider value={{count, actions}}>
            {props.children}
        </CounterCountext.Provider>
    )
}

export { CounterCountext, CounterProvider }
