import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PostStatsWidget from './PostStatsWidget';
import CommentListWidget from '../comments/CommentListWidget';
import HashtagParser from './HashtagParser';

const styles = theme => ({
    postText: {
        fontSize: theme.typography.fontSize * 1.2,
    }
});

const PostActivityContent = (props) => {
    const comments = [...Array(3).keys()];
    const { classes, post } = props;
    return (
        <React.Fragment>
            <Typography color="textSecondary" className={classes.postText}>
                <HashtagParser>{post.text}</HashtagParser>
                </Typography>
                <PostStatsWidget post={post} {...props}/>
                <CommentListWidget post={post} />
        </React.Fragment>
    )
}

export default withStyles(styles)(PostActivityContent);