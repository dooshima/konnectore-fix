import React from 'react';
import { NavLink as Link, Route } from 'react-router-dom';
import { Grid, Paper } from '@material-ui/core';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import ContestHeader from './ContestHeader';
import PropsRoute from '../Nav/PropsRoute';
import PlaceComponents from '../UIC/PlaceComponents';
import AwardsAndBadges from '../UIC/Me/AwardsAndBadges';
import dialogActions from '../../reducers/dialog/actions';
import ContestFeedComponent from './ContestFeedComponent';
import ContestGuideComponent from './ContestGuideComponent';
import PageInfoWidget from './PageInfoWidget';
import RecentContestant from './RecentContestantsWidget';
import RecentContestantsWidget from './RecentContestantsWidget';
import TopContestantsWidget from './TopContestantsWidget';
import AvailablePositionsWidget from './AvailablePositionsWidget';
import MyContestsWidget from './MyContestsWidget';
import AddEntryComponent from './AddEntryComponent';
import contestActions from '../../reducers/contest/actions';

class ContestController extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: 'feed',
            posts: [],
            item: {},
            open: false,
        }
    }

    componentDidMount() {
        this.props.getContest(this.props.match.params.slug);
    }

    static getDerivedStateFromProps(state) {
        return state.feed? {feed: state.feed}: {feed: 'feed'};
    }

    toggleDialog = item => {
        this.setState({item: item, open: !this.state.open})
    }

    filterPosts(posts) {
        const filter = this.state.filter;
        if(['image', 'text', 'video'].includes(filter)) {
            let p = [];
            for(let i in posts) {
                let post = posts[i];
                if(post.type === filter)
                    p.push(post);
            }
            return p;
        } else
            return posts;
    }
    render() {
        const {match, user} = this.props;
        let recentPosts = [];
        const fullName = user.data.firstname + ' ' + user.data.lastname;

        console.log(match.params.slug)
        let count = 1;
        const userPosts = this.filterPosts(user.posts.byId);
        for(let i in userPosts) {
            let item = userPosts[i];
            recentPosts.push(item);
            if(count >= 20) 
                break;
            count++;
        }

        return (
            <div style={{marginTop: 30, marginLeft: 20, marginRight: 20}}>
                <Grid container spacing={0}>
                    <Grid item xs={8}>
                    <Paper style={{boxShadow: 'none', textAlign: "left", paddingLeft: 10, paddingRight: 10}}>
                        <ContestHeader path={match.path} {...this.props} setFilter={this.setFilter.bind(this)} />
                        <Switch>
                            <PropsRoute exact path={`${match.path}`} component={ContestFeedComponent} />
                            <Route exact path={`${match.path}/guide`} component={ContestGuideComponent} />
                            <Route exact path={`${match.path}/entry`} component={AddEntryComponent} />
                        </Switch>
                    </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <div style={{marginLeft: 10}}>
                            <PlaceComponents spacer={20}>
                                <PropsRoute exact path={`${match.path}/`} component={PageInfoWidget} />
                                <Route exact path={`${match.path}`} component={TopContestantsWidget} />
                                <PropsRoute exact path={`${match.path}/guide`} component={AvailablePositionsWidget} url={`${match.url}`} />
                                <Route exact path={`${match.path}/guide`} component={RecentContestantsWidget} />
                                <Route exact path={`${match.path}/entry`} component={TopContestantsWidget} />
                                <Route exact path={`${match.path}/submissions`} component={TopContestantsWidget} />
                                <Route path={`${match.path}/`} component={MyContestsWidget} />
                            </PlaceComponents>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }

    setFilter = filter => {
        this.setState({filter: filter});
        console.log(filter)
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        accessToken: state.user.authToken,
    }
}

const mapDispatchToProps = dispatch => {
    return {
      showDialog: open => {
        dispatch(dialogActions.showDialog(open));
      },
      getContest: slug => {
          dispatch(contestActions.getContest(slug));
      }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContestController);



