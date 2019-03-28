import React from 'react';
import PropTypes from 'prop-types';
import { Paper, List, ListSubheader, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import GroupIcon from '@material-ui/icons/Group';
import StarsIcon from '@material-ui/icons/Stars';
import SearchIcon from '@material-ui/icons/Search';
import KPaper from './UIC/KPaper';

const styles = theme => {

}
function FeedCard(props) {
    const { classes } = props;
    return (
<KPaper>
            <List subheader={<ListSubheader>FEED</ListSubheader>} style={{textAlign: 'left'}} className={classes.root}>
        <ListItem>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="Browse Topics" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <TrendingUpIcon />
          </ListItemIcon>
          <ListItemText primary="Trending" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <StarsIcon />
          </ListItemIcon>
          <ListItemText primary="Popular" />
        </ListItem>
      </List>
      </KPaper>
)
    }

FeedCard.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FeedCard);