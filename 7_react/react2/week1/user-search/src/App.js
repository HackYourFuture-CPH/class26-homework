import { useState } from 'react';
import { GithubProvider, useGithubContext } from './components/GithubContext';

const App = () => {
  const { users, loading, error, searchUsers, clearUsers } = useGithubContext();
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim()) {
      searchUsers(value);
    } else {
      clearUsers();
    }
  };

  return (
    
    <div>
    <h1>Github user searcher</h1>
      <input type="text" value={query} onChange={handleSearch} placeholder="Search users..." />
      
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {users.length === 0 && !loading && !error && <p>No results...</p>}

      {users.map((user) => (
        <div key={user.id}>{user.login}</div>
      ))}
    </div>
  );
};

const AppWithGithubProvider = () => {
  return (
    <GithubProvider>
      <App />
    </GithubProvider>
  );
};

export default AppWithGithubProvider;
