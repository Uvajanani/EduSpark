import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode"; 
import { StoreContext } from "../../context/StoreContextProvider";
import { Link } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { assets } from "../../assets/assets";
import "./Dashboard.css";

const Dashboard = () => {
    const { url, token } = useContext(StoreContext);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchUserProfile = async () => {
          const storedToken = localStorage.getItem("token");
          if (!storedToken) {
              console.error("❌ No token found. User not logged in.");
              return;
          }
  
          const decodedToken = jwtDecode(storedToken);
          const userId = decodedToken.id;
  
          try {
              const response = await axios.get(`${url}/api/user/profile/${userId}`, {
                  headers: { Authorization: `Bearer ${storedToken}` }
              });
  
              if (response.data.success) {
                  setUser(response.data.user);
              } else {
                  console.error("❌ User not found");
              }
          } catch (error) {
              console.error("❌ Error fetching user profile:", error);
          }
      };
  
      fetchUserProfile();
  }, [token]); // ✅ Fetch again when token changes
  

    useEffect(() => {
        const fetchUserProfile = async () => {
            const storedToken = localStorage.getItem("token");
            if (!storedToken) {
                console.error("❌ No token found. User not logged in.");
                return;
            }

            // ✅ Decode userId from token
            const decodedToken = jwtDecode(storedToken);
            if (!decodedToken.id) {
                console.error("❌ Invalid token structure:", decodedToken);
                return;
            }

            const userId = decodedToken.id;
            console.log("🔗 Fetching user profile for ID:", userId);

            try {
                const response = await axios.get(`${url}/api/user/profile/${userId}`, {
                    headers: { Authorization: `Bearer ${storedToken}` }
                });

                console.log("✅ API Response:", response.data);

                if (response.data.success) {
                    setUser(response.data.user);
                    setLoading(false);
                } else {
                    console.error("❌ User not found");
                    setLoading(false);
                }
            } catch (error) {
                console.error("❌ Error fetching user profile:", error);
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, [token]);

    if (loading) return <p>Loading...</p>;
    if (!user) return <p>Error loading user data</p>;

    // 📊 Convert scores object into chart data
    const data = Object.entries(user.scores || {}).map(([subject, score]) => ({
        subject: subject.charAt(0).toUpperCase() + subject.slice(1),
        score: score,
    }));

    return (
        <div className="dashboard">
            <h1>📚 Student Dashboard</h1>

            {/* 👤 User Profile */}
            <div className="profile-streak">
                <div className="profile-card">
                    <div className="profile-img">
                        <img src={assets.profile_icon} alt="Profile" />
                    </div>

                    <div className="profile-contents">
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                        <p>🔥 Streak: {user.streak} Days</p>
                        <button onClick={() => alert("Edit Profile Coming Soon!")}>Edit Profile</button>
                    </div>
                </div>

                <div className="progress-card">
                    <h3>📊 Average Score: <span>{user.avgScore.toFixed(2)}%</span></h3>
                    <p>Keep improving your scores!</p>
                </div>
            </div>

            {/* 📈 Assessment Scores */}
            <div className="assessment-section">
                <h3>Subject-wise Scores 📊</h3>
                <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={data}>
                        <XAxis dataKey="subject" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="score" stroke="#4A90E2" />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* 🏅 Badges */}
            <div className="badges-section">
                <h3>🏅 Badges & Achievements</h3>
                {user.badges.length > 0 ? (
                    <div className="badges-container">
                        {user.badges.map((badge, index) => (
                            <div key={index} className="badge-card">
                                <img src={assets[`Badge${index + 1}`]} alt={badge} className="badge-img" />
                                <p>{badge}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No badges earned yet. Keep going! 🚀</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
