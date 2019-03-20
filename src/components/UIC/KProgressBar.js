import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit,
  },
  bar: {
    height: theme.spacing.unit * 1.5,
  },
  rounded: {
    borderRadius: '15px',
  }
});

class KProgressBar extends React.Component {
  state = {
    completed: 0,
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    if (completed === 100) {
      this.setState({ completed: 0 });
    } else {
      const diff = Math.random() * 10;
      this.setState({ completed: Math.min(completed + diff, 100) });
    }
  };

  render() {
    const { classes, show } = this.props;
    if(show) {
    return (
      <div className={classes.root}>
        <LinearProgress classes={{bar: classes.bar, root: classNames(classes.bar, classes.rounded)}} variant="determinate" value={this.props.progress} />
      </div>
    );
    } else {
      return null;
    }
  }
}

KProgressBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(KProgressBar);
