import React from 'react';
import NotificationList from './NotificationList';
import { Typography } from '@material-ui/core';
import KPaystackButton from '../Payment/KPaystackButton';
import { connect } from 'react-redux';
import notificationActions from '../../reducers/notification/actions';
import KPaper from '../UIC/KPaper';

class NotificationComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getNotifications(this.props.user.authToken);
    }

    render() {
        return (
            <KPaper style={{margin: 20}}>
                <Typography style={{fontSize: 20, marginBottom: 20, padding: 15,}}>
                    Notifications
                </Typography>
                <NotificationList {...this.props} />

            </KPaper>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        notifications: state.notifications.byId,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getNotifications: token => {
            dispatch(notificationActions.getNotifications(token));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationComponent);