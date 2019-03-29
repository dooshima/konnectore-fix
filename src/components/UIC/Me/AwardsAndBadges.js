import React from 'react';
import PropTypes from 'prop-types';
import { List, ListSubheader, ListItem, ListItemText, Avatar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import KButtonSmall from '../KButtonSmall';
import KPaper from '../KPaper';

const styles = theme => {

}
function AwardsAndBadges(props) {
    const { classes } = props;
    return (
        <KPaper style={{marginTop: 5}}>
                <List subheader={<ListSubheader>AWARDS &amp; BADGES</ListSubheader>} style={{textAlign: 'left'}} className={classes.root}>
            <ListItem>
                <Avatar alt="Ademide Lawal" src="/images/badge-icon.png" />
            </ListItem>
            <ListItem>
                <Typography color="textSecondary" component="a" style={{flex: 1, textAlign: 'center'}}>SEE ALL</Typography>
            </ListItem>
            </List>
        </KPaper>
)
    }

AwardsAndBadges.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AwardsAndBadges);