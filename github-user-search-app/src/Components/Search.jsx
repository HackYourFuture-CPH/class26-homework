
import React, { useContext } from 'react';
import { UserSearchContext } from './UserSearchContext';

const Search = () => {
  const { searchQuery, setSearchQuery, searchUsers, searchResults, loading, error } = useContext(
    UserSearchContext
  );

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchUsers(searchQuery);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Search GitHub users..."
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching {error}</p>}
      {!loading && searchResults.length === 0 && <p>No results...</p>}
      {!loading &&
        searchResults.length > 0 &&
        searchResults.map((user) => (
          <div key={user.id}>
            <img src={user.avatar_url} alt={user.login} />
            <p>{user.login}</p>
          </div>
        ))}
    </div>
  );
};

export default Search;
 



