import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ()=>{
    
    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();
    useEffect(()=>{
            const auth= localStorage.getItem("user");
            if(auth) navigate("/");
        },[]);
    const loginUser = async ()=>{
        let result = await fetch("http://localhost:5000/login",{
            method: "POST",
            body: JSON.stringify({mail, pass}),
            headers: {
                "Content-Type": "application/json"
            }
        });
        //result is returned in readstream format. not json. json() returns a promise so we await it
        result = await result.json();
        if(result.name){
            localStorage.setItem("user", JSON.stringify(result));
            navigate("/");
        }else{
            alert("Wrong credentials!");
        }
    }

    return(
        <div className="login">
            <h1>Login</h1>
            <input type="text" className="inputbox" onChange={(e)=>setMail(e.target.value)}
            value={mail} placeholder="Enter email"/>

            <input type="password" className="inputbox" onChange={(e)=>setPass(e.target.value)}
            value={pass} placeholder="Enter password"/>

            <button type="button" onClick={loginUser} className="btn">Login</button>
        </div>
    );
}

export default Login;