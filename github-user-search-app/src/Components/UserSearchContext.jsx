
import React, { createContext, useState } from 'react';

const UserSearchContext = createContext();

const UserSearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchUsers = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${query}`);
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      setSearchResults(data.items);
      setError('');
    } catch (error) {
      setError(error.message);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserSearchContext.Provider
      value={{ searchQuery, setSearchQuery, searchUsers, searchResults, loading, error }}
    >
      {children}
    </UserSearchContext.Provider>
  );
};

export { UserSearchProvider, UserSearchContext };
