import React, { useState } from 'react';
import { useGitHubContext } from '../context/GitHubContext';

const GitHubSearch = () => {
  const { users, loading, error, searchUsers } = useGitHubContext();
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    searchUsers(query);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    searchUsers(inputValue);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error fetching: {error}</p>}
      {!loading && !error && users.length === 0 && <p>No results...</p>}

      <ul>
        {!loading &&
          !error &&
          users.map((user) => (
            <li key={user.id}>
              <p>{user.login}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default GitHubSearch;
