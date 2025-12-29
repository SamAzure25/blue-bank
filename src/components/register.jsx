import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    //object for use navingate
    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    });


    //To store value in localStorage
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input));
        navigate("/login");
    };




    return (
        <div className="register-wrapper">
            {/* Glow Effects */}
            <div className="top">
                <span className="glow"></span>
                <span className="glow-secondary"></span>
            </div>



            <div className="register-main">

                <button
                    className="glass-back-btn"
                    onClick={() => navigate("/dashboard")}
                    aria-label="Back to Dashboard"
                >
                    ←
                </button>


                <h2 className="register-title">Create an Account</h2>

                <form className="register-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <h3 className="form-heading">Name</h3>
                        <input
                            className="form-input"
                            type="text"
                            name="name"
                            value={input.name}
                            onChange={(e) =>
                                setInput({ ...input, [e.target.name]: e.target.value })
                            }
                            placeholder="Enter your name"
                            required
                        />
                    </div>

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
                            placeholder="Create a password"
                            required
                        />
                    </div>

                    <button className="register-btn" type="submit">
                        Register
                    </button>
                    <p className="page-link">
                        Already have an account?{' '}
                        <span onClick={() => navigate('/login')} className="link">
                            Login here
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
