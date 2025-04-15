import React, { useState } from "react";
import home from "./img/developer.png";
import "../css/Homepage.css";
import { Link } from "react-router-dom";
import "../css/chatboat.css";

function Homepage() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    const newMessages = [...messages, { from: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    // Bot reply
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { from: "bot", text: "Thanks for reaching out!" }
      ]);
    }, 1000);
  };

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content fade-in">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Akil Bariya</span>
          </h1>
          <h2 className="hero-subtitle">Frontend Developer | React Specialist</h2>
          <p className="hero-description">
            A passionate developer who thrives on creating end-to-end digital experiences.
            I build sustainable, scalable solutions that make a real impact.
          </p>
          <div className="button-group">
            <Link to="#resume" className="btn btn-primary">Download Resume</Link>
            <Link to="/contact" className="btn btn-primary">Contact_us</Link>
          </div>
        </div>
        <div className="hero-image fade-in">
          <img src={home} alt="Akil Bariya - Frontend Developer" />
        </div>
      </section>

      {/* Chatbot UI */}
      <div className="chatbot-container">
        <button className="chatbot-toggle" onClick={() => setIsChatOpen(!isChatOpen)}>💬</button>

        {isChatOpen && (
          <div className="chatbox">
            <div className="chatbox-header">Chatbot Assistant</div>
            <div className="chatbox-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.from}`}>{msg.text}</div>
              ))}
            </div>
            <div className="chatbox-input">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
              />
              <button onClick={handleSend}>Send</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Homepage;
