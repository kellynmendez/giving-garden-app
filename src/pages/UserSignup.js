import React, { useState } from "react";
import { auth, firestore } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [notice, setNotice] = useState("");

    const signupWithUsernameAndPassword = async (e) => {
        e.preventDefault();

        if (password === confirmPassword) {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                
                // Create a Firestore document for the donor
                await firestore.collection("users").doc(user.uid).set({
                    email: user.email,
                    firstName: firstName,
                    lastName: lastName,
                    rewardPoints: 0,
                    userType: "donor"
                });

                navigate("/");
            } catch {
                setNotice("Sorry, something went wrong. Please try again.");
            }     
        } else {
            setNotice("Passwords don't match. Please try again.");
        }
    };

    return (
        <div className="login-container">
            <div className="row justify-content-center">
                <form className="col-md-4 mt-3 pt-3 pb-3">
                    {"" !== notice && (
                        <div className="alert alert-warning" role="alert">
                            {notice}
                        </div>
                    )}
                    <div className="form-floating mb-3">
                        <input
                            id="signupFirstName"
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <label htmlFor="signupFirstName">First Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            id="signupLastName"
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <label htmlFor="signupLastName">Last Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            id="signupEmail"
                            type="email"
                            className="form-control"
                            aria-describedby="emailHelp"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="signupEmail">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            id="signupPassword"
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="signupPassword">Password</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            id="confirmPassword"
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <label htmlFor="confirmPassword">Confirm Password</label>
                    </div>
                    <div className="d-grid">
                        <button
                            type="submit"
                            className="btn btn-primary pt-3 pb-3"
                            onClick={(e) => signupWithUsernameAndPassword(e)}
                        >
                            Signup
                        </button>
                    </div>
                    <div className="mt-3 text-center">
                        <span>
                            Go back to login? <Link to="/">Click here.</Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;