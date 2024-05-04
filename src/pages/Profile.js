import React from "react"; 


const Profile = () => {


    return (
        <div class="space-y-5">
        <meta charSet="utf-8"/>
          <div className="flex items-end py-10">
            <p className="font-serif font-heading text-5xl font-bold text-[#426B1F] py-5 px-20"> Richardson Humane Society</p>
            <div className="py-5 px-40 flex item-right max-w-30 mx-auto space-x-5">
                <svg class="h-8 w-8 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
                <svg class="h-8 w-8 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="3" y="5" width="18" height="14" rx="2" />  <polyline points="3 7 12 13 21 7" /></svg>
                <svg class="h-8 w-8 text-red-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
            </div>
          </div>
        <hr />
        <div class="py-10 h-500 drop-shadow-md flex items-center justify-center">
            <img src={"https://petstablished-app-beta.s3.amazonaws.com/uploads/user/logo/402744/2019_new_logo_RHS.jpg"}alt="" className="border-4 rounded-lg h-[200px] bg-white-500 duration-300"/>
        </div>
        <div class="flex space-x-5 justify-center">
            <a href="donate" class="bg-[#426B1F] hover:bg-[#87A36F] py-4 px-8 rounded-full text-xl font-bold font-serif text-[#ECECEC]">Donate</a>
            <a href="https://www.richardsonhumanesociety.org/"  target="_blank" rel="noopener noreferrer" class="bg-[#426B1F] hover:bg-[#87A36F] py-4 px-8 rounded-full text-xl font-bold font-serif text-[#ECECEC]">Learn More</a>
            <br></br>
        </div>
        <div class="container max-w-4xl mx-auto px-10 py-10 flex flex-col text-center items-center bg-[#ECECEC] rounded-xl text-[#5B5040] font-serif leading-loose">
            <p class="text-3xl font-serif leading-loose ">Our Mission</p>
            <p class="-py-10 max-w-4xl text-xl font-serif leading-loose">The purpose of this society is to rescue and re-home adoptable pets, educate our community regarding the prevention of cruelty to animals, promote animal population control through advocation of spay/neuter programs, and extend humane education.</p>
        </div>
        <div class="container max-w-4xl mx-auto px-10 py-10 flex flex-col text-center items-center bg-[#ECECEC] rounded-xl text-[#5B5040] font-serif leading-loose">
            <p class="py-1 max-w-lg text-3xl font-serif leading-loose">Our Needs</p>
            <p class="max-w-4xl text-xl font-serif leading-loose">We need volunteers, willing foster parents, and donations!</p>
        </div>
    
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center">
            <div>
                <img class="h-50 max-w-md rounded-lg" src="https://www.richardsonhumanesociety.org/wp-content/uploads/2021/11/11-6-21-Mavis-now-Misha.jpg" alt=""></img>
            </div>
            <div>
                <img class="h-50 max-w-md rounded-lg" src="https://www.richardsonhumanesociety.org/wp-content/uploads/2018/10/RHS_IA_Event.png" alt=""></img>
            </div>
            <div>
                <img class="h-50 max-w-md rounded-lg" src="https://www.richardsonhumanesociety.org/wp-content/uploads/2018/06/6-23-18-Hugo-adoption-email.jpg" alt=""></img>
            </div>
        </div>
      </div>
    );
  }
  
export default Profile;
