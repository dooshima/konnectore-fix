import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'transparent', //theme.palette.background.paper,
    marginTop: theme.spacing.unit * 2,
  },
  nav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  title: {
      width: '40%',
      fontSize: theme.typography.fontSize * 1.2,
      textAlign: 'left',
      marginLeft: 10,
  },
  tabs: {
      width: '60%',
  }
});

function SubmissionFilterNav(props) {
  const { classes, stages, handleChange, filter } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.nav} elevation={0}>
        <Typography className={classes.title}>Submission Entries</Typography>
        {stages.length > 0 && <Tabs
          value={filter}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          className={classes.tabs}
        >
          {
            stages.map(stage => <Tab label={`Stage ${stage.order}`} />)
          }
        </Tabs>}
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(SubmissionFilterNav);
