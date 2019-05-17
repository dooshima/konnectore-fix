import React from 'react';
import InboxSenderList from './InboxSenderList';
import { Typography, Grid, IconButton, ListItem, Avatar, ListItemText } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import SettingsIcon from '@material-ui/icons/Settings';
import KPaper from '../UIC/KPaper';
import InboxMessageThread from './InboxMessageThread';
import RecentlyAddedUsersDialog from '../../widgets/inbox/RecentlyAddedUsersDialog';

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

        this.state = {
            message: '',
            messages: [
                {
                    message: "Okay, thanks. I'll let you know when it's available.",
                    type: 1,
                    date: "2019-01-09",
                },
                {
                    message: "Okay, thanks. I'll let you know when it's available.",
                    type: 1,
                    date: "2019-02-09",
                },
                {
                    message: "Okay, thanks. I'll let you know when it's available.",
                    type: 2,
                    date: "2019-03-09",
                },
                {
                    message: "Okay, thanks. I'll let you know when it's available.",
                    type: 1,
                    date: "2019-04-09",
                },
                {
                    message: "Okay, thanks. I'll let you know when it's available.",
                    type: 1,
                    date: "2019-04-15",
                }
            ],
        }
    }

    handleChange = name => value => {
        this.setState({[name]: value.target.value})
    }

    addMessage(message) {
        const messages = this.state.messages;
        const msg = {
            message: message,
            type: 2,
            date: new Date()
        }
        this.setState({messages: [...messages, msg]});
    }

    sendMessage = (e) => {
        this.addMessage(this.state.message);
        this.setState({message: ''});
        e.preventDefault();
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
                                <RecentlyAddedUsersDialog handleChange={this.handleChange} />
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
                        <InboxMessageThread messages={this.state.messages} message={this.state.message} handleChange={this.handleChange} sendMessage={this.sendMessage} />
                    </Grid>
                </Grid>
                
            </KPaper>
        )
    }
}

export default withStyles(styles)(InboxComponent);