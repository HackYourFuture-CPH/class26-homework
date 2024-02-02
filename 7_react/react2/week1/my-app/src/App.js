// App.js
import React from 'react';
import './App.css';
import { useAppContext } from './Context/SearchContext';
import InPut from './Components/InPut';
import List from './Components/List';
import Loading from './Components/Loading';



function App() {
  return (
    <div className="App">
      <h1>GitHub User Searcher</h1>
      <InPut />
      <Loading />
      <List />
    </div>
  );
}

export default App;
