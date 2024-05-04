import React from "react";
import { auth, firestore } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import {useState, useEffect} from "react";
import { Link, useNavigate } from 'react-router-dom';
import {doc, getDoc} from 'firebase/firestore';

function Navbar() { 
  const [userType, setUserType] = useState(null);
  const [userImgURL, setUserImg] = useState(null);
  const [loading, setLoading] = useState(true);
  

  const width = WidthDetection();
 
  const navigate = useNavigate();
  const db = firestore;

  var userId = null;

  //When the page is loaded, do this
  useEffect(() => {
      
    onAuthStateChanged(auth, async (user) =>{
        if(user){
          userId = user.uid;
          
              
          //Access the database to figure out what kind of user this is
          if (userId != null) {
            const qsnap = await getDoc(doc(db,'users', userId));
            if (qsnap.exists()){
              console.log(qsnap.data());
              const userData = qsnap.data();
              setUserType(userData.userType);
              setUserImg(userData.imageURL);
              console.log("Navbar: State changed: userType now " + userData.userType);
              
            }
          }else{
            console.log("Navbar: Not logged in");
          }
          
          setLoading(false);
        }else{
          console.log("No user");
          setLoading(false);
        }
      
      })

    
  }, [userId]);
 

 


  {/*This is what happens when they click the logout button */}
  const logout = async (e) => {
    e.preventDefault();

    try {
        await signOut(auth);
        userId = null;
        setUserType(null);
        navigate("/");
    } catch {
       
    }
}


//Now here is where things begin. Now that we have verification running, display a blankness while it loads (only a few ms), then it will shift on its own after we have the user confirmed.
  if (loading == true){
    return(
      <span> Giving Garden </span>
    );

  }else{

    //Display Navbar
    return (
      <header className="header">
        <nav> 
        <ul className=" flex font-serif font-bold gap-3 " style={{flexDirection:"row", justifyContent:"space-between", fontSize:"18px"}}> 
        
          <li>
            <h1 className="flex font-bold text-3xl px-8 py-2" >

            {/* Shrinks when the viewport width is too small to fit everything. */}
            {width > 725 ? 
            <Link to="/">
            <img src= {require("../img/logothin.png")}  width="170px" alt="Giving Garden"style={{ top: "0px", justifyContent: "center"}} />
            </Link>
            :
            <Link to="/" className="font-bold text-3xl px-2 " style={{fontSize:"28px", paddingBottom:"22px"}}>
            GivingGarden
            </Link>
            }
            
            
            </h1>
          </li>
            {/* See what the navbar shows depending on whether or not they're logged in. */}
              { userType === null ? (
                  
                  <div className="flex gap-8 px-6 py-2" style={{alignItems: "center",  justifyContent: "flex-end", position: "absolute", right: "50px", top: "30px"}}>
                  <li><Link to="/userlogin">User Login</Link></li>
                  <li><Link to="/npologin">Organization Login</Link></li>
                  </div>
              ) : (
                  userType === 'donor' ? (
                  <div className="flex gap-6 px-6 py-2" style={{alignItems: "center",  justifyContent: "flex-end", position: "absolute", right: "50px", top: "23px"}}>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/basket">Basket</Link></li>
                    <li><Link to="/yourprofile">Profile</Link></li>
                    <li><Link to="/yourprofile"> <img src= {userImgURL} width="45" height ="45"  alt="It's you!" style={{borderRadius:"50%"}}/></Link></li>
                    <li
                        type="logout"
                        onClick={(e) => logout(e)}
                    >
                        <img src={require("../img/logout.png")}  width="25px" alt="Logout"style={{ top: "0px", justifyContent: "center"}} />
                    </li>  
                  </div> 
                  ):(
                    <div className="flex gap-6 px-6 py-2" style={{alignItems: "center",  justifyContent: "flex-end", position: "absolute", right: "50px", top: "23px"}}>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/donationportal">Requests</Link></li>
                    <li><Link to="/yournpo">Profile</Link></li>
                    <li><Link to="/yournpo"> <img src= {userImgURL} width="45" height ="45"  alt="It's you!" style={{borderRadius:"50%"}}/></Link></li>
                    <li
                        type="logout"
                        onClick={(e) => logout(e)}
                    >
                        <img src={require("../img/logout.png")}  width="25px" alt="Logout"style={{ top: "0px", justifyContent: "center"}} />
                    </li>
                    </div>
                  )
                )
                
                
              }
              
              
        </ul> 
        </nav>
        {/* This is the part that manages the decorative vines, and opts for less of them and/or smaller ones, when on smaller/shrunk screens. */}
        <div className="flex gap-10 px-6" style={{alignItems: "center", flexDirection:"row", justifyContent:"space-between", position: "relative", zIndex:"10"}}>
          {width > 800 ? 
            <div className="vines">
            <img src= {require("../img/topvines1.png")}  width="420px" alt=" " style={{left: "250px", top: "0px", position:"absolute", justifyContent: "center"}} />
            <img src= {require("../img/rightvines1.png")}  width="140px" alt=" " style={{right: "0px", top: "-10px", position:"absolute"}} />
            <img src= {require("../img/topvines2.png")}  width="175px" alt=" " style={{right: "450px", top: "0px", position:"absolute"}} />
            </div>
            :
            <div className="vines">
            <img src= {require("../img/topvines3.png")}  width="150px" alt=" " style={{left: "250px", top: "0px", position:"absolute", justifyContent: "center"}} />
            <img src= {require("../img/topvines2.png")}  width="175px" alt=" " style={{right: "150px", top: "0px", position:"absolute"}} />
            </div>
          }
        </div>
      </header>
      

    );
  }
}
export default Navbar;

 {/* This checks the viewport width for use in react statements and conditions. */}
function WidthDetection(){
  const[width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return width;
};

