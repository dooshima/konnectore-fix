import React from 'react';
import { Typography } from '@material-ui/core';
import ContestEntryItemCard from '../widgets/ContestEntryItemCard';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    list: {
        display: 'flex',
        flexWrap: 'wrap',
    }
});

const SubmissionTimeline = props => {
    const { classes } = props;
    if(props.entries < 1) {
        return <Typography color="textSecondary" style={{textAlign: 'center', fontSize: 15, flex: 1, margin: '3em 0'}}>Entries not found</Typography>
    }
    return (
        <div className={classes.list}>
            {
                props.entries.map( entry => {
                    entry['postType'] = 'entry';
                    entry['text'] = entry.description;
                    entry['coverImage'] = entry.src;
                    return <ContestEntryItemCard entry={entry} {...props} />;
                })
            }
        </div>
    )
};

export default withStyles(styles)(SubmissionTimeline);