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
    
  }
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

  render() {
    const { classes, user } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);


    return (
      <div className={classes.root}>            
            {this.props.loggedIn && (
                <>
                <div className={classes.sectionDesktop} style={{display: 'flex', alignItems: 'center'}}>
              
                <Typography variant="subtitle2" gutterBottom>
                  {`${user.profileData.firstName} ${user.profileData.lastName}`}
                </Typography>
                  <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                  className={classes.uAvatar}
                >
                  <Avatar alt={`${user.profileData.firstName} ${user.profileData.lastName}`} src="/images/avatar.png" />
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
                  <MenuItem onClick={this.handleClose}>My Profile</MenuItem>
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
            )}

            {!this.props.loggedIn && <TopLoginButton handleLogin={this.props.handleLogin} />}
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
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: uid => {
      dispatch(userActions.handleLogout(uid));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TopProfileMenu));
