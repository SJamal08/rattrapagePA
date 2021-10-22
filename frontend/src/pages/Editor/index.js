import React, { useEffect, useState } from 'react'
import Editor from "@monaco-editor/react";
import jwt_decode from 'jwt-decode';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import './index.css'
import OutPut from '../../components/OutPut';
import Modal from 'react-modal';
import congrats from "../../assets/img/clapping-congrats.gif"
import retry from "../../assets/img/try-again.gif"
function EditorPage() {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor:'#231F20'
        },
      }

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    const { id } = useParams();

    const [isSucceed, setIsSucceed] = useState(false)

    const [user, setUser] = useState(jwt_decode(localStorage.getItem('token')))

    const [currentCode, setCurrentCode] = useState("")

    const history= useHistory();

    const [outPut, setOutPut] = useState("Ici s'affichera les resultats de votre code")

    useEffect(() => {
        if(!localStorage.getItem("token"))
            {
                
                history.push("/login")
            }
        
    },[])

    useEffect(() => {
             fetch(process.env.REACT_APP_BACKEND_URL+"/api/auth/findOne",
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
        fetch(process.env.REACT_APP_BACKEND_URL+"/api/code/submit",
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
                if(res.err) return alert("Vous avez oublié la signature de la fonction")
                const output= res.output
                const tableOutput = output.split(/\r\n|\r|\n/)
                setOutPut(tableOutput)
                setIsSucceed(res.isSucceed)
                openModal();
            })
    }

    const handleEditorChange = (value, event) => {
        setCurrentCode(value)
    }
    return (
        <div className="editorBlock" style={{height: "100%"}}>
            <div className="leftBlock">
                <div className="" style={{ alignItems: "flex-start" }}>
                    <div className="" style={{ alignItems: "flex-start" }}>
                        <div className="card" style={{ alignItems: "baseline", height: "15rem", width: "32rem", backgroundColor: "#696969" }}>
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
                <div style={{overflowY:"scroll", height:" 200px"}}> 
                <OutPut  output={outPut}/>
                </div>    
            </div>
            <div className="rightBlock">
                {user.exercises && (
                     <Editor
                        height="80vh"
                        width="130vh"
                        theme="vs-dark"
                        defaultLanguage="python"
                        defaultValue={user.exercises[id].defaultCode}
                        onChange={handleEditorChange}
                    />
                )}
                <button onClick={()=> {
                    runCode();
                    }} className="btn btn-outline-warning my-2 my-sm-0" style={{ height: "3rem", width: "10rem", alignItems: "center" }}> Run code</button>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    
                    <button onClick={closeModal} type="button" class="close btn btn-outline-warning" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div>{isSucceed ?
                    <div>
                        <h2 style={{color:"green"}}>***** Félicitations *****</h2>
                        <img src={congrats} alt="" style={{width:"200px", height:"200px", display:"flex", alignItems:"center"}}/>
                    </div>:
                    <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
                        <h2 style={{color:"red"}}> ***** OUPS ! Essaye encore *****</h2>
                        <img src={retry} alt="" style={{width:"200px", height:"200px"}}/>
                    </div>}
                    </div>
                    <div style={{overflowY:"scroll", height:" 200px"}}> 
                        <OutPut  output={outPut}/>
                    </div>
                </Modal>         
            </div>
        </div>
    )
}

export default EditorPage
