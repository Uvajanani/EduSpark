import React, { useEffect, useState } from "react";
import './FactCard.css'
const FactCard = () => {
  const [fact, setFact] = useState("");

  const fetchFact = async () => {
    try {
      const response = await fetch("https://api.api-ninjas.com/v1/facts", {
        headers: { "X-Api-Key": "7Rhmyql20jEVVEmDI+y25Q==yMw23y5K2BglKTRm" },
      });
      const data = await response.json();
      setFact(data[0].fact); 
    } catch (error) {
      console.error("Error fetching fact:", error);
    }
  };

  useEffect(() => {
    fetchFact();

    const interval = setInterval(fetchFact, 300000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fact-card">
      <h3>Did You Know?</h3>
      <p>{fact || "Loading a cool fact..."}</p>
      <button onClick={fetchFact}>New Fact</button>
    </div>
  );
};

export default FactCard;
