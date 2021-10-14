import React, { useEffect, useState } from 'react'
import Editor from "@monaco-editor/react";
import { useParams } from 'react-router';

function EditorPage() {

    const { id } = useParams();

    const [user, setUser] = useState("")

    const [currentCode, setCurrentCode] = useState("")


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
            })

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
            }
        )
            .then((response) => response.json())
            .then((response) => {
                setUser(response);
                console.log(user);
                if (user.exercises) {
                    setCurrentCode(user.exercises[id].defaultCode)
                }
            });
    }, [])

    const handleEditorChange = (value, event) => {
        console.log("here is the current model value:", value);
        setCurrentCode(value)
    }
    return (
        <div>
            <div className="d-inline-flex" style={{ alignItems: "flex-start" }}>
                <div className="d-inline" style={{ alignItems: "flex-start" }}>
                    <div className="card" style={{ alignItems: "baseline", height: "23rem", width: "32rem", backgroundColor: "rgba(117, 190, 218, 0.5)" }}>
                        <div className="card-body">
                            <h5 className="card-title">Exercice {id + 1}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{user.exercises[id].title}</h6>
                        </div>
                    </div>
                    <input type="text" style={{ height: "7.5rem", width: "32rem" }} disabled value={user.exercises[id].isSucceed} />
                </div>

                <div className="card d-inline-flex p-2" style={{ backgroundColor: "rgba(117, 190, 218, 0.0)" }}>
                    <Editor
                        height="70vh"
                        width="120vh"
                        theme="vs-dark"
                        defaultLanguage="python"
                        defaultValue={user.exercises && user.exercises[0].defaultCode}
                        onChange={handleEditorChange}
                    />
                    <button onClick={runCode} style={{ height: "4rem", width: "10rem", alignItems: "center" }}> Run code</button>
                </div>

            </div>
        </div>
    )
}

export default EditorPage
