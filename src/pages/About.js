import React from "react"; 
import volunteerhands from "./imgs/volunteer-hands.png";

const About = () => {
    return (
      <div class="space-y-5">
        <meta charSet="utf-8"/>
          <div className="flex items-end py-10">
            <p className="font-serif font-heading text-5xl font-bold text-[#2c7b47] py-5 px-20">About Us</p>
          </div>
        <hr />
        <div class="container max-w-6xl mx-auto px-10 py-10 flex flex-col items-center rounded-xl text-[#5B5040] font-serif leading-loose">
            <p class="text-4xl text-center font-serif leading-loose">
              <b>Mission Statement: <br></br>
              “Cultivating connections, growing a giving garden for a brighter tomorrow.”</b></p>
            <p class="-py-10 max-w-6xl text-xl font-serif leading-loose">
              GivingGarden was founded in 2024 by four students in Dallas who wanted a way to give back to the nonprofits 
              in their community. Our mission is to foster meaningful connections between individuals and the nonprofits 
              within their community, empowering them to make impactful contributions towards positive change. We believe 
              in harnessing the collective power of generosity to address pressing social needs and cultivate a stronger, 
              more vibrant society.
            </p>
        </div>
        <div class="container max-w-4xl mx-auto px-10 py-10 flex flex-col text-center items-center rounded-xl">
            <img src={volunteerhands} alt=""/>
        </div>
      </div>
    );
  }
  
export default About;