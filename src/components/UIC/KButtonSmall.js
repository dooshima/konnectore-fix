import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const styles = theme => ({
  kbutton: {
    margin: theme.spacing.unit * .1,
    //paddingTop: theme.spacing.unit * .4,
    //paddingBottom: theme.spacing.unit * .4,
    padding: `${theme.spacing.unit * .5}px 12px !important`,
    //paddingLeft: `${theme.spacing.unit * 1}px !important`,
    boxShadow: 'none',
    //fontSize: `${theme.typography.fontSize * 0.4}px`,
    height: `auto !important`,
  },
  upper: {
    textTransform: 'uppercase',
    fontSize: `${theme.typography.fontSize * 0.9}px`,
  },
  normal: {
    textTransform: 'capitalize',
    fontSize: `${theme.typography.fontSize * 0.9}px`,
  }
});

function KButtonSmall(props) {
  const { classes, color, upper } = props;
  const d = {disabled: props.disabled};
  //const d = props.disabled === true? 'disabled': ''
  return (
        <Fab
          elevation={0}
          variant="extended"
          size={props.size}
          color={color? color: "primary"}
          aria-label={props.label}
          className={classNames(classes.kbutton, upper === true? classes.upper: classes.normal)}
          onClick={props.onClick}
          {...d}
        >
          {props.label}
        </Fab>
  );
}

KButtonSmall.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(KButtonSmall);
