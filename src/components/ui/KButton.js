import React from 'react';
import PropTypes from 'prop-types';
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
  }
});

function KButton(props) {
  const { classes } = props;
  return (
        <Fab
          elevation={0}
          variant="extended"
          size={props.size}
          color="primary"
          aria-label={props.label}
          className={classes.kbutton}
          onClick={props.onClick}
        >
          {props.label}
        </Fab>
  );
}

KButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(KButton);
