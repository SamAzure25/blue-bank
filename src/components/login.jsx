import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: "",
        password: ""
    });

    const handleLogin = (e) => {
        e.preventDefault();
        const loggeduser = JSON.parse(localStorage.getItem("user"));
        if (loggeduser && input.email === loggeduser.email && input.password === loggeduser.password) {
            localStorage.setItem("loggedin", true);
            navigate("/home");
        } else {
            alert("Invalid Email or Password");
        }
    };

    return (
        <div className="login-wrapper">
            {/* Glow Effects */}
            <div className="top">
                <span className="glow"></span>
                <span className="glow-secondary"></span>
            </div>

            {/* BIG CENTERED CARD */}
            <div className="login-main">
                <button
                    className="glass-back-btn"
                    onClick={() => navigate("/dashboard")}
                    aria-label="Back to Dashboard"
                >
                    ←
                </button>


                <h2 className="login-title">Welcome Back</h2>

                <form className="login-form" onSubmit={handleLogin}>
                    <div className="form-group">
                        <h3 className="form-heading">Email</h3>
                        <input
                            className="form-input"
                            type="email"
                            name="email"
                            value={input.email}
                            onChange={(e) =>
                                setInput({ ...input, [e.target.name]: e.target.value })
                            }
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <h3 className="form-heading">Password</h3>
                        <input
                            className="form-input"
                            type="password"
                            name="password"
                            value={input.password}
                            onChange={(e) =>
                                setInput({ ...input, [e.target.name]: e.target.value })
                            }
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <button className="login-btn" type="submit">
                        Login
                    </button>
                    <p className="page-link">
                        Don't have an account?{' '}
                        <span onClick={() => navigate('/register')} className="link">
                            Register here
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
