import React from "react"; 
import data from "../data/profile.json"

const UserProfile = () => {
    const profile = data[0]
    return (
        <div >
        <meta charSet="utf-8"/>
       
        <div class="h-500 drop-shadow-md flex items-center justify-center" style={{flexDirection:"column"}}>
            <img src={profile.background} alt="A beautiful garden" className="h-[400px] w-[1950px] bg-white-500 duration-300"/>
            <img src={profile.image} alt="Your Profile Picture" className="container max-w-[250px] mx-auto bg-white-500 duration-300"style={{top: "170px", position: "absolute", borderRadius:"50%"}}/>
        </div>
        <div class="flex py-10 space-x-5 items-center justify-center"style={{flexDirection:"column"}}>
        <p className="font-serif font-heading text-2xl font-bold text-[#5B5040] py-2 px-20"> {profile.name}</p>
        <p className="font-serif font-heading text-2xl font-bold text-[#5B5040] py-2 px-20"> {profile.email}</p>
        <p className="font-serif font-heading text-1xl font-bold text-[#5B5040] py-2 px-20"> {profile.rewards} points</p>
        <p className="font-serif font-heading text-5xl font-bold text-[#426B1F] py-5 px-20"> My Garden</p>
            
            <br></br>
            
        </div>
         <hr />
        <div class="container max-w-4xl mx-auto px-10 py-10 flex flex-col text-center items-center bg-[#ECECEC] rounded-xl text-[#5B5040] font-serif leading-loose">
            <p class="text-3xl font-serif leading-loose ">Plant Name</p>
            <p class="-py-10 max-w-4xl text-xl font-serif leading-loose">Reward for 50 points</p>
        </div>

      </div>
    );
  }
  
export default UserProfile;
