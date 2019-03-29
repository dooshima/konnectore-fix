import React from 'react';
import { NavLink as Link, Route } from 'react-router-dom';
import MeHeader from './MeHeader';
import { Grid, Paper } from '@material-ui/core';
import CompetitionSummaryCard from '../../Contests/CompetitionSummaryCard';
import { searchResults } from './../../assets/searchResults';
import MeTimeline from './MeTimeline';
import GrowYourNetwork from './GrowYourNetwork';
import AwardsAndBadges from './AwardsAndBadges';

class MeController extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: 'feed',
        }
    }

    static getDerivedStateFromProps(state) {
        return state.feed? {feed: state.feed}: {feed: 'feed'};

    }
    render() {
        const {match} = this.props;
        let recentPosts = [];

        for(let i in searchResults.data.posts.byId) {
        let item = searchResults.data.posts.byId[i];
        recentPosts.push(item);
        }

        return (
            <div style={{marginTop: 30, marginLeft: 20, marginRight: 20}}>
                <Grid container spacing={0}>
                    <Grid item xs={8}>
                    <Paper style={{boxShadow: 'none', textAlign: "left", paddingLeft: 10, paddingRight: 10}}>
                        <MeHeader path={match.path} {...this.props} setFilter={this.setFilter.bind(this)} />
                        <Route exact path={`${match.path}/:filter`} render={props => <MeTimeline {...props} recentPosts={recentPosts} />} />
                        <Route exact path={`${match.path}/account/:action`} component={EditProfile} />
                    </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <div style={{marginLeft: 10}}>
                            <AwardsAndBadges />
                            <GrowYourNetwork />
                            <Route exact path={`${match.path}/account/:action`} component={EditProfileMenu} />
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }

    setFilter = filter => {
        this.setState({filter: filter});
    }
}

export default MeController;

function MeTimeline2({match}) {
    return (
        <div>
            <h4>This is the My Time line. With {match.params.filter} selected</h4>
        </div>
    )
}

function EditProfile({match}) {
    return (
        <div>
            <h4>
                Edit profile form {match.url}, {JSON.stringify(match.params)} 
            </h4>
        </div>
    )
}

function EditProfileMenu(props) {
    return (
        <div>
            <h4>Edit Information</h4>
            <ul>
                <li>
                    Link One
                </li>
            </ul>
        </div>
    )
}



