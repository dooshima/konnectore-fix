import React from 'react';
import { withRouter } from 'react-router-dom';
import MeHeaderNav from './MeHeaderNav';
import MeHeaderSummary from './MeHeaderSummary';
import MeTabs from './MeTabs';

const tabs = [
    {
      label: "Feed",
      route: "feed"
    },
    {
      label: "Contests",
      route: "contest"
    },
    {
      label: "Images",
      route: "image"
    },
    {
      label: "Videos",
      route: "video"
    },
    {
        label: "Posts",
        route: "text"
    }
  ];

const MeHeader = withRouter( (props) => {
    const path = props.location.pathname;
    if(path && path.indexOf('me/account') !== -1) {
        return (
            <MeHeaderNav />
        )
    } else {
        return (
            <>
            <MeHeaderSummary {...props} />
            <MeTabs tabs={tabs} baseUrl={props.match.url} setFilter={props.setFilter} size="small" />
            </>
        )
    }
});

export default MeHeader;