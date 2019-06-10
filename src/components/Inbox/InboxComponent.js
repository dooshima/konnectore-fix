import React from 'react';
import InboxSenderList from './InboxSenderList';
import { Typography, Grid, IconButton, ListItem, Avatar, ListItemText } from '@material-ui/core';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import SettingsIcon from '@material-ui/icons/Settings';
import KPaper from '../UIC/KPaper';
import InboxMessageThread from './InboxMessageThread';
import RecentlyAddedUsersDialog from '../../widgets/inbox/RecentlyAddedUsersDialog';
import { connect } from 'react-redux';
import inboxActions from '../../reducers/inbox/actions';
import Utility from '../../services/Utility';

const theme = createMuiTheme({
    spacing: 10,
});
const styles = {
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
    },
    inboxContainer: {
        minHeight: 600,
        maxHeight: '100vh',
        position: 'relative',
    }
};

class InboxComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
            messages: {},
            threads: [],
            currentThread: {},
        }
    }

    componentDidMount() {
        this.props.getUserFollowing(this.props.user.authToken);
        this.props.getUserThreads(this.props.user.authToken);
    }

    handleChange = name => value => {
        this.setState({[name]: value.target.value})
    }

    getMessages = threadcode => {
        this.props.getThreadMessages(threadcode, this.props.user.authToken);
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
        //this.props.handleAddMessage(this.state.message);
        //this.handleSendMessage()
        this.setState({message: ''});
        e.preventDefault();
    }

    addThread = recipient => {

        const thread = {
            receiver_id: recipient.userid,
            sender_id: this.props.user.data.id,
            receiver_avatar: recipient.avatar,
            sender_avatar: this.props.user.data.avatar,
            receiver_fname: recipient.fname,
            receiver_lname: recipient.lname,
            sender_fname: this.props.user.data.firstname,
            sender_lname: this.props.user.data.lastname,
            most_recent_msg: '',
            thread_code: null,
            timestamp: (new Date()).getTime() 
        };
        //this.setState({threads: [...this.state.threads, thread], currentThread: thread});

        this.props.setCurrentThread(thread);
        this.props.addToThreads(thread);
    }

    handleSelectedThread = thread => {
        this.setState({currentThread: thread});
        this.props.setCurrentThread(thread);
        this.getMessages(thread.thread_code);
    }

    handleSendMessage = e => {
        e.preventDefault();
        const message = this.state.message
        const thread = this.props.inbox.currentThread;
        console.log(thread);
        const form = {
            message,
            sender: this.props.user.data.id,
            receiver: this.props.user.data.id == +thread.receiver_id? +thread.sender_id: +thread.receiver_id,
        };
        console.log(form, this.props.user.data.id, thread);
        if(form.sender !== form.receiver) {
            this.props.sendAMessage(form, this.props.user.authToken);
            this.setState({message: ''});
        }
    }

    render() {
        const { classes } = this.props;
        const m = Utility.isset(this.props.inbox.messages)? this.props.inbox.messages: {};
        let msg = [];
        for(let i in m) {
            let mg = m[i];
            msg.push(mg);
        }
        const messageList = msg.filter( (message, i) => {
            //console.log(message, this.props.inbox.currentThread)
            const cthread = this.props.inbox.currentThread;
            const sameCode = Utility.isset(message.thread_code) && message.thread_code === cthread.thread_code;
            const sameUsers = message.sender === cthread.sender_id && message.receiver === cthread.receiver_id;
            return sameCode || sameUsers;
        });
        let threadList = [];
        const inboxThreads = Utility.isset(this.props.inbox.threads)? this.props.inbox.threads: {};
        for(let i in inboxThreads) {
            let t = inboxThreads[i];
            threadList.push(t);
        }
        return (
            <KPaper style={{margin: 20}} className={classes.inboxContainer}>
            <KPaper className={classes.inboxHeader}>
                <Grid container spacing={8}>
                    <Grid item md="4">
                        <div className={classes.controlsRow}>
                            <Typography style={{fontSize: 20, marginBottom: 0,}}>
                                Messages
                            </Typography>
                            <div className={classes.controls}>
                                <RecentlyAddedUsersDialog 
                                    handleChange={this.handleChange} 
                                    followings={this.props.inbox.followings}
                                    addThread={this.addThread}
                                    getMessages={this.getMessages} />
                                <IconButton>
                                    <SettingsIcon />
                                </IconButton>
                            </div>
                        </div>
                    </Grid>
                    <Grid item md="8">
                        {this.props.inbox.currentThread.receiver_fname &&
                        <ListItem className={classes.item}>
                            <Avatar alt={`${this.props.inbox.currentThread.receiver_fname} ${this.props.inbox.currentThread.receiver_lname}`} src={this.props.user.data.id == this.props.inbox.currentThread.sender_id? Utility.getAvatar(this.props.inbox.currentThread.receiver_avatar): Utility.getAvatar(this.props.inbox.currentThread.sender_avatar)}/>
                            <ListItemText primary={`${this.props.inbox.currentThread.receiver_fname} ${this.props.inbox.currentThread.receiver_lname}`} 
                                secondary={
                                    <React.Fragment>
                                        <Typography color="textSecondary" className={classes.message}>
                                            {false && Utility.isset(this.props.inbox.currentThread.most_recent_msg)? this.props.inbox.currentThread.most_recent_msg.message: ''}
                                        </Typography>
                                    </React.Fragment>
                                } 
                            />
                        </ListItem>}
                    </Grid>
                </Grid>
            </KPaper>
                <Grid container spacing={8}>
                    <Grid item md="4">
                        <InboxSenderList threads={threadList} 
                        getMessages={this.getMessages} 
                        handleSelectedThread={this.handleSelectedThread}
                        user={this.props.user} />
                    </Grid>
                    <Grid item md="8">
                        <InboxMessageThread 
                            messages={messageList} 
                            message={this.state.message} 
                            handleChange={this.handleChange} 
                            sendMessage={this.handleSendMessage}
                            user={this.props.user} />
                    </Grid>
                </Grid>
                
            </KPaper>
        )
    }
}

const mapStateToProps = state => {
    return {
        inbox: state.inbox,
        user: state.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getUserFollowing: token => {
            dispatch(inboxActions.handleGetFollowings(token))
        },
        sendAMessage: (form, token) => {
            dispatch(inboxActions.sendMessage(form, token))
        },
        getThreadMessages: (threadcode, token) => {
            dispatch(inboxActions.getThreadMessages(threadcode, token));
        },
        setCurrentThread: thread => {
            dispatch(inboxActions.setCurrentThread(thread));
        },
        addToThreads: thread => {
            dispatch(inboxActions.addThread(thread));
        },
        getUserThreads: token => {
            dispatch(inboxActions.getUserThreads(token));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(InboxComponent));