import React from 'react';
import PropTypes from 'prop-types';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    color: 'white',
    textTransform: 'capitalize',
    padding: '5px 10px',
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 16,
    color: 'white',
  },
  holder: {
      display: 'flex',
      justify: 'space-between',
      //marginBottom: '1em',
  }
});

class SocialButtons extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        loadCSS(
          'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
          document.querySelector('#insertion-point-jss'),
        );
    }

    render() {
  const { classes } = this.props;
  return (
    <div className={classes.holder}>
      <Button variant="contained" size="medium" className={classes.button} style={{backgroundColor: '#005ba2'}}>
        <Icon className={classNames(classes.leftIcon, 'fab fa-facebook-f', classes.iconSmall)} color="action" />
        Facebook
      </Button>
      <Button variant="contained" size="medium" className={classes.button} style={{backgroundColor: '#dd5156'}}>
        <Icon className={classNames(classes.leftIcon, 'fab fa-google', classes.iconSmall)} color="action" />
        Google
      </Button>
    </div>
  );
    }
}

SocialButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SocialButtons);
