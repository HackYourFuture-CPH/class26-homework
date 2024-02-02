import './App.css';
import { useState, useEffect, createContext, useContext } from 'react';
import ControlledInput from './ControlledInput';


const GitHubUserSearchContext = createContext();

const App = () => {
 
  const [info, setInfo] = useState([]);
  const [search, setSearch] = useState('');
  const [url, setUrl] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [suggestions, setSuggestions] = useState([]); 

  
  useEffect(() => {
    if (search) {
      fetchSuggestions();
    } else {
      setSuggestions([]); 
    }
  }, [search]);

  
  const fetchSuggestions = async () => {
    setLoading(true);
        setError(null);
    
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${search}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const userNames = data.items.map(item => item.login); 
      setSuggestions(userNames); 
      setUrl(userNames);
     setInfo(data.items); 
      }
      
      catch (error) {
      console.error('Error fetching suggestions:', error);
      setSuggestions([]); 
    }
  };

 
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <h2>GitHub user searcher</h2>
     
      <GitHubUserSearchContext.Provider value={{ loading, error, url, handleInputChange, info, suggestions }}>
        <ControlledInput />
        {loading && <p>Loading...</p>}
        {error && <p>Error fetching: {error}</p>}
        {suggestions.length > 0 && (
          <ul>
            {suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        )}
      
        {!loading && !error && !url && suggestions.length === 0 && <p>No results...</p>}
        {url && <p>{url}</p>}
       
        {info.map((suggestion, index) => (
          <div key={index}>
            {suggestion.username}
          </div>
        ))}
      </GitHubUserSearchContext.Provider>
    </div>
  );
};

export const useGitHubUserSearchContext = () => useContext(GitHubUserSearchContext);

export default App;