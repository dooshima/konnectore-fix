import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
import KButtonSmall from '../../components/UIC/KButtonSmall';


const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing *(2),
  },
  title: {
    display: 'block',
    fontSize: 18,
    fontWeight: 300,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      fontSize: 20,
      fontWeight: 900,
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolbar: {
    padding: '0 5%',
    minHeight: 40,
    [theme.breakpoints.up('md')]: {
      padding: '0 10%',
    },
    [theme.breakpoints.up('sm')]: {
      padding: '0 10%',
    },
    boxShadow: 'none',
  },
  link: {
    color: 'white',
    cursor: 'pointer',
    textDecoration: 'none',
    fontStyle: 'normal',
    [theme.breakpoints.up('md')]: {
      fontSize: 20,
      fontWeight: 300,
    }
  },
  linkSignup: {
    backgroundColor: 'white',
    cursor: 'pointer',
    textDecoration: 'none',
    fontStyle: 'normal',
    borderRadius: 20,
    padding: '5px 20px',
    [theme.breakpoints.up('md')]: {
      fontSize: 15,
      fontWeight: 400,
    },
    marginLeft: 30,
  },
  linkText: {
    fontSize: 14,
    fontWeight: 200,
    [theme.breakpoints.up('md')]: {
      fontSize: 18,
      fontWeight: 200,
    }
  },
  signupText: {
    fontSize: 14,
    fontWeight: 200,
    [theme.breakpoints.up('md')]: {
      fontSize: 15,
      fontWeight: 400,
    }
  },
  noStyle: {
    cursor: 'pointer',
    textDecoration: 'none',
    fontStyle: 'normal',
    color: 'white',
  },
}));

function MetaPrimaryNav() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <p>Signup</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" elevation={0}>
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.noStyle}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Open drawer"
          >
            <img src="/images/konnectore-logo-white.png" className={classes.logo} />
          </IconButton>
          </Link>
          <Link to="/" className={classes.noStyle}>
          <Typography className={classes.title} variant="h6" noWrap>
            Konnectore
          </Typography></Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {false? <IconButton
              edge="end"
              aria-owns={isMenuOpen ? 'material-appbar' : undefined}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>: 
            <><Link to="/" className={classes.link}><Typography className={classes.linkText}>Login</Typography></Link>
            <Link to="/" className={classes.linkSignup}><Typography color="primary" className={classes.signupText}>Sign Up</Typography></Link></>
            }
          </div>
          <div className={classes.sectionMobile}>
            <Link to="/" className={classes.link}><Typography>Login</Typography></Link>
            <IconButton aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
      {renderMobileMenu}
    </div>
  );
}

export default MetaPrimaryNav;
