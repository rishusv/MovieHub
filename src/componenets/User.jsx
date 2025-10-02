import React from 'react'
import { useState, useEffect } from 'react';

function User() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
                const data = await response.json();
                setUser(data);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (error) {
        return <h1>Something went wrong...</h1>;
    }

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <h1>User component example</h1>
            <h1>Name : {user.name}</h1>
            <h1>Username : {user.username}</h1>
            <h1>Phone : {user.phone}</h1>
        </div>
    );
}

export default User;

 
