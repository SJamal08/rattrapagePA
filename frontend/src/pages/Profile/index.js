import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import ListBox from '../../components/ListBox';

function Profile() {

    const [user, setUser] = useState("")

    const history= useHistory();

    useEffect(() => {
        if(!localStorage.getItem("token"))
            {  
                history.push("/login")
            }
    });

    useEffect(() => {
        fetch("http://localhost:8000/api/auth/findOne",
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then((response) => response.json())
            .then((response) => {
                setUser(response);
            });
    }, [])


    return (
        <div className="container" style={{backgroundColor: "#231F20"}}>
            <h2 style={{color:'white'}}>Profile page</h2>

            <div className="container" style= {{width: "950px"}}>
                {user.exercises && user.exercises.map((exercise, index) => (
                    <ListBox exercise={exercise} index={index} />
                ))}
            </div> 




        </div >
    )
}

export default Profile
