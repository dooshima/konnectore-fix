import React from 'react';
import KCard from '../../UIC/KCard';
import { CardContent } from '@material-ui/core';
import Utility from '../../../services/Utility';
import KPaper from '../../UIC/KPaper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    list: {
        display: 'flex',
        flexWrap: 'wrap',
    }
});

const ContestPostTimeline = ({classes, posts}) => {
    
    return (
        <KPaper className={classes.list}>
            { posts.map( post => <ContestPostTimelineItem post={post} /> ) }
        </KPaper>
    )
}

export default withStyles(styles)(ContestPostTimeline);

const ContestPostTimelineItem = withStyles(styles)(({classes, post}) => {
    return (
        <KCard classes={classes.postItem}>
            <CardContent>
                {post.type === 'image' && <img src={Utility.getPath(post.src)} />}
                {post.type === 'video' && <video src={Utility.getPath(post.src)} controls autoPlay={false} />}
            </CardContent>
        </KCard>
    )
});

