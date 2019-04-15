import React from 'react';
import { NavLink as Link, Route, Switch } from 'react-router-dom';
import { Grid, Paper } from '@material-ui/core';
import GrowYourNetwork from './GrowYourNetwork';
import PlaceComponents from '../PlaceComponents';
import { connect } from 'react-redux';
import dialogActions from '../../../reducers/dialog/actions';
import FriendHeader from './FriendHeader';
import FriendTimeline from './FriendTimeline';
import FriendsListComponent from './FriendsListComponent';
import friendActions from '../../../reducers/friend/actions';
import PropsRoute from '../../Nav/PropsRoute';

class FriendComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: 'feed',
            people: [],
        }
    }

    componentDidMount() {
        this.props.getFriends(this.props.token);
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
        const {match, user, follow, friend} = this.props;
        let people = [];
        const fullName = user.data.firstname + ' ' + user.data.lastname;

        let count = 1;
        const friends = friend.friends.byId? friend.friends.byId: [];
        
        for(let i in friends) {
            let item = friends[i];
            people.push(item);
            if(count >= 50)
                break;
            count++;
        }

        return (
            <div style={{marginTop: 30, marginLeft: 20, marginRight: 20}}>
                <Grid container spacing={0}>
                    <Grid item xs={8}>
                    <Paper style={{boxShadow: 'none', textAlign: "left", paddingLeft: 10, paddingRight: 10}}>
                        <Switch>
                            <PropsRoute exact path={`${match.path}`} component={FriendsListComponent} people={people} user={user} handleFollow={this.handleFollow} />
                            <Route exact path={`${match.path}/:id`} render={ props => 
                                <FriendHeader path={match.path} {...this.props} 
                                setFilter={this.setFilter.bind(this)} />}                    
                            />
                            <Route exact path={`${match.path}/:id`} render={ props =>
                                <FriendTimeline {...this.props} fullName={fullName} 
                                toggleDialog={this.toggleDialog} people={people} />}
                            />
                        }
                        </Switch>
                    </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <div style={{marginLeft: 10}}>
                            <PlaceComponents spacer={20}>
                                <GrowYourNetwork />
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
        token: state.user.authToken,
        friend: state.friend,
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
      }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendComponent);



