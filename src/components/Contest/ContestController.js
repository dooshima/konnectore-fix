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
            search: false,
        }
    }

    componentDidMount() {
        this.props.getContest(this.props.match.params.slug, this.props.user.data.id);
        const contest = this.props.contest;
        const currentEdition = Utility.isset(contest) && Utility.isset(contest.currentEdition)? contest.currentEdition: {};
        this.props.getTopContestants({contest_edition_id: currentEdition.id, contest_stage_id: 0}, this.props.accessToken);
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

    setSearchState = show => {
        this.setState({search: show});
    }
    
    render() {
        
        const {match, user, contest} = this.props;
        let recentPosts = [];
        const fullName = user.data.firstname + ' ' + user.data.lastname;
        
        let count = 1;
        let cPosts = [];
        if(this.state.search) {
            cPosts = Utility.isset(this.props.contest) && Utility.isset(this.props.contest.search)? this.props.contest.search.byId: [];
        } else {
            cPosts = this.filterPosts(contest.posts);
        }
        
        for(let i in cPosts) {
            let item = cPosts[i];
            item.author = item.user_id;
            recentPosts.push(item);
            if(count >= 20) 
                break;
            count++;
        }

        const stages = Utility.isset(contest) && Utility.isset(contest.stages) ? contest.stages: [];
        let entries = [];
        if(this.state.search) {
            entries = Utility.isset(this.props.search)? this.props.search.byId: [];
        } else {
            entries = Utility.isset(contest) && Utility.isset(contest.stage_posts) ? contest.stage_posts: [];
        }

        const funcs = {
            filter: this.state.filter,
            posts: cPosts,
            stages,
            entries,
            setSearchState: this.setSearchState,
        }

        return (
            <div style={{marginTop: 30, marginLeft: 20, marginRight: 20}}>
                <Grid container spacing={0}>
                    <Grid item md={8} xs={12} sm={12}>
                    <Paper style={{boxShadow: 'none', textAlign: "left", paddingLeft: 10, paddingRight: 10}}>
                        <ContestHeader path={match.path} {...this.props} setFilter={this.setFilter.bind(this)} handleFollowContest={this.handleFollowContest} />
                        <Switch>
                            <PropsRoute exact path={`${match.path}`} component={ContestFeedComponent} {...this.props} {...funcs} />
                            <Route exact path={`${match.path}/guide`} component={ContestGuideComponent} />
                            <PropsRoute exact path={`${match.path}/entry`} component={AddEntryComponent} submissionPath={`${match.path}/submissions`} />
                            <PropsRoute exact path={`${match.path}/submissions`} component={ContestSubmissionComponent} {...this.props} {...funcs} />
                        </Switch>
                    </Paper>
                    </Grid>
                    <Grid item md={4} xs={12} sm={12}>
                        <div style={{marginLeft: 10}}>
                            <PlaceComponents spacer={20}>
                                <PropsRoute exact path={`${match.path}/`} component={PageInfoWidget} />
                                <PropsRoute exact path={`${match.path}`} component={TopContestantsWidget} topContestants={this.props.topContestants} />
                                <Route exact path={`${match.path}/entry`} component={StageListWidget} />
                                <PropsRoute exact path={`${match.path}/guide`} component={AvailablePositionsWidget} url={`${match.url}`} {...this.props} />
                                <Route exact path={`${match.path}/guide`} component={RecentContestantsWidget} />
                                <PropsRoute exact path={`${match.path}/entry`} component={TopContestantsWidget} topContestants={this.props.topContestants} />
                                <PropsRoute exact path={`${match.path}/submissions`} component={TopContestantsWidget} topContestants={this.props.topContestants} />
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
        contestProgress: state.contest.progress,
        currentEdition: state.contest.data.currentEdition,
        entryCategory: state.contest.entryCategory,
        search: state.contest.search,
        topContestants: state.contest.topContestants,
        userRole: state.contest.userRole,
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
      },
      addEntryCategory: category => {
          dispatch(contestActions.addEntryCategory(category));
      },
      handleJoinContest: (form, token) => {
          dispatch(contestActions.joinContest(form, token));
      },
      handleContestSearch: (form, token) => {
          dispatch(contestActions.handleContestSearch(form, token));
      },
      joinAsContestant: (form, token) => {
          dispatch(contestActions.joinAsContestant(form, token));
      },
      setDefault: () => {
          dispatch(contestActions.setDefault());
      },
      withdrawFromContest: (form, token) => {
          dispatch(contestActions.withdrawFromContest(form, token));
      },
      joinAsWorkforce: (form, token) => {
          dispatch(contestActions.joinAsWorkforce(form, token));
      },
      getTopContestants: (form, token) => {
          dispatch(contestActions.getTopContestants(form, token));
      }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContestController);



