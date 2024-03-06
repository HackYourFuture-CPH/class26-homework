import { createContext, useState, useContext } from 'react';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchUsers = async (query) => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`https://api.github.com/search/users?q=${query}`);
      const data = await response.json();

      if (response.ok) {
        setUsers(data.items);
      } else {
        setError(data.message || 'Unknown error');
      }
    } catch (err) {
      setError(err.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const clearUsers = () => {
    setUsers([]);
  };

  return (
    <GithubContext.Provider value={{ users, loading, error, searchUsers, clearUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export const useGithubContext = () => {
  return useContext(GithubContext);
};