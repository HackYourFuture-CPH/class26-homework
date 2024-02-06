import React from 'react'
import './App.css';
import { UserSearchProvider } from './Components/UserSearchContext';
import Search from './Components/Search';

function App() {
  return (
    <div className="App">
      <UserSearchProvider>
        <Search/>
      </UserSearchProvider>
    </div>
  );
}

export default App;
