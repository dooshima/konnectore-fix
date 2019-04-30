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
import StageListWidget from './StageListWidget';
import ContestSubmissionComponent from './Submission/ContestSubmissionComponent';
import Utility from '../../services/Utility';

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
        this.props.getContest(this.props.match.params.slug, this.props.user.id);
    }

    static getDerivedStateFromProps(state) {
        return state.feed? {feed: state.feed}: {feed: 'feed'};
    }

    toggleDialog = item => {
        this.setState({item: item, open: !this.state.open})
    }

    filterPosts(posts) {
        const filter = this.state.filter;
        if(['image', 'news', 'video'].includes(filter)) {
            let p = [];
            for(let i in posts) {
                let post = posts[i];
                if(post.type === filter || post.content_type == filter)
                    p.push(post);
            }
            return p;
        } else
            return posts;
    }

    handleFollowContest = () => {
        this.props.followContest({contest_id: this.props.contest.id}, this.props.accessToken);
    }
    
    render() {
        const {match, user, contest} = this.props;
        let recentPosts = [];
        const fullName = user.data.firstname + ' ' + user.data.lastname;
        
        let count = 1;
        const cPosts = this.filterPosts(contest.posts);
        for(let i in cPosts) {
            let item = cPosts[i];
            recentPosts.push(item);
            if(count >= 20) 
                break;
            count++;
        }

        const stages = Utility.isset(contest) && Utility.isset(contest.stages) ? contest.stages: [];
        const entries = Utility.isset(contest) && Utility.isset(contest.stage_posts) ? contest.stage_posts: [];
        const funcs = {
            filter: this.state.filter,
            posts: cPosts,
            stages,
            entries,
        }

        return (
            <div style={{marginTop: 30, marginLeft: 20, marginRight: 20}}>
                <Grid container spacing={0}>
                    <Grid item xs={8}>
                    <Paper style={{boxShadow: 'none', textAlign: "left", paddingLeft: 10, paddingRight: 10}}>
                        <ContestHeader path={match.path} {...this.props} setFilter={this.setFilter.bind(this)} handleFollowContest={this.handleFollowContest} />
                        <Switch>
                            <PropsRoute exact path={`${match.path}`} component={ContestFeedComponent} {...this.props} {...funcs} />
                            <Route exact path={`${match.path}/guide`} component={ContestGuideComponent} />
                            <Route exact path={`${match.path}/entry`} component={AddEntryComponent} />
                            <PropsRoute exact path={`${match.path}/submissions`} component={ContestSubmissionComponent} {...this.props} {...funcs} />
                        </Switch>
                    </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <div style={{marginLeft: 10}}>
                            <PlaceComponents spacer={20}>
                                <PropsRoute exact path={`${match.path}/`} component={PageInfoWidget} />
                                <Route exact path={`${match.path}`} component={TopContestantsWidget} />
                                <Route exact path={`${match.path}/entry`} component={StageListWidget} />
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
        contest: state.contest.data,
    }
}

const mapDispatchToProps = dispatch => {
    return {
      showDialog: open => {
        dispatch(dialogActions.showDialog(open));
      },
      getContest: (slug, user_id) => {
          dispatch(contestActions.getContest(slug, user_id));
      },
      followContest: (form, token) => {
          dispatch(contestActions.followContest(form, token));
      }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContestController);



