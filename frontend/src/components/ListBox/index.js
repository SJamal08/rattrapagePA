import React from 'react'
import { Link } from 'react-router-dom'

function ListBox({ exercise, index }) {

    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    Exercice {index}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{exercise.title}</h5>
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
