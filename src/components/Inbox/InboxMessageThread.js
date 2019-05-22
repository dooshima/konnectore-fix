import React from 'react';
import PropTypes from 'prop-types';
import { List, ListSubheader, ListItem, ListItemText, Avatar, Typography, Toolbar, FormControl, Input, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import KPaper from '../UIC/KPaper';
import KCard from '../UIC/KCard';
import ReactTimeAgo from 'react-time-ago/commonjs/ReactTimeAgo';
import Utility from '../../services/Utility';

const styles = theme => ({
    subheader: {
        textTransform: 'normal',
        overflowY: 'scroll',
        maxHeight: '100%',
    },
    message: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    date: {
        textAlign: 'right',
    },
    item: {
        borderTop: 'none',
    },
    userItem: {
        justifyContent: 'flex-end',
    },
    friendCard: {
        width: 'auto',
        margin: 0,
        display: 'flex',
        padding: 0,
        boxShadow: '-1px 2px 8px -4px rgba(165,165,165,1)',
        marginBottom: 20,
        flexDirection: 'row',
        marginLeft: 20,
        padding: 20,
        backgroundColor: '#E7F2F1',
        borderRadius: 10,
    },
    userCard: {
        width: 'auto',
        margin: 0,
        display: 'flex',
        padding: 0,
        boxShadow: '-1px 2px 8px -4px rgba(165,165,165,1)',
        marginBottom: 20,
        flexDirection: 'row',
        marginRight: 20,
        padding: 20,
        backgroundColor: '#E7F2F1',
        borderRadius: 10,
    },
    formControl: {
        width: '80%'
    },
    input: {
        background: '#f2f2f2',
        padding: '5px 20px',
        borderRadius: 20,
    },
    toolbar: {
        boxShadow: '-1px 2px 8px -4px rgba(165,165,165,1)',
    }
});

function InboxMessageThread(props) {
    const { classes, user } = props;
    // console.log(user)
    return (
        <KPaper>
            <List className={classes.subheader}>
            {
            props.messages.map( item => {
            return item.sender == user.data.id? <ListItem className={classes.userItem}>
            <KCard className={classes.userCard}>
                <ListItemText primary={`${item.fname} ${item.lname}`} 
                    secondary={
                        <React.Fragment>
                            <Typography color="textSecondary" className={classes.message}>
                                {item.message}
                            </Typography>
                            <Typography color="textSecondary" className={classes.date}><ReactTimeAgo date={new Date(item.timestamp? item.timestamp * 1000: (new Date()).getTime())} /></Typography>
                        </React.Fragment>
                    } 
                />
            </KCard>
            <Avatar alt={`${item.fname} ${item.lname}`} src={Utility.getAvatar(item.avatar)} />
        </ListItem>:<ListItem className={classes.item}>
                <Avatar alt={`${item.fname} ${item.lname}`} src={Utility.getAvatar(item.avatar)} />
                <KCard className={classes.friendCard}>
                    <ListItemText primary={`${item.fname} ${item.lname}`} 
                        secondary={
                            <React.Fragment>
                                <Typography color="textSecondary" className={classes.message}>
                                    {item.message}
                                </Typography>
                                <Typography color="textSecondary" className={classes.date}><ReactTimeAgo date={new Date(item.timestamp? item.timestamp * 1000: (new Date()).getTime())} /></Typography>
                            </React.Fragment>
                        } 
                    />
                </KCard>
            </ListItem>
            }
            )
            }
            </List>
            <Toolbar style={{flex: 1,}} className={classes.toolbar}>
                <form onSubmit={props.sendMessage} style={{flex: 1,}}>
                <FormControl className={classes.formControl}>
                    <Input 
                        disableUnderline={true}
                        placeholder="Type to chat"
                        className={classes.input}
                        value={props.message}
                        onChange={props.handleChange('message')}
                    />
                </FormControl>
                <Button onClick={props.sendMessage} color="primary" className={classes.button}>
                    send
                </Button>
                </form>
            </Toolbar>
        </KPaper>
)
    }

InboxMessageThread.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(InboxMessageThread);