import React from 'react';
import { Paper } from '@material-ui/core';
import MasonryGrid from './../MasonryGrid/MasonryGrid';
import ImageCard from '../Posts/ImageCard/ImageCard';
import TextCard from '../Posts/TextCard/TextCard';
import VideoCard from '../Posts/VideoCard/VideoCard';

const MeTimeline = props => {
    return (
        <Paper elevation={0} style={{marginTop: 30}}>
            <MasonryGrid>
            {
            props.recentPosts.map( (item, i) => {
                let counter = Math.ceil(Math.random() * 100);
                let chooser = counter % 2 === 0? true: false;
                if(item.type === 'image'){
                return <ImageCard key={i} index={i} item={item} />;
                } else if (item.type === 'text') {
                return <TextCard key={i} index={i} item={item} />;
                } else {
                return <VideoCard key={i} item={item} />
                }
            })
            }
            </MasonryGrid>
        </Paper>
    )
}

export default MeTimeline;