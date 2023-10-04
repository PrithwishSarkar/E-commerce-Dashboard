import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

const SignUp = ()=>{

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        const auth= localStorage.getItem("user");
        if(auth) navigate("/");
    },[]);

    const submitData = async ()=>{
        const result = await fetch("http://localhost:5000/register", 
        {
            method: "POST",
            body: JSON.stringify({name, mail, pass}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        let newresult = await result.json();
        localStorage.setItem("user", JSON.stringify(newresult));
        if(newresult){
            navigate("/");
        }
    };

    return(
        <div style={{marginLeft: "30%"}}>
            <h1>Register</h1>

            <input className="inputbox" onChange={(e)=>setName(e.target.value)}
            value={name} type="text" placeholder="Enter Name"/>

            <input className="inputbox" onChange={(e)=>setMail(e.target.value)}
            value={mail} type="text" placeholder="Enter Email"/>

            <input className="inputbox" onChange={(e)=>setPass(e.target.value)}
            value={pass} type="password" placeholder="Enter Password"/>

            <button type="button" onClick={submitData} className="btn">Sign Up</button>
        </div>
    );
}

export default SignUp;