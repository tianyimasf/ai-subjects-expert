import React, { useState, useEffect, useRef } from 'react';
import studyingGirl from '../assets/studyingGirl.png';
import SubjectsDropdown from './SubjectsDropdown';

const Chatbox: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleSend = () => {
    if (input.trim()) {
      setMessages((prevMessages) => [...prevMessages, input]);
      setInput('');
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className={`w-full max-h-4xl max-w-5xl mx-auto p-4 rounded-lg shadow-lg ${darkMode ? 'bg-[#27272A] text-white' : 'bg-white text-black'}`}>
      <SubjectsDropdown darkMode={darkMode}/>
      <div className="flex items-center p-2 mt-2">
        <img src={studyingGirl} alt="Studying Girl" className="w-8 h-8 rounded-full mr-2" />
        <span className="text-lg font-semibold">Curie</span>
      </div>
      <div className="h-[390px] overflow-y-auto border-b border-gray-700 mb-4"> {/* Increased height from h-80 to h-96 */}
        {messages.map((msg, index) => (
          <div key={index} className="text-right mb-2">
            <span className={`inline-block rounded-lg p-2 ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-300 text-black'}`}>{msg}</span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex">
        <input
          type="text"
          className={`flex-grow p-2 rounded-l-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'} focus:outline-none`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type your message..."
          aria-label="Type your message"
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbox;
