import React from 'react';
import PropTypes from 'prop-types';
import { Paper, List, ListSubheader, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import GroupIcon from '@material-ui/icons/Group';
import StarsIcon from '@material-ui/icons/Stars';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => {

}
function CompetitionSummaryCard(props) {
    const { classes } = props;
    return (
<Paper style={{marginTop: 20}}>
            <List subheader={<ListSubheader>COMPETITIONS</ListSubheader>} style={{textAlign: 'left'}} className={classes.root}>
        <ListItem>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="My Competitions" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <TrendingUpIcon />
          </ListItemIcon>
          <ListItemText primary="Trending Competitions" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <StarsIcon />
          </ListItemIcon>
          <ListItemText primary="See All Competitions" />
        </ListItem>
      </List>
      </Paper>
)
    }

CompetitionSummaryCard.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CompetitionSummaryCard);