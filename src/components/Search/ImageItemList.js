import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Paper } from '@material-ui/core';
import ImageItem from './ImageItem';
import SectionListHeader from './../SectionListHeader';
import Utility from '../../services/Utility';

const styles = theme => ({
    wrapper: {      
    }
});

const ImageItemList = ({ list, classes }) => {
    const videos = list.filter( item => {
        if(Utility.isset(item)) {
            return item.type === 'image';
        } else {
            return false;
        }
    });
    
    const vList = videos.map( (video, i) => {
        return <ImageItem key={i} item={video} />
    });

    return (
        <Paper style={{marginTop: 30}}>
        <div className={classes.wrapper}>
            <SectionListHeader title="Images" />
            {vList}
        </div>
        </Paper>
    )
};

ImageItemList.propTypes = {
    list: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ImageItemList);