import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';


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
                setUsername(response.username);
            });
    }, [])

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark justify-content-between">
                <span className="navbar-brand mb-0 h1">Navbar</span>

                {username !== "" ?
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
