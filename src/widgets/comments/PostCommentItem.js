import React from 'react';
import { Avatar, Typography, withStyles, IconButton, Button } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import Utility from '../../services/Utility';

const styles = theme => ({
    row: {
        display: 'flex',
        flex: 1,
        alignItems: 'flex-start',
        margin: '1em 0',
    },
    comment: {
        flexGrow: 1,
        backgroundColor: '#e5f2f1',
        borderRadius: 12,
        padding: theme.spacing.unit * 1.6,
    },
    avatar: {
        width: 35,
        height: 35,
        marginRight: theme.spacing.unit * 2,
    },
    author: {
        fontSize: theme.typography.fontSize * 1.1,
        marginBottom: theme.spacing.unit * .8,
    },
    icon: {
        fontSize: '0.9em',
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    statsText: {
        fontSize: theme.typography.fontSize * 1.2,
    },
    iconButton: {
        padding: 0,
        margin: 0,
        marginRight: 5,
    },
    controls: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: theme.spacing.unit * 1.2,
    },
    reply: {
        color: '#00a695',
        textTransform: 'capitalize',
        fontSize: 13,
    }
})
class PostCommentItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes, item, user} = this.props;
        return (
                <div class={classes.row}>
                    <Avatar src={Utility.getAvatar(user.avatar)} className={classes.avatar} />
                    <div className={classes.comment}>
                        <Typography className={classes.author}>{user.firstname} {user.lastname}</Typography>
                        <Typography color="textSecondary">
                            {item.comment}
                        </Typography>
                        <div className={classes.controls}>
                            <div className={classes.actions}>
                                
                                <Button>
                                    <Typography className={classes.reply}>Reply</Typography>
                                </Button>
                                
                            </div>
                            <Typography color="textSecondary">30 mins ago</Typography>
                        </div>
                    </div>
                </div>
            )
    }
}

export default withStyles(styles)(PostCommentItem);

/**
 * <IconButton className={classes.iconButton}>
                                    <StarIcon className={classes.icon}/>
                                </IconButton>
                                <Typography color="textSecondary" className={classes.statsText}>17</Typography>
 */