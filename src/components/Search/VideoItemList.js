import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Paper } from '@material-ui/core';
import VideoItem from './VideoItem';
import SectionListHeader from './../SectionListHeader';

const styles = theme => ({
    wrapper: {      
    }
});

const VideoItemList = ({ list, classes }) => {
    const videos = list.filter( item => item.type === 'video');
    console.log(videos);
    const vList = videos.map( (video, i) => {
        return <VideoItem key={i} item={video} />
    });

    return (
        <Paper style={{marginTop: 30}}>
        <div className={classes.wrapper}>
            <SectionListHeader title="Videos" />
            {vList}
        </div>
        </Paper>
    )
};

VideoItemList.propTypes = {
    list: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(VideoItemList);