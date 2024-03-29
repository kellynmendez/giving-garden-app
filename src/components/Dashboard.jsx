import React from "react";
import Card from "./Card";

import data from "../data/data.json";

function Dashboard() {
  console.log(data);
  const event = data[0];
  console.log(event);

  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
        {data.map((event, index) => (
          <Card
            name= {<a href="profile.html">{event.name}</a>}
            date={event.date}
            venue={event.venue}
            image={event.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;