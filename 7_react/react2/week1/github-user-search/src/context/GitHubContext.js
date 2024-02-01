import { createContext, useContext, useState } from 'react';

const GitHubContext = createContext();

export const useGitHubContext = () => {
  return useContext(GitHubContext);
};

export const GitHubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchUsers = async (query) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.github.com/search/users?q=${query}`);
      const data = await response.json();

      if (response.ok) {
        setUsers(data.items);
      } else {
        setError(`Failed to fetch: ${data.message}`);
      }
    } catch (error) {
      setError(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const contextValue = {
    users,
    loading,
    error,
    searchUsers,
  };

  return (
    <GitHubContext.Provider value={contextValue}>
      {children}
    </GitHubContext.Provider>
  );
};
