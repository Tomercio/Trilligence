// src/App.jsx
import React, { useState, useMemo } from 'react';
import threatIntelligenceSources from './data/sources';
import SourceCard from './components/SourceCard';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import useFilter from './hooks/useFilter';

function App() {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Derive unique categories from data
  const categories = useMemo(() => {
    const cats = new Set(threatIntelligenceSources.map(s => s.category));
    return Array.from(cats);
  }, []);

  // Filtered list
  const filteredSources = useFilter(
    threatIntelligenceSources,
    searchText,
    selectedCategory
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <header className="mb-6 text-center">
        <h1 className="text-3xl font-bold mb-2">Trilligence</h1>
        <h2 className="text-xl font-bold mb-2">Threat Intelligence Directory</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Browse and discover Threat Intelligence platforms and resources.
        </p>
      </header>

      <div className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-4 space-y-4 md:space-y-0 mb-6">
        <SearchBar searchText={searchText} onSearchChange={setSearchText} />
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>

      {filteredSources.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">No sources found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center">
          {filteredSources.map(src => (
            <SourceCard key={src.name} source={src} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
