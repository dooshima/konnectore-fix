import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Link from '@material-ui/core/Link';
import FilterLink from '../../FilterLink';
//import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabsRoot: {
    //borderBottom: '1px solid #e8e8e8',
  },
  tabsIndicator: {
    //backgroundColor: '#1890ff',
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 0,
    /*fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },*/
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3,
  },
});

function LinkTab(props) {
  return <Tab component={Link} onClick={props.onClick} to={props.to} {...props} />;
}

class MeTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
    let filter = '';
    switch(value) {
      case 0:
        filter = 'feed';
        break;
      case 1:
        filter = 'contests';
        break;
      case 2:
        filter = 'images';
        break;
      case 3:
        filter = 'videos';
        break;
      case 4:
        filter = 'friends';
      default:
        filter = 'feed';
        break;
    }
    this.props.setFilter(filter);
  };

  processFilter = route => {
  }

  render() {
    const { classes, tabs, baseUrl } = this.props;
    const { value } = this.state;
    
    return (
      <div className={classes.root}>
        <Tabs
          value={value}
          onChange={this.handleChange}
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
          indicatorColor="primary"
          textColor="primary"
        >
        {tabs.map( (tab, i) =>
          <Tab
            component="a"
            key={i}
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label={tab.label}
            //to={`${baseUrl}/${tab.route}`}
            onClick={() => this.processFilter(tab.route)}
          />
        )}
        </Tabs>
      </div>
    );
  }
}

MeTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MeTabs);
