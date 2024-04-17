import React, { useEffect, useState } from "react";
import Card from "./Card";

import { firestore } from "../firebase";
function Dashboard() {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const eventsCollection = firestore.collection("npos"); 
      const data = await eventsCollection.get();
      setEvents(data.docs.map((doc) => doc.data()));
    };

    fetchData();
  }, []);

  // console.log(data);
  // const event = data[0];
  // console.log(event);

  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
        {events.map((event, index) => (
          <Card
            key={index}
            name= {<a href="profile">{event.name}</a>}
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