import React from 'react';
import './App.css';
import { AppProvider } from './Context/useAppContext';
import Input from './Components/Input';
import List from './Components/List';
import Loading from './Components/Loading';

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
