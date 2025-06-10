// src/components/CategoryFilter.jsx
import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function CategoryFilter({ categories, selectedCategory, onSelect }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded-lg">
        {selectedCategory || 'All Categories'}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="bg-white dark:bg-gray-700 rounded-md shadow p-2 text-white">
          <DropdownMenu.Item
            onSelect={() => onSelect('')}
            className="px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 rounded cursor-pointer text-white hover:text-white"
          >
            All Categories
          </DropdownMenu.Item>
          {categories.map(cat => (
            <DropdownMenu.Item
              key={cat}
              onSelect={() => onSelect(cat)}
              className="px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 rounded cursor-pointer text-white hover:text-white"
            >
              {cat}
            </DropdownMenu.Item>
          ))}
          <DropdownMenu.Arrow className="fill-current text-white dark:text-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
