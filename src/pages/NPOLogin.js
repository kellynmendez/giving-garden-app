import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const NPOLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [notice, setNotice] = useState("");

    const loginWithUsernameAndPassword = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/profile");
        } catch {
            setNotice("You entered a wrong username or password.");
        }
    }

    return (
        <div className="main-container">
        {/* <div className="deco-container"> </div> */}
        
        <div className="login-container"> {/* Apply the styles from Login.css */}
            
            <div className="row justify-content-center">
                
                <form className="mt-3 py-5 px-10" style={{display: "flex", flexDirection: "column", backgroundColor:"#ececec", justifyContent:"center"}} >
                    <h1 className="flex font-bold text-3xl px-8 py-4"style={{ color:"#5b5040"}} >
                        Welcome to GivingGarden!
                    </h1>
                    {notice !== "" && (
                        <div className="flex alert alert-warning py-3 " role="alert" style={{position:"relative", justifyContent:"center", color:"red"}}>
                            {notice}
                        </div>
                    )}
                    <div className="flex form-floating mb-3" style={{position:"relative", justifyContent:"center"}} >
                        <input
                            type="email"
                            className="flex form-control py-3 px-3 rounded-xl drop-shadow-md"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {/*<label htmlFor="exampleInputEmail1" className="form-label">Email address</label>*/}
                    </div>
                    <div className="flex form-floating mb-3" style={{position:"relative", justifyContent:"center"}} >
                        <input
                            type="password"
                            className="flex form-control py-3 px-3 rounded-xl drop-shadow-md"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {/*<label htmlFor="exampleInputPassword1" className="form-label">Password</label>*/}
                    </div>
                    <div className="mt-3 underline text-center" style={{color:"#87A36F"}}>
                        <span><Link to="/nposignup"> Sign up for an account today</Link></span>
                    </div>
                    <div className="button" style={{display: "flex", position: "relative", justifyContent:"center", width: "100%"}}>
                        <button
                            type="submit"
                            className="btn flex py-1"
                            onClick={(e) => loginWithUsernameAndPassword(e)}
                        >
                            Log In
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
        </div>
    );
}

export default NPOLogin;
