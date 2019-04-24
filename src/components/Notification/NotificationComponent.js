import React from 'react';
import NotificationList from './NotificationList';
import { Typography } from '@material-ui/core';

class NotificationComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{padding: 20}}>
                <Typography style={{fontSize: 20, marginBottom: 20,}}>
                    Notifications
                </Typography>
                <NotificationList />
            </div>
        )
    }
}

export default NotificationComponent;