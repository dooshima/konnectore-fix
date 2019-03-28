import React from 'react';
import PropTypes, { nominalTypeHack } from 'prop-types';
import { connect } from 'react-redux';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Grid, LinearProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import TopProfileMenu from './account/TopProfileMenu';
import SearchForm from './Search/SearchForm';

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
    margin: `0 ${theme.spacing.unit * 10}px`,
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
    paddingTop: theme.spacing.unit * 0.6,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit * 0.6,
    paddingLeft: theme.spacing.unit * 5,
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
  holder: {
    width: '100%'
  },
  linearColorPrimary: {
    backgroundColor: '#b2dfdb',
  },
  linearBarColorPrimary: {
    backgroundColor: '#00695c',
  },
  loaderHolder: {
    flex: 1,
    marginBottom: theme.spacing.unit * 2,
  }
});

const activeLink = classNames({'link': true, 'active': true});

class PrimaryNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      mobileMoreAnchorEl: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  handleSubmit (q) {
    this.props.handleSearch(q);
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const dudUrl = 'javascript:;';

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <div className={classes.holder}>
          <Toolbar style={{flexGrow: 1, minHeight: 54, backgroundColor: 'white', paddingLeft: 0, paddingRight: 0,}}>
            <Grid container spacing={8}>
              <Grid item xs={2} style={{display: 'flex', alignItems: 'center'}}>
                <div style={{display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
                  <Link to="/">
                    <Avatar className={classes.avatar} alt="Konnectore Logo" src="/images/konnectore-logo-green.png" />
                  </Link>
                </div>
              </Grid>
              <Grid item xs={7} style={{display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
                <SearchForm loggedIn={this.props.loggedIn} handleSubmit={this.handleSubmit} />
              </Grid>
              <Grid item xs={3} style={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'end', alignItems: 'center'}}>
                <TopProfileMenu handleLogout={this.props.handleLogout} handleLogin={this.props.handleLogin} />
              </Grid>
            </Grid>
         
          </Toolbar>
          { this.props.isLoading && <div className={classes.loaderHolder}>
              <LinearProgress
                classes={{
                  colorPrimary: classes.linearColorPrimary,
                  barColorPrimary: classes.linearBarColorPrimary,
                }}
              />
            </div>
          }
        </div>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

PrimaryNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    isLoading: state.app.isLoading,
  }
}

export default connect(mapStateToProps)(withStyles(styles)(PrimaryNavBar));