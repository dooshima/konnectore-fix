import React from 'react';
import PostCommentItem from "./PostCommentItem";
import Utility from '../../services/Utility';
import { Typography } from '@material-ui/core';

const CommentListWidget = ({post}) => {
    
    const commentIds = Utility.isset(post.commentIds)? post.commentIds: [];
    const dcomments = Utility.isset(post.comments)? post.comments: {};
    let comments = [];

    for(let id of commentIds) {
        let item = dcomments.find( comment => comment.id === id );
        if(Utility.isset(item)) {
            comments.push(item)
        }
    }

    if(comments.length < 1) {
        return <Typography color="textSecondary" style={{fontSize: 12, textAlign: "center", marginTop: 20,}}>Be  the first to comment on this post.</Typography>
    }
    return (
        <React.Fragment>
        {
            comments.map( (item, i) => <PostCommentItem item={item} user={post.user} /> )
        }
        </React.Fragment>
    );
}

export default CommentListWidget;