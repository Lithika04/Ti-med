import React, { useState } from "react";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "You", text: input }]);
      setMessages((prev) => [...prev, { sender: "Bot", text: "How can I assist you?" }]);
      setInput("");
    }
  };

  return (
    <div>
      <h2>Virtual Doctor Chatbot</h2>
      <div className="chatbox">
        {messages.map((msg, index) => (
          <p key={index}><strong>{msg.sender}:</strong> {msg.text}</p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask a question..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default Chatbot;
