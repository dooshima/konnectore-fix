import React from 'react';
import { NavLink as Link, Route } from 'react-router-dom';
import MeHeader from './MeHeader';
import { Grid, Paper } from '@material-ui/core';
import CompetitionSummaryCard from '../../Contests/CompetitionSummaryCard';
import { searchResults } from './../../assets/searchResults';
import MeTimeline from './MeTimeline';
import GrowYourNetwork from './GrowYourNetwork';
import AwardsAndBadges from './AwardsAndBadges';
import AccountInfoWidget from './AccountInfoWidget';
import EditPersonalInfoWidget from './EditPersonalInfoWidget';
import ManageYourAccountWidget from './ManageYourAccountWidget';
import PlaceComponents from '../PlaceComponents';
import EditProfile from './Profile/EditProfile';
import ManageAccount from './Profile/ManageAccount';
import { Switch } from 'react-router-dom';

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
                        <Switch>
                            <Route exact path={`${match.path}/account/edit`} component={EditProfile} />
                            <Route exact path={`${match.path}/account/manage`} component={ManageAccount} />
                            <Route path={`${match.path}`} render={props => <MeTimeline {...props} recentPosts={recentPosts} />} />
                        </Switch>
                    </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <div style={{marginLeft: 10}}>
                            <PlaceComponents spacer={20}>
                                <Route exact path={`${match.path}/`} component={AwardsAndBadges} />
                                <Route exact path={`${match.path}/`} component={AccountInfoWidget} />
                                <Route exact path={`${match.path}/account/edit`} component={EditPersonalInfoWidget} />
                                <Route exact path={`${match.path}/account/manage`} component={ManageYourAccountWidget} />
                            </PlaceComponents>
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



