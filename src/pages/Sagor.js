import React from 'react';
import {usernameContext} from './Name';

export default function Sagor() {

    const name_context = React.useContext(usernameContext);
    console.log(name_context);

    return (
        <div>
            <h2>I'm calling from: {name_context}</h2>
        </div>
    )
}
