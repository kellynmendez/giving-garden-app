import React from "react";

function Card({ name, date, venue, image, isFavorite, onToggleFavorite }) {
  return (
    <div className="p-4">
      {/* Card Div */}
      <div className=" ">
        <div className=" overflow-hidden rounded-lg shadow-xl my-4">
          {/* Image div */}
          <img
            src={image}
            alt=""
            className="h-[350px] w-full bg-white-500 px-6 py-6 hover:scale-110 duration-300"
          />
        </div>

        {/* Card text */}
        <div className="flex space-x-5">
        <h1 className="font-bold text-xl ">{name}</h1>
        <button onClick={onToggleFavorite} className="bg-transparent hover:bg-[#87A36F] text-[#426B1F] py-1 px-3 border border-emerald-800 rounded-full">
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>

        <div className="flex ">
          <p className="text-lg bg- text-gray-600">{date} |</p>
          <p className="text-lg text-gray-400 px-1">{venue}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
