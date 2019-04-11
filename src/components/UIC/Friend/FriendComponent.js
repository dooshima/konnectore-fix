import React from 'react';
import { NavLink as Link, Route } from 'react-router-dom';
import MeHeader from './FriendHeader';
import { Grid, Paper } from '@material-ui/core';
import GrowYourNetwork from './GrowYourNetwork';
import PlaceComponents from '../PlaceComponents';
import { connect } from 'react-redux';
import dialogActions from '../../../reducers/dialog/actions';
import PostDetailDialog from './Posts/PostDetailDialog';
import FriendHeader from './FriendHeader';
import FriendTimeline from './FriendTimeline';

class FriendComponent extends React.Component {
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
                        <FriendHeader path={match.path} {...this.props} setFilter={this.setFilter.bind(this)} />
                        <FriendTimeline {...this.props} fullName={fullName} toggleDialog={this.toggleDialog} recentPosts={recentPosts} />
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
                <PostDetailDialog postItem={this.state.item} open={this.state.open} user={this.props.user} toggleDialog={this.toggleDialog} />
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
    }
}

const mapDispatchToProps = dispatch => {
    return {
      showDialog: open => {
        dispatch(dialogActions.showDialog(open));
      }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendComponent);



