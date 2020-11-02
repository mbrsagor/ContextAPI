import React from 'react';
import { numberContext } from '../App';

const Shop = () => {
    const number = React.useContext(numberContext);
    return (
        <>
            <h2>I'm from shop component</h2>
            <h3>My number is: {number}</h3>
        </>
    )
}

export default Shop;
