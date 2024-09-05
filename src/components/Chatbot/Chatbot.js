// src/components/Chatbot/Chatbot.js
import React, { useState } from 'react';
import { FaRobot } from 'react-icons/fa';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, user: true }]);
      setInput('');
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "I can't talk right now, come back later.", user: false },
        ]);
      }, 1000);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chatbot">
      <div className="chatbot-icon" onClick={handleToggle}>
        <FaRobot />
      </div>
      <div className={`chat-window ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          StarBot
          <button onClick={handleToggle}>×</button>
        </div>
        <div className="chat-body">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chat-message ${message.user ? 'user' : 'bot'}`}
            >
              <div className="chat-bubble">{message.text}</div>
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={input}
            onChange={handleInput}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
          />
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
