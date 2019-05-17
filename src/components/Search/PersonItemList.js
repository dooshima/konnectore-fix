import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Paper } from '@material-ui/core';
import SectionListHeader from './../SectionListHeader';
import Utility from '../../services/Utility';
import ContestEntryItemCard from './../../components/Contest/widgets/ContestEntryItemCard';
import PersonItemCard from '../../widgets/friends/PersonItemCard';


const styles = theme => ({
    wrapper: {      
    }
});

const PersonItemList = ({ people, classes }) => {
    const persons = [];
    for(let i in people) {
        let item = people[i];
        if(Utility.isset(item)) {
            persons.push(item);
        }
    };
    const vList = persons.map( (person, i) => {
        return <PersonItemCard key={i} person={person} />
    });

    return (
        <Paper style={{marginTop: 30}}>
        <div className={classes.wrapper}>
            <SectionListHeader title="People" />
            {vList}
        </div>
        </Paper>
    )
};

PersonItemList.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PersonItemList);