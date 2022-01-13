
import React from 'react'
type greetprops={
name: string
number:number
loggedIn:boolean
}

 const  Greet= (props:greetprops)=> {
    return (
        <div>
{/* <h1>  heloo{props.name} amit{props.number}sharma</h1> */} 

{/* this is the name and number */}

            <h1>  {props.loggedIn ? ` welcome   hello ${props.name} typescript ${props.number} ` :"welcome guest"}</h1> 
            {/* this is with boolean value */}
        </div>
    )
}

export default Greet
