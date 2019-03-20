import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const styles = theme => ({
  kbutton: {
    margin: theme.spacing.unit * .8,
    paddingTop: theme.spacing.unit * .8,
    paddingBottom: theme.spacing.unit * .8,
    paddingRight: `${theme.spacing.unit * 3}px !important`,
    paddingLeft: `${theme.spacing.unit * 3}px !important`,
    boxShadow: 'none',
  },
  upper: {
    textTransform: 'uppercase',
  },
  normal: {
    textTransform: 'capitalize',
  }
});

function KButton(props) {
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

KButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(KButton);
