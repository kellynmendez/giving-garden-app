import React, { useEffect, useState } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar"; // Import the SearchBar component

import { firestore } from "../firebase";

function Dashboard() {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [activeButton, setActiveButton] = useState("default"); // Track active button

  useEffect(() => {
    const fetchData = async () => {
      const eventsCollection = firestore.collection("npos");
      const data = await eventsCollection.get();
      setEvents(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id, isFavorite: false }))
      ); // Include isFavorite property
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleFavorite = (eventId) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === eventId ? { ...event, isFavorite: !event.isFavorite } : event
      )
    );
  };

  const toggleFavoritesOnly = () => {
    setShowFavoritesOnly((prev) => !prev);
    setActiveButton("favorites"); // Set active button
  };

  const resetFilters = () => {
    setShowFavoritesOnly(false);
    setActiveButton("default"); // Set active button
  };

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const eventsToDisplay = showFavoritesOnly
    ? filteredEvents.filter((event) => event.isFavorite)
    : filteredEvents;

  return (
    <div>
      <div className="flex items-end py-10 space-x-5">
        <p className="font-serif font-heading text-6xl font-bold text-[#426B1F] py-5 px-10">
          {" "}
          Home
        </p>
        <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
        <div className="py-5 px-5 flex-1 space-x-4 text-right text-align" style={{paddingRight:"150px"}}>
          <button
            className={`${
              activeButton === "default" ? "bg-[#426B1F] text-white" : "bg-white"
            } hover:bg-[#87A36F] text-[#426B1F] py-2 px-4 rounded-full`}
            onClick={resetFilters}
          >
            Default
          </button>
          <button
            className={`${
              activeButton === "favorites" ? "bg-[#426B1F] text-white" : "bg-white"
            } hover:bg-[#87A36F] text-[#426B1F] py-2 px-4 border rounded-full`}
            onClick={toggleFavoritesOnly}
          >
            Favorites
          </button>
        </div>
      </div>

      <hr />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
        {eventsToDisplay.map((event, index) => (
          <Card
            key={index}
            name={<a href="profile">{event.name}</a>}
            date={event.date}
            venue={event.venue}
            image={event.image}
            isFavorite={event.isFavorite}
            onToggleFavorite={() => toggleFavorite(event.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
