import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class ContestUploadProgress extends React.Component {
  state = {
    completed: 0,
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <LinearProgress variant="determinate" value={this.props.count} />
    </div>
    );
  }
}

ContestUploadProgress.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContestUploadProgress);
