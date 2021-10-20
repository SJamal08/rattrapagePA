import React, { useEffect, useState } from 'react'
import Editor from "@monaco-editor/react";
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import Popup from 'reactjs-popup';
import './index.css'
import OutPut from '../../components/OutPut';

function EditorPage() {

    const { id } = useParams();

    const [user, setUser] = useState({})

    const [currentCode, setCurrentCode] = useState("")

    const history= useHistory();

    const [outPut, setOutPut] = useState("Ici s'affichera le temps d'éxécution de votre code")

    useEffect(() => {
        if(!localStorage.getItem("token"))
            {
                
                history.push("/login")
            }
        
    },[])

    useEffect(() => {
             fetch("http://localhost:8000/api/auth/findOne",
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }
        )
            .then((response) => response.json())
            .then((response) => {
                setUser(response);
                if (user.exercises) {
                    setCurrentCode(user.exercises[id].defaultCode)
                }
            });
    },[id])


    const runCode = () => {

        let newUser = user

        newUser.exercises[id].defaultCode = currentCode

        fetch("http://localhost:8000/api/code/submit",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    'user': newUser,
                    'id': id,
                })
            }).then((res) => res.json())
            .then((res) => {
                console.log("response compilation>>>>", res)
                const output= res.output
                const tableOutput = output.split(/\r\n|\r|\n/)
                console.log("outputTable>>>>", tableOutput)
                setOutPut(tableOutput)
            })

    }

    const handleEditorChange = (value, event) => {
        setCurrentCode(value)
    }
    return (
        <div className="editorBlock">
            <div className="leftBlock">
                <div className="" style={{ alignItems: "flex-start" }}>
                    <div className="" style={{ alignItems: "flex-start" }}>
                        <div className="card" style={{ alignItems: "baseline", height: "15rem", width: "32rem", backgroundColor: "darkgray" }}>
                            {user.exercises &&
                            (<div className="card-body">
                                <h5 className="card-title">Exercice {parseInt(id) + 1}</h5>
                                <h6 className="card-subtitle mb-2">{user.exercises[id].title}</h6>
                                <h6 style={{textAlign:"justify"}}>{user.exercises[id].enonce}</h6>
                            </div>)
                            }
                        </div>
                    </div>
                </div>
                <div> 
                <OutPut  output={outPut}/>
                </div>    
            </div>
            <div className="rightBlock">
                {user.exercises && (
                     <Editor
                        height="70vh"
                        width="200vh"
                        theme="vs-dark"
                        defaultLanguage="python"
                        defaultValue={user.exercises[id].defaultCode}
                        onChange={handleEditorChange}
                    />
                )}
                <button onClick={runCode} style={{ height: "4rem", width: "10rem", alignItems: "center" }}> Run code</button>
            </div>

            {/* <div className="d-inline-flex" style={{ alignItems: "flex-start" }}>
                <div className="d-inline" style={{ alignItems: "flex-start" }}>
                    <div className="card" style={{ alignItems: "baseline", height: "23rem", width: "32rem", backgroundColor: "rgba(117, 190, 218, 0.5)" }}>
                        {user.exercises &&
                        (<div className="card-body">
                        <h5 className="card-title">Exercice {parseInt(id) + 1}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{user.exercises[id].title}</h6>
                    </div>)
                    }
                        
                    </div>
                     {
                        user?.exercises &&
                        (
                            <input type="text" style={{ height: "7.5rem", width: "32rem" }} disabled value={outPut} />
                        )
                    }
                </div>

                <div className="card d-inline-flex p-2" style={{ backgroundColor: "rgba(117, 190, 218, 0.0)" }}>

                {user.exercises && (
                     <Editor
                        height="70vh"
                        width="120vh"
                        theme="vs-dark"
                        defaultLanguage="python"
                        defaultValue={user.exercises[id].defaultCode}
                        onChange={handleEditorChange}
                    />
                )}
                    <button onClick={runCode} style={{ height: "4rem", width: "10rem", alignItems: "center" }}> Run code</button>
                </div>

            </div> */}
        </div>
    )
}

export default EditorPage
