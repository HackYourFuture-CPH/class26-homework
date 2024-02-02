// App.js
import React, { useState } from "react";
import { useGithubContext } from "./Context/GithubContext";
import "./App.css";

const App = () => {
  const { users, loading, error, searchUsers } = useGithubContext();
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    searchUsers(query);
  };

  return (
    <div>
      <header>
        <h1>Github User Searcher</h1>
      </header>

      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>

        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {users.length === 0 && !loading && !error && <p>No results...</p>}

        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
