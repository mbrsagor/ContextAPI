import React, { useState } from 'react';

function Hooks() {

    const [name, setName] = useState({
        full_name: "Md.Bozlur Rosid Sagor"
    })

    const changeHandler = () => {
        setName({
            full_name: 'Mbr-Sagor'
        });
    }

    return (
        <div>
            <h2>{name.full_name}</h2>
            {/* <button onClick={() => setName({full_name:'Mbr-Sagor'})}>Change Name</button> */}
            <button onClick={changeHandler}>Change Name</button>
        </div>
    )
}

export default Hooks
