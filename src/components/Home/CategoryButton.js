import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    borderRadius: 0,
    textTransform: 'none',
    marginRight: theme.spacing.unit * .5,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  rightIconSelected: {
      backgroundColor: '#008173',
      color: '#009b90',
      borderRadius: '50%',
      marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

function CategoryButton(props) {
  const { classes, category, selected, toggleCategory } = props;
  return (
    <>
      {selected!==true && <Button variant="outlined" color="primary" className={classes.button}
        onClick={() => toggleCategory(category)}
      >
        {category}
        <Icon className={classes.rightIcon}>add_icon</Icon>
      </Button>}
      {selected===true && <Button variant="contained" color="primary" className={classes.button}
        onClick={() => toggleCategory(category)}
      >
        {category}
        <Icon className={classes.rightIconSelected}>close_icon</Icon>
      </Button>}
    </>
  );
}

CategoryButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CategoryButton);
