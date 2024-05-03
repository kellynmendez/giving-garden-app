import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const UserLogin = () => {
    
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [notice, setNotice] = useState("");
    const [loading, setLoading] = useState(true);
    

    const loginWithUsernameAndPassword = async (e) => {
        
        e.preventDefault();
        console.log("Login button clicked");

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/home");
        } catch {
            setNotice("You entered a wrong username or password.");
        }
    }

    useEffect( () => {
        setLoading(false);

    },[loading]);

    if (loading == true){
        
        return(
          <p>  </p>
        );
      }else{
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
                            <div className="alert alert-warning" role="alert">
                                {notice}
                            </div>
                        )}
                        <div className="flex form-floating mb-3"style={{position:"relative", justifyContent:"center"}}>
                            <input
                                type="email"
                                className="flex form-control py-3 px-3 rounded-xl drop-shadow-md"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="name@example.com"
                                value={email}
                                onChange={ (e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="flex form-floating mb-3"style={{position:"relative", justifyContent:"center"}}>
                            <input
                                type="password"
                                className="flex form-control py-3 px-3 rounded-xl drop-shadow-md"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                value={password}
                                onChange={ (e) => setPassword(e.target.value)}
                            />
                        </div>
                        {!loading ?
                        
                        <div className="button" style={{display: "flex", position: "relative", justifyContent:"center", width: "100%"}} onClick={async (e) => loginWithUsernameAndPassword(e)}>
                            <button
                                type="submit"
                                className="btn btn-primary pt-3 pb-3"
                            >
                                Submit
                            </button>
                        </div>
                        :
                        <div className="button" style={{display: "flex", position: "relative", justifyContent:"center", width: "100%"}}>
                            Loading...
                        </div>
                        }
                        <div className="mt-3 underline text-center" style={{color:"#87A36F"}}>
                            <span><Link to="/usersignup"> Sign up for an account today</Link></span>
                        </div>
                        
                    </form>
                </div>
            </div>
            </div>
        
        );
    }
}


export default UserLogin;
