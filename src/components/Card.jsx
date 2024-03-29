import React from "react";

import data from "../data/data.json";

function Card(props) {
  console.log(data);
  const event = data[0];
  console.log(event);

  return (
    <div className="p-4">
      {/* Card Div */}
      <div className=" ">
        <div className=" overflow-hidden rounded-lg shadow-xl my-4">
          {/* Image div */}
          <img
            src={props.image}
            alt=""
            className="h-[400px] w-full object-cover bg-white-500 hover:scale-110 duration-300"
          />
        </div>

        {/* Card text */}
        <h1 className="font-bold text-xl">{props.name}</h1>
        {/* to see just one card ->         ^ replace this with {event.name}  */}

        <div className="flex ">
          <p className="text-lg text-gray-600">{props.date} |</p>
          <p className="text-lg text-gray-400 px-1">{props.venue}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;