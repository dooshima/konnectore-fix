import React from 'react';
import { Typography } from '@material-ui/core';
import ImagePostDetailItem from '../../components/Dialogs/ImagePostDetailItem';
import TextPostDetailItem from '../../components/Dialogs/TextPostDetailItem';
import VideoPostDetailItem from '../../components/Dialogs/VideoPostDetailItem';

const PostDetailItemSelector = ({item, ...props}) => {
    if(item.type === 'image') {
        return <ImagePostDetailItem item={item} {...props} />
    } else if(item.type === 'text') {
        return <TextPostDetailItem item={item} {...props}/>
    } else if(item.type === 'video') {
        return <VideoPostDetailItem item={item} {...props}/>
    } else {
        return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><Typography>Loading ...</Typography></div>
    }
}

export default PostDetailItemSelector;