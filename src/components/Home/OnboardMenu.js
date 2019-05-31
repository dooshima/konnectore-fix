import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { List, ListSubheader, ListItem, ListItemText, Avatar, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import KPaper from '../UIC/KPaper';
import SnackMessage from '../../widgets/alerts/SnackMessage';

const styles = theme => ({
    link: {
        //padding: 0,
        margin: 0,
        paddingLeft: '1em',
        textTransform: 'none',
        color: '#ccc',
        borderBottom: '1px solid #efefef',
        display: 'block',
        flex: 1,
        textAlign: 'left'
    },
    paper: {
        marginRight: '2em',
    },
    logo: {
        width: 'auto',
        height: 60,
        margin: '1.2em auto',
    },
    logoDiv: {
        display: 'flex',
    }
})
function OnboardMenu(props) {
    const { classes, currentScreen } = props;
    const [open, setState] = useState();

    return (
        <KPaper className={classes.paper}>
            <div className={classes.logoDiv}>
            <img src="/images/logo.png" className={classes.logo} />
            </div>
                <List subheader={<ListSubheader>LET'S BUILD YOUR PROFILE</ListSubheader>} style={{textAlign: 'left'}} className={classes.root}>
            <ListItem>
                <Button transparent className={classes.link}><Typography style={{fontWeight: currentScreen==="ChooseUsername"? 900: 300, color: currentScreen==="ChooseUsername"? '#000': '#0000008a' }}>Choose Username</Typography></Button>
            </ListItem>
            <ListItem>
                <Button transparent className={classes.link}><Typography style={{fontWeight: currentScreen==="PersonalInformation"? 900: 300, color: currentScreen==="PersonalInformation"? '#000': '#0000008a' }}>Personal Information</Typography></Button>
            </ListItem>
            <ListItem>
                <Button transparent className={classes.link}><Typography style={{fontWeight: currentScreen==="AddYourPicture"? 900: 300, color: currentScreen==="AddYourPicture"? '#000': '#0000008a' }}>Add your picture</Typography></Button>
            </ListItem>
            <ListItem>
                <Button transparent className={classes.link}><Typography style={{fontWeight: currentScreen==="ConnectWithPeople"? 900: 300, color: currentScreen==="ConnectWithPeople"? '#000': '#0000008a' }}>Find people</Typography></Button>
            </ListItem>
            <ListItem>
                <Button transparent className={classes.link} style={{borderBottom: 'none'}}><Typography style={{fontWeight: currentScreen==="ChooseCategory" ? 900: 300, color: currentScreen==="ChooseCategory"? '#000': '#0000008a' }}>Final steps</Typography></Button>
            </ListItem>
            </List>
            
        </KPaper>
)
    }

OnboardMenu.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(OnboardMenu);