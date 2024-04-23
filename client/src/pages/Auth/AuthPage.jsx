import React, { useState } from "react";
import Login from '../Login';
import Register from '../Register';
import "./AuthPage.css";

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true); // true for login form, false for register form

    return (
        <div className="auth-container">
            {isLogin ? <Login /> : <Register />}
            <button onClick={() => setIsLogin(!isLogin)} className="toggle-form">
                {isLogin ? 'Need an account? Register' : 'Have an account? Login'}
            </button>
        </div>
    );
}
