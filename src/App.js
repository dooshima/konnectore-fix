import React, { Component } from 'react';
import './App.css';
import PrimaryNavBar from './components/PrimaryNavBar';
import SearchResultBody from './components/SearchResultBody';
import Root from './Root'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
    }

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  render() {
    return (
      <div className="App">
        <PrimaryNavBar loggedIn={this.state.loggedIn} handleLogin={this.handleLogin} handleLogout={this.handleLogout} />
        <SearchResultBody loggedIn={this.state.loggedIn} handleLogin={this.handleLogin} />
      </div>
    );
  }

  handleLogin() {
    this.setState({loggedIn: true});
  }

  handleLogout() {
    this.setState({loggedIn: false});
  }
}

export default App;
