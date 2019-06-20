import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Paper } from '@material-ui/core';
import SectionListHeader from './../SectionListHeader';
import Utility from '../../services/Utility';
import ContestEntryItemCard from './../../components/Contest/widgets/ContestEntryItemCard';


const styles = theme => ({
    searchListWrapper: {
        display: 'flex',
        flexWrap: 'wrap',  
    }
});

const ContestItemList = ({ contests, classes, ...rest }) => {
    const entries = [];
    for(let i in contests) {
        let item = contests[i];
        if(Utility.isset(item)) {
            entries.push(item);
        }
    };
    const vList = entries.map( (entry, i) => {
        return <ContestEntryItemCard key={i} entry={entry} {...rest} />
    });

    return (
        <Paper style={{marginTop: 30}} elevation={0}>
            <SectionListHeader title="Contest Entries" />
            <div className={classes.searchListWrapper}>
                {vList}
            </div>
        </Paper>
    )
};

ContestItemList.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ContestItemList);