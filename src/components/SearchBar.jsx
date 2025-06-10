// src/components/SearchBar.jsx
import React from 'react';

export default function SearchBar({ searchText, onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search sources..."
      value={searchText}
      onChange={e => onSearchChange(e.target.value)}
      className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
    />
  );
}
