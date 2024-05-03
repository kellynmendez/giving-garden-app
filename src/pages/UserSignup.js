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
                    userType: "donor",
                    imageURL: "https://media.discordapp.net/attachments/1224458193946546367/1235755490307346554/plantprofile.png?ex=6635867c&is=663434fc&hm=dc7f81007a386263d2006d20547908e1ad07f4e3b67955a17aa38213450723e3&=&format=webp&quality=lossless"
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
            <form className="mt-3 py-5 px-10" style={{display: "flex", flexDirection: "column", backgroundColor:"#ececec", justifyContent:"center"}} >
                    <h1 className="flex font-bold text-3xl px-8 py-4"style={{ color:"#5b5040"}} >
                        Welcome to GivingGarden!
                    </h1>
                    {"" !== notice && (
                        <div className="alert alert-warning" role="alert">
                            {notice}
                        </div>
                    )}
                    <div className="form-floating mb-3"style={{display:"grid", gap:"10px", alignItems:"left"}}>
                        <label htmlFor="signupFirstName"style={{gridColumn:"1"}}>First Name: </label>
                        <input
                            style={{gridColumn:"2"}}
                            id="signupFirstName"
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        
                    </div>
                    <div className="form-floating mb-3"style={{display:"grid", gap:"10px", alignItems:"left"}}>
                        <label htmlFor="signupLastName"style={{gridColumn:"1"}}>Last Name: </label>
                        <input
                            style={{gridColumn:"2"}}
                            id="signupLastName"
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        
                    </div>
                    <div className="form-floating mb-3"style={{display:"grid", gap:"10px", alignItems:"left"}}>
                        <label htmlFor="signupEmail"style={{gridColumn:"1"}}>Email: </label>
                        <input
                            style={{gridColumn:"2"}}
                            id="signupEmail"
                            type="email"
                            className="form-control"
                            aria-describedby="emailHelp"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        
                    </div>
                    <div className="form-floating mb-3"style={{display:"grid", gap:"10px", alignItems:"left"}}>
                        <label htmlFor="signupPassword"style={{gridColumn:"1"}}>Password: </label>
                        <input
                            style={{gridColumn:"2"}}
                            id="signupPassword"
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        
                    </div>
                    <div className="form-floating mb-3"style={{display:"grid", gap:"10px", alignItems:"left"}}>
                        <label htmlFor="confirmPassword"style={{gridColumn:"1"}}>Confirm Password: </label>
                        <input
                            style={{gridColumn:"2"}}
                            id="confirmPassword"
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        
                    </div>
                    <div className="button" style={{display: "flex", position: "relative", justifyContent:"center", width: "100%"}}onClick={(e) => signupWithUsernameAndPassword(e)}>
                        <button
                            type="submit"
                            className="btn btn-primary pt-3 pb-3"
                            
                        >
                            Signup
                        </button>
                    </div>
                    <div className="mt-3 text-center">
                        <span>
                          <Link to="/" style={{textDecoration:"underline"}}>Click here to go back.</Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;