import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`https://api.github.com/search/users?q=${query}`);
        const result = await res.json();
        const users = result.items || [];
        setData(users);
      } catch (error) {
        console.error('Error fetching users:', error.message);
      }
    };

    if (query.length === 0 || query.length > 1) {
      fetchUsers();
    }
  }, [query]);

  return (
    <div className="App">
      <h1>GitHub User Searcher</h1>
      <input
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      {data.length > 0 ? (
        <div>
          {data.map((user) => (
            <div key={user.id}>{user.login}</div>
          ))}
        </div>
      ) : (
        <p>No results...</p>
      )}
    </div>
  );
}

export default App;
