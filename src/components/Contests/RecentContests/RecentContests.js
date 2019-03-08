import React from 'react'
import { withStyles } from '@material-ui/core';
import ContestListItem from './../ContestListItem/ContestListItem';

const styles = theme => ({

})
function RecentContests(props) {
    return (
        <div style={{display: 'flex'}}>
            {
                [
                {url: '/images/c1.png', title: 'Street Dance Contest'},
                {url: '/images/c2.png', title: 'Double Homicide Challenge'},
                {url: '/images/c3.png', title: 'The Sctage Contest'}
                ].map( (item, i) => {
                return (
                    <div style={{ marginLeft: `${i > 0? 20: 0}px`, flex: 1 }}>
                    <ContestListItem url={item.url} title={item.title}  />
                    </div>
                )
                })
            }
        </div>
    )
}

RecentContests.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(RecentContests);