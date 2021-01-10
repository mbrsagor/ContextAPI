export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const RESET = "RESET"



export const createActions = dispatch => ({
    increment: () => dispatch({type: INCREMENT}),
    decrement: () => dispatch({type: DECREMENT}),
    reset: () => dispatch({type: RESET}),
})

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            return state + 1
        case 'DECREMENT':
            return state - 1
        case 'RESET':
            return 0
        default: return state
    }
}
export default reducer;
