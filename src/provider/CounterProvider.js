import { createContext, useReducer } from 'react'
const Countcontext = createContext()

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const createActions = dispatch => ({
    increment: value => dispatch({
        type: INCREMENT,
        payload: value || 1 
    }),

    deincrement: value => dispatch({
        type: DECREMENT,
        payload: value || 1
    }),

    reset: value => dispatch({
        type: RESET 
    })
})

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT: {
            return state + action.payload
        }
        case DECREMENT: {
            return state - action.payload
        }
        case RESET: {
            return 0
        }
        default:
            return state;
    }
};

const countProvider = props => {
    const [count, dispatch] = useReducer(reducer, 0) 
    const actions = createActions(dispatch) 

    return (
        <Countcontext.Provider value={{count, actions}}>
            {props.children}
        </Countcontext.Provider>
    )
}
export { countProvider, Countcontext}