import React from 'react';
import PropTypes, { nominalTypeHack } from 'prop-types';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import classNames from 'classnames';
import LoginCard from './account/LoginCard';
import KFooter from './UIC/KFooter';
import LeftUserMenu from './Nav/LeftUserMenu';
import { connect } from 'react-redux';

const activeLink = classNames({'link': true, 'active': true});
const dudUrl = 'javascript:;';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    paddingRight: 20,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  active: {
    color: '#00927d'
  },
  avatar: {
    borderRadius: 3
  },
  uAvatar: {
    borderRadius: 15
  },
  link: {
    margin: theme.spacing.unit,
    textDecoration: 'none',
    paddingLeft: 30,
    paddingRight: 30, 
    color: '#000000de',
    '&:hover': {
      fontStyle: 'normal'
    }
  },
  search: {
    position: 'relative',
    borderRadius: 18,
    backgroundColor: fade(theme.palette.common.black, 0.06),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.08),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

function LeftSidebar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <LoginMenu loggedIn={props.loggedIn} />
      <KFooter />
    </div>
  )
    
}

function LoginMenu(props) {
  if(props.loggedIn) {
    return <LeftUserMenu />
  } else {
    return <LoginCard />
  }
}

LeftSidebar.propTypes = {
    classes: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
  return {
    loggedIn: state.user.data.hasOwnProperty('id'),
  }
}
export default connect(mapStateToProps)(withStyles(styles)(LeftSidebar));