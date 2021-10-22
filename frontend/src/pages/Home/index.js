import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import "./styles.css"
import logo from '../../assets/img/logo.jpg'
import {Link} from "react-router-dom"

function Home() {

    const history= useHistory();

    useEffect(() => {
        if(localStorage.getItem("token"))
            {
                
                history.push("/profile")
            }
        
    },[])

    return (
        <div className="home">
            <div style= {{minHeight:"80vh",display:"flex", flexDirection:"row",width:"100vh"}}>
                <div className="card text-center" style={{width:"100vh" , marginLeft:"-30vh", backgroundColor:"white"}}>
                    <div style={{marginTop:"15vh"}}>
                        <h3>
                            Bienvenue dans mon App de code !
                        </h3> 
                        <div className="card-body">
                            <p className="card-text" style={{color:"black", textDecorationStyle:"solid",}}>Il s'agit d'une application ou vous aurez l'oocasion de vous exercer en python!!! Pour commencer sans attendre vous pouvez cliquer sur le bouton d'inscription</p>
                            <Link to="/signup" className="btn btn-warning" style={{width:"200px", height:"50px"}}><h4>S'inscrire</h4></Link>
                        </div>
                    </div>
            </div>
            <div style={{width:"50vh"}}>
                <img src={logo} className="navbar-brand mb-0 h1" alt="" style={{objectFit:"cover",height:"100vh",width:"100vh"}} />
            </div>
            </div>
            
        </div>
    )
}

export default Home
