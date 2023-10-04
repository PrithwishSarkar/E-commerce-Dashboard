import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
    const auth = localStorage.getItem("user");
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate("/signup");
    }
    return (
        <div>
            {auth ?
                <ul className="nav-ul">
                    <img src="https://cdn-icons-png.flaticon.com/512/4833/4833311.png" alt="icon" className="logo"/>
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/add">Add Product</Link></li>
                    <li><Link to="/update">Update Product</Link></li>

                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link onClick={logout} to="/signup">Logout {JSON.parse(auth).name}</Link></li>
                   
                </ul>
                
                : <ul className="nav-ul nav-right">
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
}
        </div>
    );
}
//<> </> is called fragmentation
export default Nav;