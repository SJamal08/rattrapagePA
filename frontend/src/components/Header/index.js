import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import jwt_decode from "jwt-decode"


function Header() {

    const [username, setUsername] = useState("")
    const history = useHistory()

    const disconnect = () => {

        setUsername("");
        localStorage.removeItem("token");

        history.push('/home')

    }

    const goToLogin = () => {
        history.push("/login")

    }

    useEffect(() => {
        if(localStorage.getItem('token')){

            const decodedToken = jwt_decode(localStorage.getItem('token'))
            console.log("voici le decoded token >>>>", decodedToken)
    
            setUsername(decodedToken.username)
        }

    }, [username])

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark justify-content-between">
                <span className="navbar-brand mb-0 h1">Navbar</span>

                {username != "" ?
                    <div>
                        <span className="navbar-brand mb-0 h1">Bonjour {username}</span>
                        <button className="btn btn-outline-warning my-2 my-sm-0"
                            onClick={disconnect}>Se Déconnecter</button>
                    </div> :

                    <div>
                        <span className="navbar-brand mb-0 h1">Bonjour Utilisateur</span>

                        <button className="btn btn-outline-warning my-2 my-sm-0"
                            onClick={goToLogin}>Se Connecter</button>
                    </div>
                }

            </nav>
        </div>
    )
}

export default Header
