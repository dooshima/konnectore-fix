import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import NoSsr from '@material-ui/core/NoSsr';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { NavLink, Link, Router } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import NewPostButtons from './NewPostButtons';
import Icon from '@material-ui/core/Icon';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  lists: {
    backgroundColor: theme.palette.background.paper,
  },
  active: {backgroundColor: '#00927d', color: 'white !important', borderRadius: 5},
  icon: {
    fontSize: theme.spacing.unit * 5.0
  },
  addPost: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },
});

const link = {
    hover: {
        color: 'white'
    },
    active: {
        backgroundColor: '#00927d',
        color: 'white !important',
        borderRadius: 5,
    }
}

class ListItemLink extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isActive: false,
        }
    }

    isActive = to => (match,location) => {
        
        if(to) {
            if(location.pathname.includes(to)) {
                if(!this.state.isActive)
                    this.setState({isActive: true});
            } else {
                if(this.state.isActive)
                    this.setState({isActive: false});
            }

            return location.pathname.includes(to);
        }
    }

    renderLink = itemProps => <NavLink isActive={this.isActive(this.props.path)} onMouseOver={this.mouseEnter} onMouseOut={this.mouseOut} to={this.props.to} {...itemProps} activeClassName={this.props.active} />;

    linkState = (e) => {

        if(e) {
            //this.setState({isActive: true})
        }
    }

    mouseEnter = () => {
        this.setState({isActive: true})
    }

    mouseOut = () => {
        this.setState({isActive: false})
    }

  render() {
    const { icon, primary } = this.props;
    return (
      <li>
        <ListItem button component={this.renderLink} style={this.state.isActive? link.active: {}}>
          <ListItemIcon style={this.state.isActive? link.hover: {}}>{icon}</ListItemIcon>
          <ListItemText primary={
              <Typography style={this.state.isActive? link.hover: {}}>
                  {primary}
          </Typography> } />
        </ListItem>
      </li>
    );
  }
}

ListItemLink.propTypes = {
  icon: PropTypes.node.isRequired,
  primary: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

function ListItemLinkShorthand(props) {
  const { primary, to } = props;
  return (
    <li>
      <ListItem button component={Link} to={to}>
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLinkShorthand.propTypes = {
  primary: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

class LeftUserMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    }
  }

  toggle = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
  const { classes } = this.props;
  // Use NoSsr to avoid SEO issues with the documentation website.
  return (
    <NoSsr>     
        <div className={classes.root}>
          <div className={classes.lists}>
            <NewPostButtons toggle={this.toggle} open={this.state.open} />
            <List component="nav">
                <ListItemLink to="/me" primary="Home" path="me" icon={<HomeIcon />} active={classes.active} true />
                <ListItemLink to="/friends" path="friends" primary="Friends" icon={<GroupIcon />} active={classes.active} />
              <ListItemLink to="/inbox" path="inbox" primary="Inbox" icon={<InboxIcon />} active={classes.active} />
              <ListItemLink to="/activities" path="activities" primary="Activities" icon={<NotificationsIcon />} active={classes.active} />
            </List>
          </div>
        </div>    
    </NoSsr>
  );
  }
}

LeftUserMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftUserMenu);
