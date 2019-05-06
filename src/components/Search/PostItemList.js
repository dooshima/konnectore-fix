import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Paper } from '@material-ui/core';
import PostItem from './PostItem';
import SectionListHeader from './../SectionListHeader';
import Utility from '../../services/Utility';

const styles = theme => ({
    wrapper: {      
    }
});

const PostItemList = ({ list, classes }) => {
    const videos = list.filter( item => {
        if(Utility.isset(item)) {
            return item.type === 'text';
        } else {
            return false;
        }
    });
    const vList = videos.map( (video, i) => {
        return <PostItem key={i} item={video} />
    });

    return (
        <Paper style={{marginTop: 30}}>
        <div className={classes.wrapper}>
            <SectionListHeader title="Posts" />
            {vList}
        </div>
        </Paper>
    )
};

PostItemList.propTypes = {
    list: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PostItemList);