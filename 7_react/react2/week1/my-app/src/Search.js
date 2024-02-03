import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './Loading';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSearchResult = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.github.com/search/users?q=${searchQuery}`
        );
        setSearchResult(response.data.items);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data. Please try again later');
        setLoading(false);
      }
    };
    if (searchQuery) {
      fetchSearchResult();
    }
  }, [searchQuery]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        placeholder="Search for user"
        onChange={handleSearch}
      />
      <ul>
        {loading && searchQuery && <Loading />}{' '}
        {/* Rendering the Loading component */}
        {error && <li>{error}</li>}
        {searchResult.length === 0 && <li>No results...</li>}
        {searchResult.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
