import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const AddUser = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate()
    const formSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = { name, email }

        fetch('http://localhost:5000/user', {
            method: "POST",
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

    useEffect(() => {
        fetch("http://localhost:5000/user")
            .then(res => res.json())
            .then(data => setUsers(data))

    }, [users]);
    const handleUserDelete = (id) => {
        const confirmation = window.confirm("Do You want to delete?")
        if (confirmation) {

            const url = `http://localhost:5000/user/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingUser = users.filter(user => user._id !== id);
                        setUsers(remainingUser)

                    }

                })


        }
    }

    const navigateOther = (id) => {
        navigate(`/updateuser/${id}`)
    }
    return (
        <div className='App'>
            <h2>Please ,Addd user`</h2>
            <form onSubmit={formSubmit} >
                <input type="text" name="name" id="" /> <br />
                <input type="text" name="email" id="" /> <br />
                <input type="submit" value="Submit" /> <br />
            </form>
            <p>{users.length}</p>
            {
                users.map(user => <li>{user.name} <button onClick={() => { navigateOther(user._id) }} >Update user</button> <button onClick={() => { handleUserDelete(user._id) }}>X</button></li>)
            }
        </div>
    );
};

export default AddUser;