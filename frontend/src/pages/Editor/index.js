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
            <h2>Editor page exercise {id}</h2>
            <h2>Hello mister  {user.username}</h2>

            <div>

            </div>

            <Editor
                height="70vh"
                width="150vh"
                theme="vs-dark"
                defaultLanguage="python"
                defaultValue={user.exercises && user.exercises[0].defaultCode}
                onChange={handleEditorChange}
            />

            <button
                onClick={runCode}> Run code</button>
        </div>
    )
}

export default EditorPage
