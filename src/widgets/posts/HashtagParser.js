import React from 'react';
import ReactHashtag from "react-hashtag";
import { withStyles} from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

const styles = theme => ({
    hashtag: {
        padding: theme.spacing.unit * 0.5,
        backgroundColor: '#efefef',
        cursor: 'pointer',
        borderRadius: 6,
    }
});

const HashtagParser = (props) => {
    const { classes } = props;
    if(props.children) {
    return (
        <ReactHashtag
            renderHashtag={(hashtagValue) => (
                <span onClick={() => props.history.push('/search?q=' + hashtagValue)} className={classes.hashtag}>{hashtagValue}</span>
            )}
        >
            {props.children}
        </ReactHashtag>
    ) } else {
        return null;
    }
    
};

export default withRouter(withStyles(styles)(HashtagParser));