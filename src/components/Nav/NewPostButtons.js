import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import VideocamIcon from '@material-ui/icons/Videocam';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Typography from '@material-ui/core/Typography';
import ChooseImageDialog from '../Posts/ChooseImageDialog';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit * 0.1,
    padding: theme.spacing.unit * 0.8,
    color: theme.palette.primary.contrastText,
  },
  icon: {
    fontSize: theme.typography.fontSize * 1.8,
  },
  iconControl: {
    fontSize: theme.typography.fontSize * 2.2,
  },
  input: {
    display: 'none',
  },
  wrapper: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.spacing.unit * 2.5,
  },
  addButton: {
    display: 'flex',
    alignItems: 'center',
  },
  addLabel: {
    fontSize: theme.typography.fontSize * 1.1,
    marginLeft: theme.spacing.unit,
    fontWeight: 300,
    cursor: 'pointer',
  }
});

class NewPostButtons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      openDialog: false,
    }
  }

  componentDidMount() {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#insertion-point-jss'),
    );
  }

  toggleDialog = () => {
    this.setState({openDialog: !this.state.openDialog})
  }

  render () {
  const { classes } = this.props;
  return (
    <>
    {this.props.open === false && <div className={classes.addButton}>
    <div className={classes.wrapper}>
      <IconButton className={classes.button} onClick={this.props.toggle} aria-label="Image" color="primary">
        <Icon className={classes.iconControl}>
          add
        </Icon>
      </IconButton>
    </div>
      <Typography color="primary" component="a" onClick={this.props.toggle} className={classes.addLabel}>
        Add a post</Typography>
    </div>}
    {this.props.open === true && <div className={classes.wrapper}>
      <IconButton className={classes.button} onClick={this.props.toggle} aria-label="Close" color="contrastText">
        <CloseIcon className={classes.iconControl} />
      </IconButton>
      <IconButton onClick={this.toggleDialog} className={classes.button} aria-label="Image" color="white">
        <Icon className={classNames(classes.icon, 'far fa-image')} />
      </IconButton>
      <IconButton color="secondary" className={classes.button} aria-label="Add an alarm">
        <VideocamIcon className={classes.icon} />
      </IconButton>
      <IconButton color="primary" className={classes.button} aria-label="Add to shopping cart">
        <TextFieldsIcon className={classes.icon} />
      </IconButton>
      <label htmlFor="icon-button-file">
        <IconButton color="primary" className={classes.button} component="span">
          <KeyboardVoiceIcon className={classes.icon} />
        </IconButton>
      </label>
      </div>}
      <ChooseImageDialog fullScreen={true} toggledialog={this.toggleDialog} opendialog={this.state.openDialog} />
    </>
  );
  }
}

NewPostButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewPostButtons);
