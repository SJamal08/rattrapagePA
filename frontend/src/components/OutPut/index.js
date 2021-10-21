import React from 'react'


const Comp = ({msg , color}) => {
    return <div style={{
        color 
    }} className="msg-resolved">
                {msg}
            </div>
}
const GetCorrectComponent = ({tag , texte}) => {
    console.log("Le tag est  " , tag)

    if (tag.startsWith("<DESCRIBE::"))
         return <Comp color={"white"} msg={texte} />

    if (tag.startsWith("<FAILED::"))
        return <Comp color={"red"} msg={texte} />

    if (tag.startsWith("<ERROR::"))   
    return <Comp color={"red"} msg={texte} />

    if (tag.startsWith("<IT::"))   
    return <Comp color={"white"} msg={texte} />

    if (tag.startsWith("<PASSED::"))   
    return <Comp color={"green"} msg={texte} />

    if (tag.startsWith("<COMPLETEDIN::"))   
    return <div><Comp color={"blue"} msg={texte+"sec"} /></div>
    

    return <Comp color={"white"} msg={texte} />

}


function OutPut({output}) {
    if(!Array.isArray(output)) return <div style={{color:"white"}}>{output}</div>
    return  output.map((element , index) => <GetCorrectComponent key={index} tag={element.split(">")[0]} texte={element.split(">")[1]} />)
 }

export default OutPut
