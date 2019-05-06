import React from 'react';
import InboxSenderList from './InboxSenderList';
import { Typography, Grid, IconButton, ListItem, Avatar, ListItemText } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import SettingsIcon from '@material-ui/icons/Settings';
import KPaper from '../UIC/KPaper';

const styles = theme => ({
    controlsRow: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: theme.spacing.unit * 1,
    },
    message: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    }
})

class InboxComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <KPaper style={{margin: 20}}>
            <KPaper className={classes.inboxHeader}>
                <Grid container spacing={8}>
                    <Grid item md="4">
                        <div className={classes.controlsRow}>
                            <Typography style={{fontSize: 20, marginBottom: 0,}}>
                                Messages
                            </Typography>
                            <div className={classes.controls}>
                                <IconButton>
                                    <CreateNewFolderIcon />
                                </IconButton>
                                <IconButton>
                                    <SettingsIcon />
                                </IconButton>
                            </div>
                        </div>
                    </Grid>
                    <Grid item md="8">
                        <ListItem className={classes.item}>
                            <Avatar alt="Ademide Lawal" src="/images/avatar.png" />
                            <ListItemText primary="Ademide Lawal" 
                                secondary={
                                    <React.Fragment>
                                        <Typography color="textSecondary" className={classes.message}>
                                            Okay, thanks. I'll let you know when it's available.
                                        </Typography>
                                    </React.Fragment>
                                } 
                            />
                        </ListItem>
                    </Grid>
                </Grid>
            </KPaper>
                <Grid container spacing={8}>
                    <Grid item md="4">
                        <InboxSenderList />
                    </Grid>
                    <Grid item md="8">
                    
                    </Grid>
                </Grid>
                
            </KPaper>
        )
    }
}

export default withStyles(styles)(InboxComponent);