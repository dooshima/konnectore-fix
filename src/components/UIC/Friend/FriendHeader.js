import React from 'react';
import { withRouter } from 'react-router-dom';
import FriendHeaderSummary from './FriendHeaderSummary';

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

const FriendHeader = withRouter( (props) => {
    const path = props.location.pathname;
        return (
            <FriendHeaderSummary {...props} />
        )
});

export default FriendHeader;