import React from 'react';
import { withRouter } from 'react-router-dom';
import FriendHeader from './FriendHeader';
import FriendTimeline from './FriendTimeline';
import PostDetailDialog from '../Me/Posts/PostDetailDialog';

class CurrentFriendComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            item: {},
        }
    }

    componentDidMount() {
        
        const props = this.props;
        props.getFriend(props.match.params.id, props.token);
    }

    toggleDialog = item => {
        this.setState({item: item, open: !this.state.open})
    }

    render() {
        return (
            <>
                <FriendHeader {...this.props} />
                <FriendTimeline {...this.props} />
                <PostDetailDialog postItem={this.state.item} 
                open={this.state.open} user={this.props.user} 
                toggleDialog={this.toggleDialog} />
            </>
        )
    }
}

export default withRouter(CurrentFriendComponent);
