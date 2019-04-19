import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import VideocamIcon from '@material-ui/icons/Videocam';
import { connect } from 'react-redux';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Typography from '@material-ui/core/Typography';
import ChooseImageDialog from '../Posts/ChooseImageDialog';
import dialogActions from './../../reducers/dialog/actions';
import postActions from './../../reducers/post/actions';
import DialogManager from '../Dialogs/DialogManager';
import DialogController from '../Dialogs/DialogController';
import PostDialogController from '../Dialogs/PostDialogController';

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
      dialogType: '',
      type: '',
    }
  }

  componentDidMount() {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#insertion-point-jss'),
    );

    this.props.setDataImageURL("");
    this.props.setPostText("");
    this.props.setFormData({});
    this.props.setPostTextColor("#ffb91b");
  }

  setType = type => {
    this.setState({type: type});
  }

  toggleDialog = () => {
    this.setState({openDialog: !this.state.openDialog})
  }

  openDialog = type => {
    this.setState(prevState => {
      this.props.toggleDM(true);
      return {dialogType: type}
    });
    this.props.toggle(new Event('click'));
  }

  closeDialog = () => {
    this.props.toggleDM(false);
  }

  sharePost = () => {
    let fd = this.props.formData;
    let form = fd;
    if(this.state.type !== '') {
      form.append('type', this.state.type);
    }
    form.append('text', this.props.postText);
    form.append('backgroundColor', this.props.postTextColor);
    this.props.uploadMedia(form, this.props.user.authToken);
    this.setType("");
  }

  render () {
  const { classes, toggleDM, showDM } = this.props;
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
      <IconButton className={classes.button} onClick={this.props.toggle} aria-label="Close">
        <CloseIcon className={classes.iconControl} />
      </IconButton>
      <IconButton onClick={() => this.openDialog('Image')} className={classes.button} aria-label="Image">
        <Icon className={classNames(classes.icon, 'far fa-image')} />
      </IconButton>
      <IconButton color="secondary" onClick={() => this.openDialog('Video')} className={classes.button} aria-label="Add an alarm">
        <VideocamIcon className={classes.icon} />
      </IconButton>
      <IconButton color="primary" className={classes.button} onClick={() => this.openDialog('Text')}>
        <Icon className={classNames(classes.icon, 'fas fa-align-left')} />
      </IconButton>
      <label htmlFor="icon-button-file">
        <IconButton color="primary" className={classes.button} component="span">
          <KeyboardVoiceIcon className={classes.icon} />
        </IconButton>
      </label>

      </div>}
      
      <PostDialogController {...this.props} setType={this.setType.bind(this)} uploadMedia={this.sharePost} dialog={this.state.dialogType} />
    </>
  );
  }
}

/* <ChooseImageDialog 
        showDM={showDM} 
        toggleDM={toggleDM} 
        setDataImageURL={this.props.setDataImageURL} 
        setFormData={this.props.setFormData}
        dataImageURL={this.props.dataImageURL}
        setPostText={this.props.setPostText}
        postText={this.props.postText} 
        uploadMedia={this.sharePost}
        isUploading={this.props.isUploading}
        progressNumber={this.props.progressNumber} 
    />
*/

NewPostButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    showDM: state.dialog.showDM,
    dataImageURL: state.dialog.dataImageURL,
    postText: state.dialog.postText,
    formData: state.dialog.formData,
    progressNumber: state.post.progressNumber,
    isUploading: state.post.isUploading,
    postTextColor: state.dialog.postTextColor,
    user: state.user,
  }
}
const mapDispatchToProps = dispatch => {
  
  return {
    toggleDM: showDM => {
      dispatch(dialogActions.toggleDM(showDM));
    },
    setDataImageURL: dataImageURL => {
      dispatch(dialogActions.setDataImageURL(dataImageURL));
    },
    setFormData: formData => {
      dispatch(dialogActions.setFormData(formData));
    },
    setPostText: text => {
      dispatch(dialogActions.setPostText(text));
    },
    uploadMedia: (data, token) => {
      dispatch(postActions.uploadMedia(data, token));
    },
    setPostTextColor: color => {
      dispatch(dialogActions.setPostTextColor(color));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NewPostButtons));
