import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Link, ListSubheader, Button, Fab } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import InboxIcon from '@material-ui/icons/Inbox';
import GroupIcon from '@material-ui/icons/Group';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

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
    width: '100%',
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
  icon: {
    fontSize: theme.spacing.unit * 5.0
  },
  addPost: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },
  active: {backgroundColor: '#00927d', color: 'white', borderRadius: 5}
});

function LeftMenubar(props) {
    const { classes } = props;
    return (
<Paper style={{boxShadow: 'none'}}>
      <div className={classes.addPost}>
          <IconButton color="primary">
            <AddCircleOutlinedIcon className={classes.icon} />
          </IconButton>     
          <Typography color="primary" component="a">
            Add a post</Typography>     

      </div>
              <List component="nav" style={{paddingTop: 0}}>
                <ListItem button>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={
                    <NavLink to="/me" activeClassName={classes.active} true>
                      <Typography>
                        Home
                      </Typography>
                    </NavLink>
                  } />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <GroupIcon />
                  </ListItemIcon>
                  <ListItemText primary={<NavLink to="/friends" activeClassName={classes.active}>
                      <Typography>
                        Friends
                      </Typography>
                    </NavLink>
                  } />
                  </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <NotificationsIcon />
                  </ListItemIcon>
                  <ListItemText primary={<NavLink to="/activities" activeClassName={classes.active}>
                      <Typography>
                        Activities
                      </Typography>
                    </NavLink>
                  } />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={<NavLink to="/inbox" activeClassName={classes.active}>
                      <Typography>
                        Inbox
                      </Typography>
                    </NavLink>
                  } />
                </ListItem>
              </List>

              <Button ></Button>
              </Paper>
    )
                }

LeftMenubar.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LeftMenubar);