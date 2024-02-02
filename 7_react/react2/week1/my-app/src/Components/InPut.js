import React from 'react';
import { useAppContext } from './context/SearchContext';

function Input() {
  const { setQuery } = useAppContext();

  return (
    <input
      placeholder="Search..."
      className="search"
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default Input;
