import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Paper } from '@material-ui/core';
import SectionListHeader from './../SectionListHeader';
import Utility from '../../services/Utility';
import ContestEntryItemCard from './../../components/Contest/widgets/ContestEntryItemCard';
import PersonItemCard from '../../widgets/friends/PersonItemCard';
import PersonSearchItem from '../../widgets/friends/PersonSearchItem';


const styles = theme => ({
    wrapper: {      
    }
});

const PersonItemList = (props) => {
    const { people, classes } = props;
    const persons = [];
    for(let i in people) {
        let item = people[i];
        if(Utility.isset(item)) {
            persons.push(item);
        }
    };
    const vList = persons.map( (person, i) => {
    return <><PersonSearchItem person={person} {...props} />{false && <PersonItemCard key={i} person={person} />}</>
    });

    return <>
        {persons.length > 0 && <Paper style={{marginTop: 30}} elevation={0}>
        <div className={classes.wrapper}>
            <SectionListHeader title="People" />
            {vList}
        </div>
        </Paper>}
    </>
};

PersonItemList.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PersonItemList);