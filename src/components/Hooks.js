import React, { useState } from 'react';

function Hooks() {

    const [name, setName] = useState({
        full_name: "Md.Bozlur Rosid Sagor"
    })

    return (
        <div>
            <h2>{name.full_name}</h2>
        </div>
    )
}

export default Hooks
