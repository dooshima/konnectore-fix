import React from 'react';
import PostCommentItem from "./PostCommentItem";

const CommentListWidget = ({comments}) => {
    return (
        <React.Fragment>
        {
            comments.map( (item, i) => <PostCommentItem item={item} /> )
        }
        </React.Fragment>
    );
}

export default CommentListWidget;