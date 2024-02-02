// App.js
import React from 'react';
import './App.css';
import { AppProvider } from './useAppContext';
import Input from './Input';
import List from './List';
import Loading from './Loading';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <h1>GitHub User Searcher</h1>
        <Input />
        <Loading />
        <List />
      </div>
    </AppProvider>
  );
}

export default App;
