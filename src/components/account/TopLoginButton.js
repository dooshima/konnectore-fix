import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * .8,
    paddingTop: theme.spacing.unit * .8,
    paddingBottom: theme.spacing.unit * .8,
    paddingRight: `${theme.spacing.unit * 3}px !important`,
    paddingLeft: `${theme.spacing.unit * 3}px !important`
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function TopLoginButton(props) {
  const { classes } = props;
  return (
        <Fab
          variant="extended"
          size="small"
          color="primary"
          aria-label="Login"
          className={classes.margin}
          onClick={props.handleLogin}
        >
          Login
        </Fab>
  );
}

TopLoginButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopLoginButton);
