// src/App.tsx

import React, { useState } from 'react';
import Chatbox from './Components/Chatbox';
import './App.css'; // Ensure your Tailwind CSS is imported here

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  return (
    <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-zinc-900' : 'bg-gray-100'}`}>
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 text-sm rounded bg-zinc-700 text-white hover:bg-gray-600"
        >
          Toggle Dark Mode
        </button>
      </div>
      <Chatbox darkMode={darkMode} />
    </div>
  );
};

export default App;
