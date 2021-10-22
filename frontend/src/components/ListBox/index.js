import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css"

function ListBox({ exercise, index }) {

    return (
        <div className="container" style={{width:"800px", marginBottom:"30px"}}>
            <div className="card " >
                <div className="listbox__body" style={{borderRadius:"100", borderColor:"gray"}}>
                    <h5 className="">Exercice {index + 1}</h5>
                    <h6 className="card-subtitle mb-2">{exercise.title}</h6>
                    <p className="card-text">{exercise.enonce}</p>
            <Link to={`/editor/exercise/${index}`} style={{float:"right"}}>
                    <button className="btn btn-warning" style={{color:"white"}}>Go to editor</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ListBox
