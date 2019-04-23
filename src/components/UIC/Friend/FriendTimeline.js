import React from 'react';
import { Paper } from '@material-ui/core';
import MasonryGrid from './../MasonryGrid/MasonryGrid';
import ImageCard from '../Posts/ImageCard/ImageCard';
import TextCard from '../Posts/TextCard/TextCard';
import VideoCard from '../Posts/VideoCard/VideoCard';
import { withRouter } from  'react-router-dom';
import PostListWidget from '../../../widgets/posts/PostListWidget';

const FriendTimeline = props => {
    const { match, currentUser, user, allPosts } = props;
    
    const postList = [];
    
    if(currentUser && currentUser.posts && currentUser.posts.allIds && allPosts ) {
        const data = currentUser.posts.allIds;
        for(let i of data) {
            let item = allPosts[i];
            if(item)
                postList.push(item);
        }
    }
    
    const posts = props.filterPosts(postList, props.filter);

    return (
        <PostListWidget {...props} posts={posts} />
    )
}

export default withRouter(FriendTimeline);