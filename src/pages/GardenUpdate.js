import React from "react"; 
import firebase from '../firebase';
import {auth, firestore} from "../firebase";
import {signOut, onAuthStateChanged} from "firebase/auth";
import {useState, useEffect} from "react";
import {doc, updateDoc, getDoc} from 'firebase/firestore';

import plant01 from "./imgs/RewardPlant01.PNG";
import plant02 from "./imgs/RewardPlant02.PNG";
import plant03 from "./imgs/RewardPlant03.PNG";
import plant04 from "./imgs/RewardPlant04.PNG";
import plant05 from "./imgs/RewardPlant05.PNG";
import plant06 from "./imgs/RewardPlant06.PNG";
import plant07 from "./imgs/RewardPlant07.PNG";
import plant08 from "./imgs/RewardPlant08.PNG";
import { getDatabase } from "firebase/database";

const GardenUpdate = () => {
    const [userRewards, setUserRewards] = useState(null);
    const [loading, setLoading] = useState(true);
    const db = firestore;

    var userId = null;

    const updateRewardPoints = async (userId, points) => {
        const userDoc = doc(db, "users", userId);
    
        try {
        await updateDoc(userDoc, {
            rewardPoints: points
        });
        console.log("Document successfully updated!");
        } catch (error) {
        console.error("Error updating document: ", error);
        }
    };

    useEffect(() => {
        
        onAuthStateChanged(auth, async (user) =>{
            if(user){
            userId = user.uid;
            
            //Access the database to figure out what kind of user this is
            if (userId != null) {
                const increaseBy = firebase.firestore.FieldValue.increment(50);
                const userDoc = doc(db, "users", userId);
                try {
                await updateDoc(userDoc, {
                    rewardPoints: increaseBy
                });
                console.log("Document successfully updated!");
                } catch (error) {
                console.error("Error updating document: ", error);
                }

                const qsnap = await getDoc(doc(db,'users', userId));
                if (qsnap.exists()){
                console.log(qsnap.data());
                const userData = qsnap.data();
                setUserRewards(userData.rewardPoints);
                console.log("rewards points = " + userRewards);
                }
            }
            setLoading(false);
            }else{
            setLoading(false);
            }
        
        })

        
    }, [userId]);

  function ShowPlant() {
    if (userRewards >= 800) {
      return <>
      <img src={plant08} alt="plant-08"/>
      </>;
    }
    else if (userRewards >= 700) {
      return <>
      <img src={plant07} alt="plant-07"/>
      </>;
    }
    else if (userRewards >= 600) {
      return <>
      <img src={plant06} alt="plant-06"/>
      </>;
    }
    else if (userRewards >= 500) {
      return <>
      <img src={plant05} alt="plant-05"/>
      </>;
    }
    else if (userRewards >= 400) {
      return <>
      <img src={plant04} alt="plant-04"/>
      </>;
    }
    else if (userRewards >= 300) {
      return <>
      <img src={plant03} alt="plant-03"/>
      </>;
    }
    else if (userRewards >= 200) {
      return <>
      <img src={plant02} alt="plant-02"/>
      </>;
    }
    else if (userRewards >= 100) {
      return <>
      <img src={plant01} alt="plant-01"/>
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
        <div class="container py-20 px-5 justify-center flex mx-auto">
            <div class="h-100 w-100">
            <ShowPlant/>
            </div>
            <div class="flex-col px-4 py-4 lg:px-8 space-y-3">
                    <div class="mt-36 py-3 text-center text-[#426B1F]">
                        <p class="text-4xl font-serif font-bold leading-loose "> You've earned </p>
                        <p class="text-4xl font-serif font-bold leading-loose "> a new plant! </p>
                        <p><span class="mr-96"></span></p>
                    </div>

                    <div class="container shadow-lg bg-[#E5EEE3] rounded-xl text-[#000000] font-serif leading-loose px-8 py-8">
                        <p class="text-3xl text-center font-serif leading-loose ">Total Rewards: {userRewards}</p>
                        <p class="text-3xl text-center font-serif leading-loose ">Next Plant At: {userRewards + 100} </p>
                    </div>
            </div>
        </div>
    );
  }
}
export default GardenUpdate;
