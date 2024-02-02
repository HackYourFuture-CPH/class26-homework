import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = useCallback(async () => {
    setLoading(true);

    try {
      const res = await fetch(`https://api.github.com/search/users?q=${query}`);
      const result = await res.json();
      const users = result.items || [];
      setData(users);
    } catch (error) {
      console.error('Error fetching users:', error.message);
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    if (query.length > 2) {
      fetchUsers();
    }
  }, [query, fetchUsers]);

  return (
    <AppContext.Provider value={{ query, setQuery, data, loading, fetchUsers }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export { AppProvider, useAppContext }; 
