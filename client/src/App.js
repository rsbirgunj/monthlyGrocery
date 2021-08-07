import './App.css';
import React from 'react';
import ItemAdder from './components/itemAdder';
import Navbar from './components/Navbar';
import Date from './components/date';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Date className="date"/>
      <header className="App-header">
        <ItemAdder/>
      </header>
    </div>
  );
}

export default App;
