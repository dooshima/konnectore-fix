import React from 'react';
import { Paper } from '@material-ui/core';
import MasonryGrid from './../MasonryGrid/MasonryGrid';
import ImageCard from '../Posts/ImageCard/ImageCard';
import TextCard from '../Posts/TextCard/TextCard';
import VideoCard from '../Posts/VideoCard/VideoCard';
import { withRouter } from  'react-router-dom';

const FriendTimeline = props => {
    const { match, currentUser } = props;
    console.log(currentUser)
    const postList = [];
    if(currentUser && currentUser.posts && currentUser.posts.data) {
        const data = currentUser.posts.data;
        for(let i in data) {
            let item = data[i];
            postList.push(item);
        }
    }

    const posts = props.filterPosts(postList, props.filter);
    
    return (
        <Paper elevation={0} style={{marginTop: 30, overflow: 'hidden'}}>
            <MasonryGrid>
            {
            posts.map( (item, i) => {
                let counter = Math.ceil(Math.random() * 100);
                let chooser = counter % 2 === 0? true: false;
                if(item.type === 'image'){
                return <ImageCard key={i} index={i} item={item} {...props} />;
                } else if (item.type === 'text') {
                return <TextCard key={i} index={i} item={item} {...props} />;
                } else {
                return <VideoCard key={i} item={item} {...props} />
                }
            })
            }
            </MasonryGrid>
        </Paper>
    )
}

export default withRouter(FriendTimeline);