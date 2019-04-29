import React from 'react';
import NotificationList from './NotificationList';
import { Typography } from '@material-ui/core';
import KPaystackButton from '../Payment/KPaystackButton';
import { connect } from 'react-redux';

class NotificationComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{padding: 20}}>
                <KPaystackButton user={this.props.user.data} />
                <Typography style={{fontSize: 20, marginBottom: 20,}}>
                    Notifications
                </Typography>
                <NotificationList />

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps)(NotificationComponent);