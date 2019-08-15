import React from 'react';
import logo from './logo.svg';
import './App.css';
import Filter from './Filter'

function App() {

  var {count, mm}=Filter("tab1");

  var {count, mm:mm2}=Filter("tab2");

  return (
    <div className="App">
      <header className="App-header">
        {mm}
        {mm2}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
