import React from 'react';
import { Avatar, List, ListSubheader, ListItem, CardContent, Typography, ListItemText } from '@material-ui/core';
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
        width: 40,
        height: 40,
        borderRadius: 4,
    }
});

const contestants = [...Array(20)].map((v, i) => i);
const TopContestantsWidget = ({classes}) => {
    return (
        <KPaper>
                <List subheader={<ListSubheader>TOP CONTESTANTS</ListSubheader>} style={{textAlign: 'left'}} className={classes.root}>
            <ListItem>
                <img alt="Ademide Lawal" src="/images/post-img.png" className={classes.avatar} />
                <ListItemText primary="Ademide Lawal" 
                    secondary={
                        <Typography color="textSecondary">M.U.L.T.I.NET</Typography>
                    } 
                />
            </ListItem>
            <ListItem>
                <img alt="Ademide Lawal" src="/images/post-img.png" className={classes.avatar} />
                <ListItemText primary="Ademide Lawal" 
                    secondary={
                        <Typography color="textSecondary">M.U.L.T.I.NET</Typography>
                    } 
                />
            </ListItem>
            <ListItem>
                <img alt="Ademide Lawal" src="/images/post-img.png" className={classes.avatar} />
                <ListItemText primary="Ademide Lawal" 
                    secondary={
                        <Typography color="textSecondary">M.U.L.T.I.NET</Typography>
                    } 
                />
            </ListItem>
            <ListItem>
                <img alt="Ademide Lawal" src="/images/post-img.png" className={classes.avatar} />
                <ListItemText primary="Ademide Lawal" 
                    secondary={
                        <Typography color="textSecondary">M.U.L.T.I.NET</Typography>
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


export default withStyles(styles)(TopContestantsWidget);