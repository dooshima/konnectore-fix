import React, { Component } from 'react';
import './App.css';
import PrimaryNavBar from './components/PrimaryNavBar';
import SearchResultBody from './components/SearchResultBody';
import PropTypes from 'prop-types';
import LeftSidebar from './components/LeftSidebar';
import { Z_FIXED } from 'zlib';
import { withStyles } from '@material-ui/core';
import zIndex from '@material-ui/core/styles/zIndex';

const styles = theme => ({
  wrapper: {
    margin: 0,
    padding: 0,
    display: 'block',
  },
  header: {
    position: 'fixed',
    height: theme.spacing.unit * 6.4,
    width: '100%',
    backgroundColor: '#fff',
    zIndex: 200,
    margin: 0,
    padding: 0,
    top: 0,
  },
  content: {
    marginTop: theme.spacing.unit * 6.4,
  },
  sidebar: {
    width: theme.spacing.unit * 27.5,
    position: 'fixed',
    top: theme.spacing.unit * 6.4,
    bottom: 0,
    left: 0,
    overflowY: 'scroll',
  },
  body: {
    marginLeft: theme.spacing.unit * 27.5,
    
  }
});

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
    const { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <PrimaryNavBar loggedIn={this.state.loggedIn} handleLogin={this.handleLogin} handleLogout={this.handleLogout} />
        </div>
        <div className={classes.content}>
          <div className={classes.sidebar}>
            <LeftSidebar loggedIn={this.props.loggedIn} handleLogin={this.props.handleLogin} />
          </div>
          <div className={classes.body}>
            <SearchResultBody loggedIn={this.state.loggedIn} handleLogin={this.handleLogin} />
          </div>
        </div>
        
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

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(App);
