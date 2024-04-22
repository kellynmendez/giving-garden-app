import React from "react"; 
import data from "../data/profile.json"
import plant01 from "./imgs/RewardPlant01.PNG";

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
         
         <div class="container py-20 px-5 space-x-10 flex justify-center">
          {/* <div class="max-w-4xs mx-auto px-10 py-10 flex flex-col text-center items-center bg-[#ECECEC] rounded-xl text-[#5B5040] font-serif leading-loose">
              <p class="text-3xl font-serif leading-loose ">Rewards</p>
              <p class="-py-10 max-w-4xl text-xl font-serif leading-loose">Total Rewards: 200</p>
              <p class="-py-10 max-w-4xl text-xl font-serif leading-loose">Next Plant At: 300</p>
          </div> */}
          <div class="container w-80 px-2 py-2 flex flex-col text-center items-center bg-[#ECECEC] rounded-xl text-[#5B5040] font-serif leading-loose">
            <p class="text-3xl font-serif leading-loose ">Rewards</p>
            <p class="-py-10 max-w-4xl text-xl font-serif leading-loose">Total Rewards: 200</p>
          </div>
          <div class="grid grid-cols-4 gap-3 max-w-xs h-100 flex flex-wrap:wrap text-center">
              <img src={plant01} alt="plant-01"/>
              <img src={plant01} alt="plant-01"/>
              <img src={plant01} alt="plant-01"/>
              <img src={plant01} alt="plant-01"/>
              <img src={plant01} alt="plant-01"/>
              <img src={plant01} alt="plant-01"/>
              <img src={plant01} alt="plant-01"/>
              <img src={plant01} alt="plant-01"/>
          </div>
        </div>
      </div>
    );
  }
  
export default UserProfile;
