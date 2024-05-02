import React from "react"; 
import { auth, firestore } from "../firebase";
import {onAuthStateChanged } from "firebase/auth";
import {useState, useEffect} from "react";
import {doc, getDoc} from 'firebase/firestore';

import data from "../data/profile.json"
import plant01 from "./imgs/RewardPlant01.PNG";
import plant02 from "./imgs/RewardPlant02.PNG";
import plant03 from "./imgs/RewardPlant03.PNG";
import plant04 from "./imgs/RewardPlant04.PNG";
import plant05 from "./imgs/RewardPlant05.PNG";
import plant06 from "./imgs/RewardPlant06.PNG";
import plant07 from "./imgs/RewardPlant07.PNG";
import plant08 from "./imgs/RewardPlant08.PNG";
import unknownPlant from "./imgs/UnknownPlant.png";


const UserProfile = () => {
  const profile = data[0]
  const [editMode, setEdit] = useState(false);
  const [userRewards, setUserRewards] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userFirstName, setUserFirstName] = useState(null);
  const [userLastName, setUserLastName] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notice, setNotice] = useState("");

  const db = firestore;
  var userId = null;

  const saveProfile = async (e) => {
    e.preventDefault();


    try {
    
        const user = auth.currentUser;
        
        // Create a Firestore document for the donor
        await firestore.collection("users").doc(user.uid).updateUser({
            email: user.email,
            firstName: userFirstName,
            lastName: userLastName,
            rewardPoints: 0,
            
        });
    } catch {
        setNotice("Sorry, something went wrong. Please try again.");
    }     
    
    setEdit(false);
};

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
              setUserRewards(userData.rewardPoints);
              setUserEmail(userData.email);
              setUserFirstName(userData.firstName);
              setUserLastName(userData.lastName);
            }
          }
          setLoading(false);
        }else{
          setLoading(false);
        }
      
      })

    
  }, [userId]);


  function ProfilePanel() {
    if (editMode) {
      return <>
        <form className="col-md-4 mt-3 pt-3 pb-3">
            {"" !== notice && (
                <div className="alert alert-warning" role="alert">
                    {notice}
                </div>
            )}
            <div className="form-floating mb-3">
                <input
                    id="updateFirstName"
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    value={userFirstName}
                    onChange={(e) => setUserFirstName(e.target.value)}
                />
                <label htmlFor="signupFirstName">First Name</label>
            </div>
            <div className="form-floating mb-3">
                <input
                    id="updateLastName"
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    value={userLastName}
                    onChange={(e) => setUserLastName(e.target.value)}
                />
                <label htmlFor="signupLastName">Last Name</label>
            </div>
            <div className="form-floating mb-3">
                <input
                    id="updateEmail"
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="name@example.com"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                />
                <label htmlFor="signupEmail">Email</label>
            </div>
            <div className="d-grid">
                <button
                    type="editProfile"
                    className="btn underline btn-primary pt-3 pb-3"
                    onClick={(e) => saveProfile(e)}
                >
                    Save
                </button>
            </div>
        </form>
      </>;
    }else{
      return <>
        <p className="font-serif font-heading text-2xl font-bold text-[#5B5040] py-2 px-20"> {userFirstName} {userLastName} </p>
        <p className="font-serif font-heading text-2xl font-bold text-[#5B5040] py-2 px-20"> {userEmail}</p>
        <div className="d-grid">
            <button
                type="editProfile"
                className="btn underline btn-primary pt-3 pb-3"
                onClick={(e) => setEdit(true)}
            >
                Edit
            </button>
        </div>
      </>;

    }
  }



  
  function ShowPlants() {
    if (userRewards >= 800) {
      return <>
      <img src={plant01} alt="plant-01"/>
      <img src={plant02} alt="plant-02"/>
      <img src={plant03} alt="plant-03"/>
      <img src={plant04} alt="plant-04"/>
      <img src={plant05} alt="plant-05"/>
      <img src={plant06} alt="plant-06"/>
      <img src={plant07} alt="plant-07"/>
      <img src={plant08} alt="plant-08"/>
      </>;
    }
    else if (userRewards >= 700) {
      return <>
      <img src={plant01} alt="plant-01"/>
      <img src={plant02} alt="plant-02"/>
      <img src={plant03} alt="plant-03"/>
      <img src={plant04} alt="plant-04"/>
      <img src={plant05} alt="plant-05"/>
      <img src={plant06} alt="plant-06"/>
      <img src={plant07} alt="plant-07"/>
      <img src={unknownPlant} alt="unknown-plant"/>
      </>;
    }
    else if (userRewards >= 600) {
      return <>
      <img src={plant01} alt="plant-01"/>
      <img src={plant02} alt="plant-02"/>
      <img src={plant03} alt="plant-03"/>
      <img src={plant04} alt="plant-04"/>
      <img src={plant05} alt="plant-05"/>
      <img src={plant06} alt="plant-06"/>
      <img src={unknownPlant} alt="unknown-plant"/>
      <img src={unknownPlant} alt="unknown-plant"/>
      </>;
    }
    else if (userRewards >= 500) {
      return <>
      <img src={plant01} alt="plant-01"/>
      <img src={plant02} alt="plant-02"/>
      <img src={plant03} alt="plant-03"/>
      <img src={plant04} alt="plant-04"/>
      <img src={plant05} alt="plant-05"/>
      <img src={unknownPlant} alt="unknown-plant"/>
      <img src={unknownPlant} alt="unknown-plant"/>
      <img src={unknownPlant} alt="unknown-plant"/>
      </>;
    }
    else if (userRewards >= 400) {
      return <>
      <img src={plant01} alt="plant-01"/>
      <img src={plant02} alt="plant-02"/>
      <img src={plant03} alt="plant-03"/>
      <img src={plant04} alt="plant-04"/>
      <img src={unknownPlant} alt="unknown-plant"/>
      <img src={unknownPlant} alt="unknown-plant"/>
      <img src={unknownPlant} alt="unknown-plant"/>
      <img src={unknownPlant} alt="unknown-plant"/>
      </>;
    }
    else if (userRewards >= 300) {
      return <>
      <img src={plant01} alt="plant-01"/>
      <img src={plant02} alt="plant-02"/>
      <img src={plant03} alt="plant-03"/>
      <img src={unknownPlant} alt="unknown-plant"/>
      <img src={unknownPlant} alt="unknown-plant"/>
      <img src={unknownPlant} alt="unknown-plant"/>
      <img src={unknownPlant} alt="unknown-plant"/>
      <img src={unknownPlant} alt="unknown-plant"/>
      </>;
    }
    else if (userRewards >= 200) {
      return <>
      <img src={plant01} alt="plant-01"/>
      <img src={plant02} alt="plant-02"/>
      <img src={unknownPlant} alt="unknown-plant"/>
      <img src={unknownPlant} alt="unknown-plant"/>
      <img src={unknownPlant} alt="unknown-plant"/>
      <img src={unknownPlant} alt="unknown-plant"/>
      <img src={unknownPlant} alt="unknown-plant"/>
      <img src={unknownPlant} alt="unknown-plant"/>
      </>;
    }
    else if (userRewards >= 100) {
      return <>
      <img src={plant01} alt="plant-01"/>
      <img src={unknownPlant} alt="unknown-plant"/>
      <img src={unknownPlant} alt="unknown-plant"/>
      <img src={unknownPlant} alt="unknown-plant"/>
      <img src={unknownPlant} alt="unknown-plant"/>
      <img src={unknownPlant} alt="unknown-plant"/>
      <img src={unknownPlant} alt="unknown-plant"/>
      <img src={unknownPlant} alt="unknown-plant"/>
      </>;
    }
    else if (userRewards >= 0) {
      return <>
      <img src={unknownPlant} alt="unknown-plant"/>
      <img src={unknownPlant} alt="unknown-plant"/>
      <img src={unknownPlant} alt="unknown-plant"/>
      <img src={unknownPlant} alt="unknown-plant"/>
      <img src={unknownPlant} alt="unknown-plant"/>
      <img src={unknownPlant} alt="unknown-plant"/>
      <img src={unknownPlant} alt="unknown-plant"/>
      <img src={unknownPlant} alt="unknown-plant"/>
      </>;
    }
    return "";
  }

  if (loading == true){
    return(
      <p>  </p>
    );
  }else{
    return (
        <div >
        <meta charSet="utf-8"/>
       
        <div class="h-500 drop-shadow-md flex items-center justify-center" style={{flexDirection:"column"}}>
            <img src={profile.background} alt="A beautiful garden" className="h-[400px] w-[1950px] bg-white-500 duration-300" style={{position: "relative", top:"-50px"}}/>
            <img src={profile.image} alt="Your Profile Picture" className="container max-w-[250px] mx-auto bg-white-500 duration-300"style={{top: "170px", position: "absolute", borderRadius:"50%"}}/>
        </div>
        <div class="flex py-10 space-x-5 items-center justify-center"style={{flexDirection:"column"}}>
        <ProfilePanel/>
        <p className="font-serif font-heading text-5xl font-bold text-[#426B1F] py-5 px-20"> My Garden</p>
        </div>
         <hr />
         
         <div class="container py-10 px-10 space-x-10 space-y-10 mx-auto justify-center">
          <div class="container w-80 px-2 py-2 flex-col mx-auto text-center items-center bg-[#ECECEC] rounded-xl text-[#5B5040] font-serif leading-loose">
            <p class="text-3xl font-serif leading-loose ">Rewards</p>
            <p class="-py-10 max-w-4xl text-xl font-serif leading-loose">Total Rewards: {userRewards}</p>
          </div>
          <div class="grid grid-cols-4 gap-3 max-w-s h-96 text-center">
              <ShowPlants/>
          </div>
          <div class="container py-32">
          </div>
        </div>
      </div>
    );
  }
}
export default UserProfile;
