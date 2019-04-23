import React, { Component } from 'react';
import SearchResultBody from './components/SearchResultBody';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';
import { Route, Switch, Link } from 'react-router-dom';
import SearchComponent from './components/Search/SearchComponent';
import MeController from './components/UIC/Me/MeController';
import HomeCompoment from './components/Home/HomeComponent';
import WithSidebar from './components/UIC/withSidebar';
import OnboardComponent from './components/Home/OnboardComponent';
import SidebarComponent from './components/UIC/SidebarComponent';
import ProtectedRoute from './components/Nav/ProtectedRoute';
import { connect } from 'react-redux';
import FriendComponent from './components/UIC/Friend/FriendComponent';
import PropsRoute from './components/Nav/PropsRoute';
import DashboardComponent from './components/Dashboard/DashboardComponent';
import ContestController from './components/Contest/ContestController';
import PasswordResetComponent from './components/Home/PasswordReset/PasswordResetComponent';
import PRComponent from './components/Home/PasswordReset/PRComponent';

const styles = theme => ({
  wrapper: {
    margin: 0,
    padding: 0,
    display: 'block',
  },
  header: {
    position: 'fixed',
    height: theme.spacing.unit * 5.4,
    width: '100%',
    backgroundColor: '#fff',
    zIndex: 200,
    margin: 0,
    padding: 0,
    top: 0,
    boxShadow: `0px 2px 4px -1px rgba(0,0,0,0), 0px 4px 5px 0px rgba(0,0,0,0), 0px 1px 10px 0px rgba(0,0,0,0.12)`,
  },
  content: {
    marginTop: theme.spacing.unit * 9.4,
    marginRight: theme.spacing.unit * 10,
  },
  sidebar: {
    width: theme.spacing.unit * 26.5,
    position: 'fixed',
    top: theme.spacing.unit * 9.4,
    bottom: 0,
    left: 0,
    overflowY: 'scroll',
    marginLeft: theme.spacing.unit * 10,
    //paddingTop: theme.spacing.unit * 2,
    '&::-webkit-scrollbar': {
      width: '0.1em'
    },
    '&::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 1px rgba(0,0,0,0)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,0)',
      outline: '1px solid slategrey'
    }
  },
  body: {
    marginLeft: theme.spacing.unit * 35.5,
    //paddingTop: theme.spacing.unit * 2,
  }
});

const UIContestComponent = <SidebarComponent component={ContestComponent} />;

function MainNavigator(props) {
  console.log(props.user.authToken && props.user.data.hasOwnProperty('id'))
    return (
        <Switch>
            <ProtectedRoute exact path="/" component={
              (props.user.authToken && props.user.data.hasOwnProperty('id'))? DashboardComponent: HomeCompoment} {...props}/>
            <Route exact path="/onboard" component={OnboardComponent} />
            <PropsRoute exact path="/reset/:token" component={PRComponent} {...props} />
            <Route path="/people" render={props => <SidebarComponent component={FriendComponent} {...props} />} />
            <Route path="/search" render={renderProps => <SidebarComponent {...renderProps} searchResults={props.searchResults} q={props.q} loggedIn={props.loggedIn} handleLogin={data => props.handleLogin(data)} component={SearchComponent} />} />
            <Route exact path="/contest" render={renderProps => <SidebarComponent component={ContestComponent} />} />
            <Route path="/contest/:slug" render={props => <SidebarComponent component={ContestController} {...props} />} />
            <ProtectedRoute path="/me" render={p => <SidebarComponent component={MeController} {...p} />} />
            <PropsRoute component={NotFoundComponent} user={props.user} />
        </Switch>
    )
  }
  
  MainNavigator.propTypes = {
    classes: PropTypes.object.isRequired,
  }

  const mapStateToProps = state => {
    return {
      user: state.user,
    }
  }
  
  export default connect(mapStateToProps, null)(withStyles(styles)(MainNavigator));

  function ContestComponent(props) {
    return (
      <div>
        <h1>This is Contest Component</h1>
        <p>{JSON.stringify(props)}</p>
      </div>
    )
  }

  function NotFoundComponent({user}) {
    return (
      <div style={{display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center'}}>
        <Typography component="h1" style={{fontSize: 34,}} color="textSecondary"> Page not found! &nbsp;
          {!user.authToken && <Link to="/">Back to home page</Link>}
          {user.authToken && <Link to="/me">Visit your dashboard</Link>}
        </Typography>
      </div>
    )
  }