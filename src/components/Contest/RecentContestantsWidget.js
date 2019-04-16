import React from 'react';
import { Avatar, List, ListSubheader, ListItem, CardContent } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import KPaper from '../UIC/KPaper';

const styles = theme => ({
    contestants: {
        flexWrap: 'wrap',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    avatar: {
        margin: '5px 1px',
        width: 30,
        height: 30,
    }
});

const contestants = [...Array(20)].map((v, i) => i);
const RecentContestantsWidget = ({classes}) => {
    return (
        <KPaper style={{marginTop: 5}}>
            <List subheader={<ListSubheader>RECENT CONTESTANTS</ListSubheader>} style={{textAlign: 'left'}} className={classes.root}>
            <CardContent className={classes.contestants}>
            {
                contestants.map( i => <Avatar src="/images/avatar.png" className={classes.avatar} /> )
            }
            </CardContent>
            </List>
        </KPaper>
    )
}


export default withStyles(styles)(RecentContestantsWidget);