import React from 'react';
import PropTypes from 'prop-types';
import { List, ListSubheader, ListItem, ListItemText, Avatar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import KButtonSmall from '../KButtonSmall';
import KPaper from '../KPaper';

const styles = theme => {

}
function GrowYourNetwork(props) {
    const { classes } = props;
    return (
        <KPaper style={{marginTop: 20}}>
                <List subheader={<ListSubheader>GROW YOUR NETWORK</ListSubheader>} style={{textAlign: 'left'}} className={classes.root}>
            <ListItem>
                <Avatar alt="Ademide Lawal" src="/images/avatar.png" />
                <ListItemText primary="Ademide Lawal" 
                    secondary={
                        <KButtonSmall label="Follow" size="small" />
                    } 
                />
            </ListItem>
            <ListItem>
                <Avatar alt="Ademide Lawal" src="/images/avatar.png" />
                <ListItemText primary="Ademide Lawal" 
                    secondary={
                        <KButtonSmall label="Follow" size="small" />
                    } 
                />
            </ListItem>
            <ListItem>
                <Avatar alt="Ademide Lawal" src="/images/avatar.png" />
                <ListItemText primary="Ademide Lawal" 
                    secondary={
                        <KButtonSmall label="Follow" size="small" />
                    } 
                />
            </ListItem>
            <ListItem>
                <Avatar alt="Ademide Lawal" src="/images/avatar.png" />
                <ListItemText primary="Ademide Lawal" 
                    secondary={
                        <Typography color="textSecondary">Following</Typography>
                    } 
                />
            </ListItem>
            <ListItem>
                <Typography color="textSecondary" component="a" style={{flex: 1, textAlign: 'center'}}>SEE ALL</Typography>
            </ListItem>
            </List>
        </KPaper>
)
    }

GrowYourNetwork.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(GrowYourNetwork);