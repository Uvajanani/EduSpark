import React from "react";

export default function IndiaMap({ onSelect }) {
  const locations = ["Himalayas", "Vindhyas", "Thar Desert", "Deccan Plateau", "South", "East", "Northwest", "Central"];
  return (
    <div>
      <h3>Click on a location:</h3>
      {locations.map((location) => (
        <button key={location} onClick={() => onSelect(location)}>
          {location}
        </button>
      ))}
    </div>
  );
}
