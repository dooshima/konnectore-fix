import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import MoreIcon from '@material-ui/icons/MoreVert';
import TopLoginButton from './TopLoginButton';
import userActions from '../../reducers/user/actions';
import { withRouter } from 'react-router-dom';
import Constants from '../../assets/Constants';

const styles = theme => ({
  root: {
    flexGrow: 0,
  },
  grow: {
    flexGrow: 0,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
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
  uAvatar: {
    margin: 0,
    padding: 0,
    marginLeft: 12,
    
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
});

class TopProfileMenu extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  gotoProfile = () => {
    this.props.getUserInfo(this.props.user.id, this.props.authToken);
    this.props.history.push('/me');
  }

  render() {
    const { classes, user } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    console.log('topprofile' , user)
    let path = '';
    if(user.avatar) {
      path = user.avatar.includes('http')? user.avatar: Constants.BASE_URL + "storage/" + user.avatar;
    }
    const avatar = path? path: "/images/avatar.png";

    return (
      <div className={classes.root}>            
            {this.props.authToken? (
                <>
                <div className={classes.sectionDesktop} style={{display: 'flex', alignItems: 'center'}}>
              
                <Typography variant="subtitle2" gutterBottom>
                  {`${user.firstname} ${user.lastname} 90`}<br />
                  {user.referralID}
                </Typography>
                  <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                  className={classes.uAvatar}
                >
                  <Avatar alt={`${user.firstname} ${user.lastname}`} src={avatar} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.gotoProfile}>My Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>Settings &amp; Privacy</MenuItem>
                  <MenuItem onClick={this.handleClose}>Need help?</MenuItem>
                  <MenuItem onClick={this.props.logout}>Logout</MenuItem>
                </Menu>
                </div>
                <div className={classes.sectionMobile}>
                  <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                    <MoreIcon />
                  </IconButton>
                </div> 
                </>  
            ): <TopLoginButton handleLogin={this.props.handleLogin} />}
      </div>
    );
  }
}

TopProfileMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = state => {
  return {
    loggedIn: state.user.data.hasOwnProperty('id'),
    user: state.user.data,
    authToken: state.user.authToken,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: uid => {
      dispatch(userActions.handleLogout(uid));
    },
    getUserInfo: (id, token) => {
      dispatch(userActions.getUser(id, token));
  }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter((withStyles(styles)(TopProfileMenu))));
