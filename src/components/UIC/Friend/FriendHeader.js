import React from 'react';
import { withRouter } from 'react-router-dom';
import FriendHeaderSummary from './FriendHeaderSummary';
import MeTabs from '../Me/MeTabs';

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

  class FriendHeader extends React.PureComponent {
    constructor(props) {
      super(props);
    }
    render() {
      const props = this.props;
        return (
          <>
            <FriendHeaderSummary {...props} />
            <MeTabs tabs={tabs} baseUrl={props.match.url} setFilter={props.setFilter} size="small" />
          </>
        )
    }
};

export default withRouter(FriendHeader);