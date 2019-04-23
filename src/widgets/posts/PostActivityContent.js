import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PostStatsWidget from './PostStatsWidget';
import CommentListWidget from '../comments/CommentListWidget';

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
                {post.text}
                </Typography>
                <PostStatsWidget post={post} {...props}/>
                <CommentListWidget comments={comments} />
        </React.Fragment>
    )
}

export default withStyles(styles)(PostActivityContent);