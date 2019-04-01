import React, { Component } from 'react';
import SearchResultBody from './components/SearchResultBody';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import SearchComponent from './components/Search/SearchComponent';
import MeController from './components/UIC/Me/MeController';
import HomeCompoment from './components/Home/HomeComponent';
import withSidebar from './components/UIC/withSidebar';
import OnboardComponent from './components/Home/OnboardComponent';

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

const UISearchComponent = withSidebar(SearchComponent);
const UIContestComponent = withSidebar(ContestComponent,);
const UIMeComponent = withSidebar(MeController);

function MainNavigator(props) {
    const { classes } = props;
  
    return (
        <Switch>
            <Route exact path="/" component={HomeCompoment} />
            <Route exact path="/onboard" component={OnboardComponent} />
            <Route exact path="/user" render={props => <SearchResultBody uploadprogress={props.uploadprogress} uploadMedia={props.uploadMedia} setFormdata={props.setFormdata} imageurl={props.imageurl} setImageUrl={props.setImageUrl} />} />
            <Route path="/search" render={renderProps => <UISearchComponent {...renderProps} searchResults={props.searchResults} q={props.q} loggedIn={props.loggedIn} handleLogin={data => props.handleLogin(data)} />} />
            <Route path="/contest" render={renderProps => <UIContestComponent />} />
            <Route path="/me" component={UIMeComponent} />
        </Switch>
    )
  }
  
  MainNavigator.propTypes = {
    classes: PropTypes.object.isRequired,
  }
  
  export default withStyles(styles)(MainNavigator);

  function ContestComponent(props) {
    return (
      <div>
        <h1>This is Contest Component</h1>
        <p>{JSON.stringify(props)}</p>
      </div>
    )
  }