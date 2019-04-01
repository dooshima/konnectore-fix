import React from 'react';
import PropTypes from 'prop-types';
import { List, ListSubheader, ListItem, ListItemText, Avatar, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import KPaper from '../UIC/KPaper';

const styles = theme => ({
    link: {
        //padding: 0,
        margin: 0,
        marginLeft: '2em',
        textTransform: 'none',
        color: '#ccc',
        borderBottom: '1px solid #efefef',
        display: 'block',
        flex: 1,
        textAlign: 'left'
    }
})
function OnboardMenu(props) {
    const { classes } = props;
    return (
        <KPaper style={{marginTop: 5}}>
                <List subheader={<ListSubheader>LET'S BUILD YOUR PROFILE</ListSubheader>} style={{textAlign: 'left'}} className={classes.root}>
            <ListItem>
                <Button transparent className={classes.link}><Typography color="textSecondary">Choose Username</Typography></Button>
            </ListItem>
            <ListItem>
                <Button transparent className={classes.link}><Typography color="textSecondary">Personal Information</Typography></Button>
            </ListItem>
            <ListItem>
                <Button transparent className={classes.link}><Typography color="textSecondary">Add your picture</Typography></Button>
            </ListItem>
            <ListItem>
                <Button transparent className={classes.link} style={{borderBottom: 'none'}}><Typography color="textSecondary">Visit your dashboard</Typography></Button>
            </ListItem>
            </List>
        </KPaper>
)
    }

OnboardMenu.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(OnboardMenu);