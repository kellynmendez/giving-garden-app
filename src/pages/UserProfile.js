import React from "react"; 
import { auth, firestore } from "../firebase";
import {onAuthStateChanged } from "firebase/auth";
import {useState, useEffect} from "react";
import {doc, getDoc, updateDoc} from 'firebase/firestore';

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
  
  const [userRewards, setUserRewards] = useState(null);
  const [userEmail, setUserEmail] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userImgURL, setUserImg] = useState("");
  const [editMode, setEdit] = useState(false);
  const [loading, setLoading] = useState(true);
  const [notice, setNotice] = useState("");

  const db = firestore;
  var user = auth.currentUser;
  var userDoc = null;

  const saveProfile = async (e) => {
    e.preventDefault();
    if (loading==false){
      try{
        
        console.log("Save button clicked");

        //Update, make sure it's not timed out and all
        var user = auth.currentUser;
        var userDoc = doc(db,"users",user.uid);

        try {
            
            // Create a Firestore document for the donor
            await updateDoc(userDoc, {
                email: user.email,
                firstName: userFirstName,
                lastName: userLastName,
                imageURL: userImgURL,
                
            });
            console.log("Updated successfully");
            setEdit(false);
        } catch(error) {
            setNotice("Sorry, something went wrong. Please try again. Error information: " + error);
            console.log("Error updating");
        }     
      }catch{
        setNotice("Session expired. Please log in again.");
      }
    }else{
      
      setNotice("Please wait and try again.");

    }
    
    
    
  };

  useEffect(() => {
      
    onAuthStateChanged(auth, async (user) =>{
      console.log("auth state");
        if(user){
          
              
          //Access the database to figure out what kind of user this is
          if (user.uid != null) {
            const qsnap = await getDoc(doc(db,'users', user.uid));
            if (qsnap.exists()){
              console.log(qsnap.data());
              const userData = qsnap.data();
              setUserRewards(userData.rewardPoints);
              setUserEmail(userData.email);
              setUserFirstName(userData.firstName);
              setUserLastName(userData.lastName);
              setUserImg(userData.imageURL);
            }
          }
          setLoading(false);
        }else{
          setLoading(false);
        }
      
      })

    
  }, [user]);

  function EditProfilePanel() {
      console.log("PFP Edit Panel reloaded");
      return <>
        <form className="mt-3 py-5 px-10" style={{display: "flex", flexDirection: "column", backgroundColor:"#ececec", justifyContent:"center"}} >
            {"" !== notice && (
                <div className="alert alert-warning py-2 center text-red-500" role="alert">
                    {notice}
                </div>
            )}
            <div className="flex form-floating mb-2" style={{position:"relative", justifyContent:"center"}} >
                <input
                    id="updateFirstName"
                    type="text"
                    className="flex form-control py-2 px-2 rounded-xl drop-shadow-md w-80"
                    placeholder="First Name"
                    value={userFirstName}
                    onChange={async (e) => setUserFirstName(e.target.value)}
                />
               
            </div>
            <div className="flex form-floating mb-2" style={{position:"relative", justifyContent:"center"}} >
                <input
                    id="updateLastName"
                    type="text"
                    className="flex form-control py-2 px-2 rounded-xl drop-shadow-md w-80"
                    placeholder="Last Name"
                    value={userLastName}
                    onChange={(e) => setUserLastName(e.target.value)}
                />
                
            </div>
            <div className="flex form-floating mb-2" style={{position:"relative", justifyContent:"center"}} >
                <input
                    id="updateEmail"
                    type="email"
                    className="flex form-control py-2 px-2 rounded-xl drop-shadow-md w-80"
                    aria-describedby="emailHelp"
                    placeholder="name@example.com"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                />
                
            </div>
            <div className="flex form-floating mb-2" style={{position:"relative", justifyContent:"center"}} >
                <input
                    id="updateImage"
                    type="url"
                    className="flex form-control py-2 px-2 rounded-xl drop-shadow-md w-80"
                    aria-describedby="image URL"
                    placeholder="https://imagelocation.com"
                    value={userImgURL}
                    onChange={(e) => setUserImg(e.target.value)}
                />
                
            </div>
            <div className="button" style={{display: "flex", position: "relative", justifyContent:"center", width: "100%"}}onClick={(e) => saveProfile(e)}>
                <button
                    type="saveProfile"
                    className="btn btn-primary"
                    
                >
                    Save
                </button>
            </div>
        </form>
      </>;
  }



  function ProfilePanel() {
    console.log("PFP Panel reload");
    return <>
      <p className="font-serif font-heading text-2xl font-bold text-[#5B5040] py-2 px-20"> {userFirstName} {userLastName} </p>
      <p className="font-serif font-heading text-2xl font-bold text-[#5B5040] py-2 px-20"> {userEmail}</p>
      <div className="d-grid" onClick={(e) => setEdit(true)}>
          <button
              type="editProfile"
              className="btn underline btn-primary pt-3 pb-3"
              
          >
              Edit
          </button>
      </div>
    </>;

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

  
    return (
        <div >
        <meta charSet="utf-8"/>
       
        <div class="h-500 drop-shadow-md flex items-center justify-center" style={{flexDirection:"column"}}>
            <img src={profile.background} alt="A beautiful garden" className="h-[400px] w-[1950px] bg-white-500 duration-300" style={{position: "relative", top:"-50px"}}/>
            <img src={userImgURL} alt="Your Profile Picture" className="container max-w-[250px] mx-auto bg-white-500 duration-300"style={{top: "170px", position: "absolute", borderRadius:"50%"}}/>
        </div>
       <div class="flex py-10 space-x-5 items-center justify-center"style={{flexDirection:"column"}}>
        {editMode ?
          EditProfilePanel()
        :
          ProfilePanel()
        }
        </div>
        <p className="flex font-serif font-heading text-5xl font-bold text-[#426B1F] py-5 px-20" style={{justifyContent:"center"}}> My Garden</p>
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
export default UserProfile;
