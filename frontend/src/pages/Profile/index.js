import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import jwt_decode from 'jwt-decode'
import ListBox from '../../components/ListBox';

function Profile() {

    const [user] = useState(jwt_decode(localStorage.getItem('token')))

    const history= useHistory();

    useEffect(() => {
        if(!localStorage.getItem("token"))
            {  
                history.push("/login")
            }
    });

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
