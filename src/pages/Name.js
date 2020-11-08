import React, {createContext, useState} from 'react'

export const usernameContext = createContext();

export default function Name() {
    const [username, setUsername] = useState('Mbr-Sagor');
    return (
        <div>
            <usernameContext.Provider value={username}>
                <h2>My Name is: {username}</h2>
                <button className="btn btn-success btn-sm" onClick={() => setUsername('mbrsagorbd')}>Change Username</button>
            </usernameContext.Provider>
        </div>
    )
}
