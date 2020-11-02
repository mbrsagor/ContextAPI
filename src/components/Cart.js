import React from 'react';
import { numberContext } from '../App';

const Cart = () => {

    const number = React.useContext(numberContext);
    return (
        <>
            <h2>I'm from cart component</h2>
            <h3>my number: {number}</h3>
        </>
    )
}
export default Cart;
