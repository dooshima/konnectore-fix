import React from 'react';
import { withRouter } from 'react-router-dom';
import ContestHeaderNav from './ContestHeaderNav';
import ContentHeaderCard from './ContentHeaderCard';
import ContestTabs from './ContestTabs';
import { Switch, Route } from 'react-router-dom';
import PropsRoute from '../Nav/PropsRoute';

const tabs = [
    {
      label: "Contests",
      route: "contests"
    },
    {
      label: "News Feed",
      route: "feeds"
    },
    {
      label: "Images",
      route: "images"
    },
    {
        label: "Videos",
        route: "videos"
    }
  ];

const ContestHeader = withRouter( (props) => {
    //const path = props.location.pathname;
    
    return (
      <Switch>
        <PropsRoute exact path={`${props.path}/guide`} 
          component={ContestHeaderNav} 
          back={props.match.url}
          title="The Stage Contest - Guidelines" />
        <PropsRoute exact path={`${props.path}/entry`} 
          component={ContestHeaderNav} 
          back={props.match.url}
          title="The Stage Contest - Entry Submissions" />
        <PropsRoute exact path={`${props.path}/submissions`} 
          component={ContestHeaderNav} 
          back={props.match.url}
          title="The Stage Contest - Submissions" />
        <PropsRoute exact path={props.path} component={TopNav} {...props} />
        <PropsRoute exact path={`${props.path}/submissions`} component={TopNav} {...props} />
      </Switch>
            

        )
});

export default ContestHeader;

function TopNav(props) {
  return (
    <>
      <ContentHeaderCard {...props}/>
      <ContestTabs tabs={tabs} baseUrl={props.match.url} setFilter={props.setFilter} size="small" />
    </>
  )
}