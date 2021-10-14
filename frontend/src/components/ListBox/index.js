import React from 'react'
import { Link } from 'react-router-dom'

function ListBox({ exercise, index }) {

    return (
        <div className="container" style={{ height: "50px" }}>
            <div className="card d-inline-flex p-2" style={{ height: "18rem", width: "18rem", backgroundColor: "rgba(117, 190, 218, 0.5)" }}>
                <div className="card-body">
                    <h5 className="card-title">Exercice {index + 1}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{exercise.title}</h6>
                    <p className="card-text">{exercise.enonce}</p>
                    <Link to={`/editor/exercise/${index}`}>
                        <button className="btn btn-primary">Go to editor</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ListBox
