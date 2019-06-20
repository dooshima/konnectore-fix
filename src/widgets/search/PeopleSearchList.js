import React from 'react';
import PropTypes from 'prop-types';
import { List, ListSubheader, ListItem, ListItemText, Avatar, Typography, createMuiTheme } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import KButtonSmall from '../KButtonSmall';
import KPaper from '../KPaper';
import Utility from '../../../services/Utility';
import PersonSearchItem from '../friends/PersonSearchItem';

const theme = createMuiTheme({
    spacing: 10,
});

const styles = {
    personName: {
        margin: 20,
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }
    }
}
function PeopleSearchList(props) {
    const { classes, people, handleFollow, handleUnfollow } = props;
    return (
                <List style={{textAlign: 'left'}} className={classes.root}>
                {
                    people.map( (person, index) => 
                        <PersonSearchItem key={index} person={people} handleFollow={handleFollow} handleUnfollow={handleUnfollow} />
                    )
                }
                </List>
)
    }

PeopleSearchList.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PeopleSearchList);