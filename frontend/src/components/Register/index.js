import React, { useState } from 'react'

import './index.css'

function Register() {

    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const register = () => {
        console.log("Register : nom:" + nom + " prenom:" + prenom + " email:" + email + " pa")
    }
    return (
        <div className="register">

            <div className="register__container">
                <h2>Register page</h2>
                <form action="">
                    <h5>Nom</h5>
                    <input
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                    />
                    <h5>Prénom</h5>
                    <input
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                    />
                    <h5>E-mail</h5>
                    <input
                        value={email}
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h5>Mot de passe</h5>
                    <input
                        value={password}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" onClick={register} className="register__registerButton">S'inscrire</button>
                </form>

                <button className="register__registerButton">Se connecter</button>
            </div>
        </div>
    )
}

export default Register
