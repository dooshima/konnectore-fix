import React from 'react';
import ImagePostDetailItem from './ImagePostDetailItem';
import VideoPostDetailItem from './VideoPostDetailItem';
import { Typography } from '@material-ui/core';
import TextPostDetailItem from './TextPostDetailItem';

const PostDetailItem = ({item}) => {
    console.log(item);
    if(item.type === 'image') {
        return <ImagePostDetailItem item={item} />
    } else if(item.type === 'text') {
        return <TextPostDetailItem item={item} />
    } else if(item.type === 'video') {
        return <VideoPostDetailItem item={item} />
    } else {
        return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><Typography>Loading ...</Typography></div>
    }
}

export default PostDetailItem;