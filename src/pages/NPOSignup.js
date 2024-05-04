import React, { useState } from "react";
import { auth, firestore } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const NPOSignup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
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
                    name: name,
                    phone: phone,
                    userType: "npo",
                    imageURL: "https://media.discordapp.net/attachments/1224458193946546367/1235770546537627711/npopfp.png?ex=66359481&is=66344301&hm=ac8ca76c0c0e5eb8603916f7ee30c4fb32b94abc421b3800bb4ef753febc8028&=&format=webp&quality=lossless&width=350&height=350"
                });

                // // Add items to a subcollection in the newly created document
                // const itemsCollection = firestore.collection("npousers").doc(user.uid).collection("items");

                // await itemsCollection.add({
                //     url: "Sample Item",
                //     itemDescription: "This is a sample item",
                //     itemQuantity: 10,
                // });

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
                    <div className="flex form-floating mb-3"style={{display:"grid", gap:"10px", alignItems:"left"}}>
                        <label htmlFor="signupName"style={{gridColumn:"1"}}>NPO Name: </label>
                        <input
                            style={{gridColumn:"2"}}
                            id="signupName"
                            type="text"
                            className="form-control"
                            placeholder="NPO Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        
                    </div>
                    <div className="flex form-floating mb-3"style={{display:"grid", gap:"10px", alignItems:"left"}}>
                        <label htmlFor="signupPhone" style={{gridColumn:"1"}}>Phone: </label>
                        <input
                            style={{gridColumn:"2"}}
                            id="signupPhone"
                            type="text"
                            className="form-control"
                            placeholder="9999999999"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        
                    </div>
                    <div className="flex form-floating mb-3"style={{display:"grid", gap:"10px", alignItems:"left"}}>
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
                    <div className="flex form-floating mb-3"style={{display:"grid", gap:"10px", alignItems:"left"}}>
                        <label htmlFor="signupPassword"style={{gridColumn:"1"}}>Password:</label>
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
                    <div className="flex form-floating mb-3"style={{display:"grid", gap:"10px", alignItems:"left"}}>
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
                    <div className="button" style={{display: "flex", position: "relative", justifyContent:"center", width: "100%"}} onClick={(e) => signupWithUsernameAndPassword(e)}>
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

export default NPOSignup;