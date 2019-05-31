import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import { IconButton, withStyles, Typography, Icon, Link, Button } from '@material-ui/core';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import ShareIcon from '@material-ui/icons/Share';
import StarIcon from '@material-ui/icons/Star';
import Utility from '../../services/Utility';
import VoteAmountDialog from '../form/VoteAmountDialog';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const styles = theme => ({
    iconButton: {
        padding: 0,
        margin: 0,
        marginRight: 5,
    },
    icon: {
        fontSize: '0.9em',
    },
    statItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    statsText: {
        fontSize: theme.typography.fontSize * 1.2,
    },
    row: {
        display: 'flex',
        justifyContent: 'flex-start',
        '& > p': {
            marginRight: '2.5em',
        },
        borderBottom: '1px solid #efefef',
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 22,
    },
    starIcon: {
        color: '#aaa',
        fontSize: 22,
    },
    starIconLiked: {
        color: '#fff',
        fontSize: 22,
    },
    button: {
        paddingLeft: '1.5em',
        paddingRight: '1.5em',
        fontSize: '1.1em',
        color: '#0000008a',
    },
    liked: {
        backgroundColor: '#ffc107',
        color: '#fff',
        paddingLeft: '1.5em',
        paddingRight: '1.5em',
        fontSize: '1.1em',
        '&:hover': {
            backgroundColor: '#ffc107',
            color: '#fff',
            paddingLeft: '1.5em',
            paddingRight: '1.5em',
        }
    },
    like: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0',
        padding: '1.3em 0',
        borderBottom: '1px solid #efefef',
    },
    postedIn: {
        textAlign: 'right',
    },
    postedWhere: {
        color: theme.palette.primary.main,
        fontSize: theme.typography.fontSize * 1.1,
    }

});

class PostStatsWidget extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
        }
    }

    toggleDialog = open => {
        this.setState({open: open});
    }

    componentDidMount() {
        loadCSS(
          'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
          document.querySelector('#insertion-point-jss'),
        );
    }

    render () { 
        const {classes, likes, views, id, item} = this.props;
        const user = Utility.isset(item.user)?item.user: {};
        const album = item.type === 'video'? 'Videos': (item.type === 'image'? 'Images': 'Posts');
        const metadata = {
            //cart_id: 
            user_id: this.props.user.data.id,
            payment_for: 1,
            post_id: item.id,
            contest_edition_id: item.contest_edition_id,
            contest_stage_id: item.contest_stage_id,
        }
    return (
        <>
        <div className={classes.row}>
            <p className={classes.statItem}>
                <IconButton onClick={() => this.props.likePost(item)} className={classes.iconButton}>
                    <ThumbUpIcon className={classes.icon}/>
                </IconButton>
                <Typography color="textSecondary" className={classes.statsText}>{item.likes_count} Likes</Typography>
            </p>

            <p className={classes.statItem}>
                <IconButton className={classes.iconButton}>
                    <RemoveRedEyeIcon className={classes.icon}/>
                </IconButton>
                <Typography color="textSecondary" className={classes.statsText}>{item.views_count} Views</Typography>
            </p>

            <p className={classes.statItem}>
                <IconButton className={classes.iconButton}>
                    <Icon className={classNames(classes.icon, 'far fa-comment-dots')} />
                </IconButton>
                <Typography color="textSecondary" className={classes.statsText}>{item.comments_count} Comments</Typography>
            </p>

            <p className={classes.statItem}>
                <Link className={classes.link} onClick={() => this.props.sharePost(item)}>
                    <IconButton className={classes.iconButton}>
                        <ShareIcon className={classes.icon}/>
                    </IconButton>
                </Link>
                <Link className={classes.link} onClick={() => this.props.sharePost(item)}>
                <Typography color="textSecondary" className={classes.statsText}>Share</Typography>
                </Link>
            </p>
            
        </div>
        <div className={classes.like}>
            {item.voting_type !== 'vote' && item.liked < 1 && <Button variant="contained" size="small" onClick={() => this.props.likePost(item)} className={classes.button}>
                <StarIcon className={classNames(classes.leftIcon, classes.iconSmall, classes.starIcon)} />
                {item.likes_count}
            </Button>}
            {item.voting_type !== 'vote' && item.liked > 0 && <Button variant="contained" size="small" onClick1={this.props.unlikePost} className={classes.liked}>
                <StarIcon className={classNames(classes.leftIcon, classes.iconSmall, classes.starIconLiked)} />
                {item.likes_count} 
            </Button>}
            {item.postType === 'entry' && item.voting_type === 'vote' && <Button variant="contained" size="small" onClick={() => this.toggleDialog(true)} className={classes.liked}>
                <StarIcon className={classNames(classes.leftIcon, classes.iconSmall, classes.starIconLiked)} />
                {item.votes_count} Vote
            </Button>}

            <div className={classes.postedIn}>
                <Typography color="textSecondary">Posted in</Typography>
                <Typography color="textPrimary" className={classes.postedWhere}>{user.firstname} {user.lastname}'s {album}</Typography>
            </div>

            <VoteAmountDialog item={item} user={this.props.user.data} metadata={metadata} open={this.state.open} toggleDialog={this.toggleDialog} />
        </div>
        </>
    )
    }
}

PostStatsWidget.propType = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PostStatsWidget);