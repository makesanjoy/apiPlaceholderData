import React, { useState, useEffect } from 'react'

import GithubUsers from "./Data/dataUsers";

const UseEffectAPI = () => {

    const [users, setUsers] = useState([]);
   

    const getUsers = async () => {
       
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      
            setUsers(await response.json());
       
    }

    useEffect(() => {
        getUsers();
    }, []);

    

    return (
        <>
            <GithubUsers users={users}/>
        </>
    )
}

export default UseEffectAPI
