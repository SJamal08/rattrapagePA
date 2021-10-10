import React, { useEffect, useState } from 'react'
import ListBox from '../../components/ListBox';

function Profile() {

    const [token, setToken] = useState(localStorage.getItem("token"))

    const [user, setUser] = useState("")

    useEffect(() => {

        fetch("http://localhost:8000/api/auth/findOne",
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }
        )
            .then((response) => response.json())
            .then((response) => {
                setUser(response);
                console.log(user);
            });
    }, []);


    return (
        < div >
            <h2>Profile page token: {token}</h2>

            <div className="list">
                {user.exercises && user.exercises.map((exercise, index) => (
                    <ListBox exercise={exercise} index={index} />
                ))}
            </div>
            {/* <TextBlockPres /> */}
        </div >
    )
}

export default Profile
