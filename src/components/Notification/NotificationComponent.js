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
        this.props.getNotifications();
    }

    render() {
        return (
            <KPaper style={{margin: 20}}>
                <Typography style={{fontSize: 20, marginBottom: 20,}}>
                    Notifications
                </Typography>
                <NotificationList />

            </KPaper>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getNotifications: () => {
            dispatch(notificationActions.getNotifications());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationComponent);