import { useState } from "react";
export default function Formnew(){

    let[fullName, setFullName]=useState("");
    let[userName, setUserName]=useState("");

    let handleChangeName=(event)=>{
        setFullName(event.target.value)
     }

     let handleUserName=(event)=>{
        setUserName(event.target.value)
     }
    return(
        <form>
        <label htmlFor="fullName">Full Name:</label>
            <input placeholder="enter full name" type="text" value={fullName} onChange={handleChangeName} id="FullName"/>
            <br></br>
            <br></br>


            <label htmlFor="userName">User Name:</label>
            <input placeholder="enter username" type="text" value={userName} onchange={handleUserName} id="userName"/>

            <button>submit</button>
        </form>
       
    )
}