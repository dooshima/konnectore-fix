import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Paper } from '@material-ui/core';
import VideoItem from './VideoItem';
import SectionListHeader from './../SectionListHeader';
import KPaper from '../UIC/KPaper';
import Utility from '../../services/Utility';

const styles = theme => ({
    wrapper: {      
    }
});

const VideoItemList = ({ list, classes }) => {
    const videos = list.filter( item => {
        if(Utility.isset(item)) {
            return item.type === 'video';
        } else {
            return false;
        }
    });
    const vList = videos.map( (video, i) => {
        return <VideoItem key={i} item={video} />
    });

    return (
        <KPaper style={{marginTop: 30}}>
        <div className={classes.wrapper}>
            <SectionListHeader title="Videos" />
            {vList}
        </div>
        </KPaper>
    )
};

VideoItemList.propTypes = {
    list: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(VideoItemList);