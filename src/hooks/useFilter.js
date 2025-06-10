// src/hooks/useFilter.js
import { useMemo } from 'react';

export default function useFilter(sources, searchText, selectedCategory) {
  return useMemo(() => {
    return sources.filter(src => {
      const matchesText =
        src.name.toLowerCase().includes(searchText.toLowerCase()) ||
        src.description.toLowerCase().includes(searchText.toLowerCase());
      const matchesCategory = selectedCategory
        ? src.category === selectedCategory
        : true;
      return matchesText && matchesCategory;
    });
  }, [sources, searchText, selectedCategory]);
}
