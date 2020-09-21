
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



export default function Login() {

    return (
        <div className="login">
            <Link to="/login">Login </Link>
            <Link to="/signup">Sign Up</Link>
            <h3>Log In Here</h3>
            <p>Username</p>
            <p>Password</p>
        </div>
    )
}