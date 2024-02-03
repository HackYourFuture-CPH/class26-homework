import "./App.css";
import SearchInput from "./SearchInput";
import { useState } from "react";
import SearchingStatus from "./SearchingStatus";
import { AppContext } from "./AppContext";
import SearchResults from "./SearchResults";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchError, setSearchError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSearch = (e) => {
    const value = e.target.value;
    if (value) {
      setLoading(true);
      setSearchError(null);
      setSearchResults([]);

      fetch(`https://api.github.com/search/users?q=${value}`).then(
        async (response) => {
          if (response.ok) {
            const data = await response.json();
            setSearchResults(data.items);
            setLoading(false);
          } else {
            setLoading(false);
            setSearchResults([]);
            setSearchError("An error occurred. Please try again later.");
          }
        }
      );
    }
  };

  return (
    <div className="App">
      <h1>Github User Searcher</h1>
      <AppContext.Provider
        value={{ loading, items: searchResults, error: searchError }}
      >
        <SearchInput onSearch={onSearch} />
        <SearchingStatus />
        <SearchResults />
      </AppContext.Provider>
    </div>
  );
}

export default App;
