import React from 'react'

function OutPut({output}) {
        if(Array.isArray(output)){
            output.map((element) => {
                const tableElement = element.split(">")
                console.log("case is " , tableElement[0])
                switch (tableElement[0]) {
                    case "<DESCRIBE::":
                         return( 
                        <div className="msg-resolved">
                            Your Ticker is Resolved Successfully
                        </div>
                    )
                    case "<FAILED::": return (
                        <div className="msg-resolved">
                            Your Ticker is pending
                        </div>
                    )
                    case "<ERROR::": return (
                        <div className="msg-closed">
                            Your Ticker is Closed Successfully
                        </div>
                    )
                    default: return(
                        <div className="msg-empty">
                            The Ticket Status is unknown. Check back later.
                        </div>
                    )
                }
            }
        )} else {
            return <div style={{color:"white"}}>{output}</div>
        }
 }

export default OutPut
