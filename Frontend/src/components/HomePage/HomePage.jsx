import React from "react";
import "./HomePage.css";
import { assets } from "../../assets/assets";

const sections = [
  {
    title: "Smart Attention Tracker 🎯",
    text: "Our AI-powered CV (Computer Vision) feature ensures students stay focused while learning. If distracted, an alert brings them back—helping them stay engaged and retain knowledge more effectively!",
    imageUrl: assets.ten1,
    reverse: false,
  },
  {
    title: "AI-Powered Learning 🚀",
    text: "Using advanced AI, we track student engagement and provide real-time feedback. This helps in reducing distractions and improving concentration during video lessons.",
    imageUrl: assets.ten2,
    reverse: true,
  },
  {
    title: "Enhanced Learning Experience 📚",
    text: "With interactive assessments and a focus-driven approach, students grasp concepts faster and more effectively. Smart learning for a smarter future!",
    imageUrl: assets.ten3,
    reverse: false,
  },
];

const HomePage = () => {
  return (
    <div className="homepage">
      {sections.map((section, index) => (
        <div key={index} className={`section ${section.reverse ? "reverse" : ""}`}>
          <div className="image-container">
            <img src={section.imageUrl} alt={section.title} />
          </div>
          <div className="content">
            <h1>{section.title}</h1>
            <p>{section.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;