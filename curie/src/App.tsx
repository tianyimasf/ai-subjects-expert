// src/App.tsx

import React, { useState } from 'react';
import Chatbox from './Chatbox';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-zinc-800">
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 p-2 bg-gray-200 rounded-lg hover:bg-gray-300 dark:bg-zinc-700 dark:hover:bg-zinc-600"
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <Chatbox />
    </div>
  );
};

export default App;
