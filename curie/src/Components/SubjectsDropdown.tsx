// src/SubjectsDropdown.tsx

import React, { useState } from 'react';

interface SubjectsDropdownProps {
  darkMode: boolean;
}

const SubjectsDropdown: React.FC<SubjectsDropdownProps> = ({ darkMode }) => {
  const [selectedSubject, setSelectedSubject] = useState<string>('Subjects');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const options = ['Climate Change', 'Recent News'];

  const handleOptionClick = (option: string) => {
    setSelectedSubject(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 ${
            darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}>
          {selectedSubject}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06 0L10 10.293l3.71-3.08a.75.75 0 111 1.08l-4 3.333a.75.75 0 01-1 0l-4-3.333a.75.75 0 010-1.08z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className={`absolute left-0 z-10 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="py-1" role="menu" aria-orientation="vertical">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className={`block px-4 py-2 text-sm ${
                  darkMode ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
                } w-full text-left`}
                role="menuitem"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SubjectsDropdown;
