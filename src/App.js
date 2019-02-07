import React, { Component } from 'react';
import './App.css';
import PrimaryNavBar from './components/PrimaryNavBar';
import SearchResultBody from './components/SearchResultBody';
import Root from './Root'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PrimaryNavBar />
        <SearchResultBody />
      </div>
    );
  }
}

export default App;
