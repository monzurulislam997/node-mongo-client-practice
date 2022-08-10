import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
const UpdateUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState([]);
    const url = `http://localhost:5000/user/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => setUser(data))

    const formSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = { name, email }


        fetch(`http://localhost:5000/user/${id}`, {
            method: "PUT",
            headers: {
                'content-Type': "application/json"
            },
            body: JSON.stringify(user)
        }).then(res => res.json()
            .then(data => {
                alert("user added successFully")
                e.target.reset()
            }))


    }

    return (
        <div className='App'>
            <h1>User Name : {user.name}</h1>

            <form onSubmit={formSubmit} >
                <input type="text" name="name" id="" /> <br />
                <input type="text" name="email" id="" /> <br />
                <input type="submit" value="Update User" /> <br />
            </form>
        </div>
    );
};

export default UpdateUser;