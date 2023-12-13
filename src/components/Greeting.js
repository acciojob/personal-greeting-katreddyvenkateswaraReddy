import React,{useState} from "react";

const Greeting = () =>{
const [text,setNewText] = useState("");



    return(
        <div>
        <form>
            <label for="text">Enter your name:</label>
            <input type="text" id="text" onChange={e=>setNewText(e.target.value)}/>
        </form>
        {text?<p>Hello {text}!</p>:""}
        </div>
    )
}

export default Greeting;