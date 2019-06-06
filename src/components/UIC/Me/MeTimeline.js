import React from 'react';
import PostListWidget from '../../../widgets/posts/PostListWidget';

const MeTimeline = props => {
    console.log(props)
    return (
        <PostListWidget {...props} />
    )
}

export default MeTimeline;