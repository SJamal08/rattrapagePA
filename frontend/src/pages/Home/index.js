import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import "./styles.css"

function Home() {

    const history= useHistory();

    useEffect(() => {
        if(localStorage.getItem("token"))
            {
                
                history.push("/profile")
            }
        
    })

    return (
        <div className="home">
            <h2>Home page</h2>
        </div>
    )
}

export default Home
