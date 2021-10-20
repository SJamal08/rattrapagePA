import React from 'react'


const Comp = ({msg , color}) => {
    return <div style={{
        color 
    }} className="msg-resolved">
                {msg}
            </div>
}
const GetCorrectComponent = ({texte}) => {
    console.log("Le texte est  " , texte)

    if (texte.startsWith("<DESCRIBE::"))
         return <Comp color={"green"} msg={"Your Ticker is Resolved Successfully"} />

    if (texte.startsWith("<FAILED::"))
        return <Comp color={"red"} msg={"Your Ticker is pending"} />

    if (texte.startsWith("<ERROR::"))   
    return <Comp color={"yellow"} msg={"Your Ticker is Closed Successfully"} />

    return <Comp color={"white"} msg={"The Ticket Status is unknown. Check back later."} />

}


function OutPut({output}) {
    if(!Array.isArray(output)) return <div style={{color:"white"}}>{output}</div>
    return  output.map((element , index) => <GetCorrectComponent key={index} texte={element.split(">")[0]} />)
 }

export default OutPut
