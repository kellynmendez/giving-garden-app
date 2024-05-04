import React from "react"; 
import { auth, firestore } from "../firebase";
import {onAuthStateChanged } from "firebase/auth";
import {useState, useEffect} from "react";
import {doc, getDoc, updateDoc} from 'firebase/firestore';
import { useNavigate } from "react-router-dom";

import data from "../data/profile.json"


const NPOUserProfile = () => {
  const profile = data[0]
  const navigate = useNavigate();
  
  const [npoEmail, setNPOEmail] = useState("");
  const [npoName, setNPOName] = useState("");
  const [npoPhone, setNPOPhone] = useState("");
  const [npoImgURL, setNPOImg] = useState("");
  const [editMode, setEdit] = useState(false);
  const [notice, setNotice] = useState("");

  const db = firestore;
  var user = auth.currentUser;
  var userDoc = null;

  const saveProfile = async (e) => {
    e.preventDefault();
    try{
      
      console.log("Save button clicked");

      //Update, make sure it's not timed out and all
      var user = auth.currentUser;
      var userDoc = doc(db,"users",user.uid);

      try {
          
          // Create a Firestore document for the donor
          await updateDoc(userDoc, {
              email: npoEmail,
              name: npoName,
              imageURL: npoImgURL,
              phone: npoPhone
              
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
    
    
    
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) =>{
        if(user && editMode == false){
          
              
          //Access the database to figure out what kind of user this is
          if (user.uid != null) {
            const qsnap = await getDoc(doc(db,'users', user.uid));
            if (qsnap.exists()){
              console.log(qsnap.data());
              const userData = qsnap.data();
              setNPOEmail(userData.email);
              setNPOName(userData.name);
              setNPOPhone(userData.phone);
              setNPOImg(userData.imageURL);
            }
          }
        }
      
      })

    
  }, [user]);


  function EditProfilePanel() {
    return <>
      <form className="mt-3 py-5 px-10" style={{display: "flex", flexDirection: "column", backgroundColor:"#ececec", justifyContent:"center"}} >
          {"" !== notice && (
              <div className="alert alert-warning py-2 center text-red-500" role="alert">
                  {notice}
              </div>
          )}
          <div className="flex form-floating mb-2" style={{position:"relative", justifyContent:"center"}} >
              <input
                  id="updateName"
                  type="text"
                  className="flex form-control py-2 px-2 rounded-xl drop-shadow-md w-80"
                  placeholder=" Name"
                  value={npoName}
                  onChange={async (e) => setNPOName(e.target.value)}
              />
              
          </div>
          <div className="flex form-floating mb-2" style={{position:"relative", justifyContent:"center"}} >
              <input
                  id="updateEmail"
                  type="email"
                  className="flex form-control py-2 px-2 rounded-xl drop-shadow-md w-80"
                  aria-describedby="emailHelp"
                  placeholder="organization@example.com"
                  value={npoEmail}
                  onChange={(e) => setNPOEmail(e.target.value)}
              />
              
          </div>
          <div className="flex form-floating mb-2" style={{position:"relative", justifyContent:"center"}} >
              <input
                  id="updatePhone"
                  type="text"
                  className="flex form-control py-2 px-2 rounded-xl drop-shadow-md w-80"
                  placeholder="1234567890"
                  value={npoPhone}
                  onChange={(e) => setNPOPhone(e.target.value)}
              />
              
          </div>
          <div className="flex form-floating mb-2" style={{position:"relative", justifyContent:"center"}} >
              <input
                  id="updateImage"
                  type="url"
                  className="flex form-control py-2 px-2 rounded-xl drop-shadow-md w-80"
                  aria-describedby="image URL"
                  placeholder="https://imagelocation.com"
                  value={npoImgURL}
                  onChange={(e) => setNPOImg(e.target.value)}
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
      return <>
        <p className="font-serif font-heading text-2xl font-bold text-[#5B5040] py-2 px-20"> {npoName} </p>
        <p className="font-serif font-heading text-2xl font-bold text-[#5B5040] py-2 px-20"> {npoEmail}</p>
        <p className="font-serif font-heading text-2xl font-bold text-[#5B5040] py-2 px-20"> {npoPhone} </p>
        <div className="d-grid" onClick={(e) => setEdit(true)}>
            <button
                type="editProfile"
                className="btn underline btn-primary pt-3 pb-3"
                
            >
                Edit Contact Info
            </button>
        </div>
      </>;

  }



  return <>
    <div >
    <meta charSet="utf-8"/>
    
    <div className="h-500 drop-shadow-md flex items-center justify-center" style={{flexDirection:"column"}}>
        <img src={profile.background} alt="A beautiful garden" className="h-[400px] w-[1950px] bg-white-500 duration-300" style={{position: "relative", top:"-50px"}}/>
        <img src={npoImgURL} alt="Your Profile Picture" className="container max-w-[250px] mx-auto bg-white-500 duration-300"style={{top: "170px", position: "absolute", borderRadius:"50%"}}/>
    </div>
    <div className="flex py-10 space-x-5 items-center justify-center"style={{flexDirection:"column"}}> {/*This one is re-rendering for some reason*/}
    {editMode ?
      EditProfilePanel()
    :
      ProfilePanel()
    }
   
    <p className="font-serif font-heading text-5xl font-bold text-[#426B1F] py-5 px-20"> Go out there and do great!</p>
    </div>
      
      <div className="container py-10 px-10 space-x-10 space-y-10 mx-auto justify-center">
      <div className="container w-80 px-4 py-2 flex-col mx-auto text-center items-center bg-[#87A36F] rounded-xl text-[#ECECEC] font-serif leading-loose">
        <button className="text-3xl font-serif leading-loose " onClick={(e) => navigate("/donationportal")}>Donation Portal</button>
        
      </div>
    </div>
  </div>
  </>;
  
}
export default NPOUserProfile;
