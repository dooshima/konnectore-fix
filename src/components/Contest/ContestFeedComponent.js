import React from 'react';
import { Typography } from '@material-ui/core';
import ContestFeedItem from './widgets/ContestFeedItem';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import KPaper from '../UIC/KPaper';
import ContestFeedItemCard from './widgets/ContestFeedItemCard';
import Utility from '../../services/Utility';
import ContestNewsTimeline from './widgets/ContestNewsTimeline';
import ContestPostTimeline from './widgets/ContestPostTimeline';

const styles = theme => ({
    sectionLabel: {
        textTransform: 'uppercase',
        color: '#0000008a',
        textAlign: 'center',
        margin: '3em',
        borderBottom: '1px solid #efefef',
        paddingBottom: theme.spacing.unit * 1,
    }
});

class ContestFeedComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    showEdition = () => {

    }

    render() {
        const { classes, contest, filter, posts } = this.props;
        let editions = [];
        if(Utility.isset(contest) && Utility.isset(contest.editions)) {
            for(let edition of contest.editions) {
                if(Utility.isset(edition) && edition.id !== 4) {
                    editions.push(edition);
                }
            }
        }
        if(['news', 'image', 'video'].includes(filter)) {
            switch(filter) {
                case 'news':
                    return <ContestNewsTimeline posts={posts} />;
                case 'image': case 'video':
                    return <ContestPostTimeline posts={posts} />;
                default:
                    return <ContestPostTimeline posts={posts} />;
            }
        } else {
            return (
                <div>
                    <Typography className={classes.sectionLabel}>Starting soon</Typography>
                    {contest && contest.editions && <ContestFeedItem edition={contest.editions[contest.editions.length - 1]} />}
                    <Typography className={classes.sectionLabel}>Past Editions</Typography>
                    <KPaper style={{padding: 10,}}>
                        {
                        editions.map(edition => <ContestFeedItemCard edition={edition} />)
                        }
                    </KPaper>
                </div>
            )
        }
    }

}

const mapStateToProps = state => {
    return {
        contest: state.contest.data,
    }
}

export default connect(mapStateToProps, {})(withStyles(styles)(ContestFeedComponent));