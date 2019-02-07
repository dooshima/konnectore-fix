import React, {Component} from "react";
import {Tabs, Tab} from '@material-ui/core';
import { withRouter } from "react-router-dom";

import Home from "./Home";
import Portfolio from "./Portfolio";

class NavTabs extends Component {

 handleCallToRouter = (value) => {
   this.props.history.push(value);
 }

  render () {
     return (
      <Tabs
        value={this.props.history.location.pathname}
        onChange={this.handleCallToRouter}
        >
        <Tab
          label="Home"
          value="/"
        >
        <div>
           <Home />
        </div>
        </Tab>
        <Tab
          label="Portfolio"
          value="/portfolio"
            >
          <div>
            <Portfolio />
          </div>
        </Tab>
      </Tabs>           
    )
  }
}

export default withRouter(NavTabs)