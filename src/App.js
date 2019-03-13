import React, { Component } from 'react';
import './App.css';
import PrimaryNavBar from './components/PrimaryNavBar';
import SearchResultBody from './components/SearchResultBody';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import LeftSidebar from './components/LeftSidebar';
import { Z_FIXED } from 'zlib';
import { withStyles } from '@material-ui/core';
import zIndex from '@material-ui/core/styles/zIndex';
import Main from './components/UIC/Main';
import { Link } from 'react-router-dom';
import { posts } from './components/assets/posts';
import { connect } from 'react-redux';
import { showSearchForm } from './../src/reducers/search/actions';
import Auth from './services/Auth/Auth';
import userActions from './../src/reducers/user/actions';

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
    boxShadow: `0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)`,
  },
  content: {
    marginTop: theme.spacing.unit * 6.4,
    marginRight: theme.spacing.unit * 10,
  },
  sidebar: {
    width: theme.spacing.unit * 27.5,
    position: 'fixed',
    top: theme.spacing.unit * 6.4,
    bottom: 0,
    left: 0,
    overflowY: 'scroll',
    marginLeft: theme.spacing.unit * 10,
    paddingTop: theme.spacing.unit * 2,
  },
  body: {
    marginLeft: theme.spacing.unit * 37.5,
    paddingTop: theme.spacing.unit * 2,
  }
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      q: '',
    }

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleSearch = q => {
    this.setState({q: q, posts: posts});
    this.props.history.push('/search?q=' + q);
  };
  
  render() {
    const { classes } = this.props;
    return (
      <>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/policy" component={Policy} />
          <Route render={props => <Main {...props} {...this.state} searchResults={this.state.posts} q={this.state.q} handleLogin={this.handleLogin} handleLogout={this.handleLogout} handleSearch={q => this.handleSearch(q)} />} />
        </Switch>
      </>
    );
  }

  handleLogin(data) {
    this.props.handleLogin(data.email, data.password);
  }

  handleLogout() {
    this.setState({loggedIn: false});
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showSearchForm: show => {
      dispatch(showSearchForm(show));
    },
    showAuthLoading: isLoading => {
      dispatch(userActions.showAuthLoading(isLoading));
    },
    handleLogin: (email, password) => {
      dispatch(userActions.handleLogin(email, password));
    }
  }
}

const StyledApp = withStyles(styles)(withRouter(App));

export default connect(mapStateToProps, mapDispatchToProps)(StyledApp);

export function About(props) {
  return  <>
      <div>About Konnector</div>
      <Link to="/me">Home</Link>
    </>
}

export function Policy(props) {
  return <>
    <div>Policy for Konnector</div>
    <Link to="/me">Home</Link>
    </>
}

