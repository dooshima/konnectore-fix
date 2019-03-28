import React from 'react';
import { withRouter } from 'react-router-dom';
import MeHeaderNav from './MeHeaderNav';
import MeHeaderSummary from './MeHeaderSummary';

const MeHeader = withRouter( (props) => {
    const path = props.location.pathname;
    if(path && path.indexOf('me/account') !== -1) {
        return (
            <MeHeaderNav />
        )
    } else {
        return (
            <MeHeaderSummary {...props} />
        )
    }
});

export default MeHeader;