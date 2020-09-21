import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Forms() {
    return (
    <div className="signup">
        <Link to="/login">Login </Link>
        <Link to="/signup">Sign Up</Link>
        <h3>Sign Up Here</h3>
        <p>Username</p>
        <p>Password</p>
    </div>
    )
}