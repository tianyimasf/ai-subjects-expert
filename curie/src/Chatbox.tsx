// src/Chatbox.tsx

import React, { useState } from 'react';

interface Message {
  id: number;
  text: string;
}

const Chatbox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { id: Date.now(), text: input }]);
      setInput('');
    }
  };

  return (
    <div className="flex flex-col w-full max-w-3xl p-4 bg-white dark:bg-darkBackground rounded-lg shadow-lg">
      <div className="flex-1 overflow-y-auto p-2">
        {messages.map((message) => (
          <div key={message.id} className="mb-2 flex justify-end">
            <div className="p-2 text-gray-400 bg-gray-200 rounded-lg dark:bg-gray-700">
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center mt-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-600 dark:text-white"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="ml-2 p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbox;
