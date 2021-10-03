import React from 'react'

import './index.css'

function Login() {
    return (
        <div className="login">
            <div className="login__container">
                <h2>Login page</h2>

                <form action="">
                    <h5>E-mail</h5>
                    <input
                        // value={email}
                        type="email"
                    // onChange={(e) => setEmail(e.target.value)}
                    />
                    <h5>Mot de passe</h5>
                    <input
                        // value={password}
                        type="password"
                    // onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="login__loginButton">Se connecter</button>
                </form>

                <button className="login__loginButton">S'inscrire</button>
            </div>
        </div>
    )
}

export default Login
