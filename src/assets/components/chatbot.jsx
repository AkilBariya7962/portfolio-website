// src/components/Chatbot.js
import React, { useState } from "react";
import "../css/chatboat.css";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ from: "bot", text: "Hi! How can I help you today?" }]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    const newMessages = [...messages, { from: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    // Simulated bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { from: "bot", text: "Thanks for reaching out!" }]);
    }, 1000);
  };

  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        💬
      </button>

      {isOpen && (
        <div className="chatbox">
          <div className="chatbox-header">Chatbot Assistant</div>
          <div className="chatbox-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.from}`}>
                {msg.text}
              </div>
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
  );
}

export default Chatbot;
