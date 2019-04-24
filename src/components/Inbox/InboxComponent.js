import React from 'react';
import InboxSenderList from './InboxSenderList';
import { Typography } from '@material-ui/core';

class InboxComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{padding: 20}}>
                <Typography style={{fontSize: 20, marginBottom: 20,}}>
                    Messages
                </Typography>
                <InboxSenderList />
            </div>
        )
    }
}

export default InboxComponent;