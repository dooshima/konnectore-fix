import React from 'react';
import { NavLink as Link, Route, Switch } from 'react-router-dom';
import { Grid, Paper } from '@material-ui/core';
import GrowYourNetwork from './GrowYourNetwork';
import PlaceComponents from '../PlaceComponents';
import { connect } from 'react-redux';
import dialogActions from '../../../reducers/dialog/actions';
import CurrentFriendComponent from './CurrentFriendComponent';
import FriendsListComponent from './FriendsListComponent';
import friendActions from '../../../reducers/friend/actions';
import PropsRoute from '../../Nav/PropsRoute';
import { withRouter } from 'react-router-dom';
import Utility from '../../../services/Utility';
import SimpleTextAlert from '../../../widgets/alerts/SimpleTextAlert';

class FriendComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: 'feed',
            people: [],
            currentUserID: '',
        }
    }

    setUser = user => {
        this.setState({currentUser: user});
        console.log(user);
    } 

    componentDidMount() {
        this.props.getFriends(this.props.token);
        this.props.growFriends(this.props.token);
    }

    static getDerivedStateFromProps(state) {
        return state.feed? {feed: state.feed}: {feed: 'feed'};
    }

    toggleDialog = item => {
        this.setState({item: item, open: !this.state.open})
    }

    handleFollow = userID => {
        this.props.follow(userID, this.props.token);
    }

    handleUnfollow = userID => {
        this.props.unfollow(userID, this.props.token);
    }

    filterPosts(posts, filter) {
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
        const {match, user, follow, friend} = this.props;
        let people = [];
        const fullName = user.data.firstname + ' ' + user.data.lastname;

        let count = 1;
        const friends = friend.friends.byId? friend.friends.byId: {};
        const keys = friend.friends.allIds;
        
        for(let i in friends) {
            let item = friends[i];
            people.push(item);
            if(count >= 50)
                break;
            count++;
        }
        const suggestions = friend.grow_friends;
        const growFriends = [];
        for(let f of suggestions) {
            let frd = friend.byId[f];
            if(Utility.isset(frd)) {
                growFriends.push(frd);
            }
        }

        return (
            <div style={{marginTop: 30, marginLeft: 20, marginRight: 20}}>
                <Grid container spacing={0}>
                    <Grid item xs={8}>
                    <Paper style={{boxShadow: 'none', textAlign: "left", paddingLeft: 10, paddingRight: 10}}>
                        <Switch>
                            <PropsRoute exact path={`${match.path}`} component={FriendsListComponent} people={people} user={user} handleFollow={this.handleFollow} handleUnfollow={this.handleUnfollow} />
                            <PropsRoute exact path={`${match.path}/:id`} 
                                component={CurrentFriendComponent} 
                                {...this.props} filter={this.state.filter}
                                setFilter={this.setFilter}
                                filterPosts={this.filterPosts}
                                handleFollow={this.handleFollow} handleUnfollow={this.handleUnfollow} />
                        </Switch>
                    </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <div style={{marginLeft: 10}}>
                            <PlaceComponents spacer={20}>
                                <GrowYourNetwork friends={growFriends} />
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

const mapStateToProps = state => {
    return {
        user: state.user,
        token: state.user.authToken,
        friend: state.friend,
        currentUser: state.friend.current,
        allPosts: state.post.byId,
    }
}

const mapDispatchToProps = dispatch => {
    return {
      showDialog: open => {
        dispatch(dialogActions.showDialog(open));
      },
      getFriends: token => {
          dispatch(friendActions.getFriends(token));
      },
      follow: (userID, token) => {
          dispatch(friendActions.follow(userID, token));
      },
      unfollow: (userID, token) => {
          dispatch(friendActions.unfollow(userID, token));
      },
      getFriend: (user_id, token) => {
          dispatch(friendActions.getFriend(user_id, token));
      },
      growFriends: token => {
          dispatch(friendActions.growFriends(token));
      }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FriendComponent));



