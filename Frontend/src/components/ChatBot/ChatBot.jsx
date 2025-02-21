import React, { useState } from "react";
import { assets } from "../../assets/assets";

const Chatbot = ({isOpen, setIsOpen}) => {


  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        <img
          src={assets.chatbot}
          alt="Chatbot"
          style={{ width: "60px", height: "60px" }}
        />
      </div>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            width: "400px",
            height: "600px",
            background: "white",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            zIndex: 1000,
          }}
        >
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/fwZNApMv1K1T5nhNxpDOb"
            width="100%"
            height="100%"
            style={{ border: "none" }}
            frameBorder="0"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Chatbot;




