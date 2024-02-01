import React from 'react';
import { GitHubProvider } from './context/GitHubContext';
import GitHubSearch from './components/GitHubSearch';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <GitHubProvider>
        <GitHubSearch />
      </GitHubProvider>
    </div>
  );
};

export default App;
