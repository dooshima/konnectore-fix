import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import { withStyles, createMuiTheme } from '@material-ui/core';
import ImagePostDialog from './ImagePostDialog';
import TextPostDialog from './TextPostDialog';
import VideoPostDialog from './VideoPostDialog';

const theme = createMuiTheme({
  spacing: 10,
});

const styles = {
  contentHolder: {
    backgroundColor: '#efefef',
    border: 'none',
    display: 'block',
    padding: theme.spacing.unit * 2,
  },
  bordered1: {
    backgroundColor: '#efefef',
    border: '2px dashed #bcbcbc',
    padding: theme.spacing.unit * 2,
    flex: 1,
  },
  content1: {
    backgroundColor: 'transparent',
    padding: theme.spacing.unit * 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 200,
    //height: '100%',
    position: 'relative',
  },
  paper: {
    width: 700,
    //maxHeight: 'max-content',
    height: '90vh',
    borderRadius: 0,
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: 'auto',
      zIndex: '1500',
    }
  },
  root: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    height: '90vh',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: 'auto',
      zIndex: '1500',
    }
  }
};

class PostDialogController extends React.Component {
  state = {
    open: false,
    postText: ''
  };

  setPostText = text => {
    this.props.setPostText(text);
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.props.toggleDM(false);
    this.props.setDataImageURL("");
    this.props.setPostText("");
  };

  componentDidMount() {
  }

  

  render() {
    const { fullScreen, classes, postText, dataImageURL } = this.props;
    const p = postText && dataImageURL? {}: {disabled: true};
    const funcs = {
        setPostText: this.setPostText,
        handleClickOpen: this.handleClickOpen,
        handleClose: this.handleClose,
    }
    
    return (
        <Dialog
          fullScreen={fullScreen}
          open={this.props.showDM}
          onClose={this.handleClose}
          maxWidth="md"
          aria-labelledby="responsive-dialog-title"
          classes={{
            paper: classes.paper,
            root: classes.root,
          }}
        >

          { this.selectDialog(this.props.dialog, {...this.props, ...funcs}) }

        </Dialog>
    );
  }

  selectDialog = (type, props) => {
    switch(type) {
      case 'Image':
        return <ImagePostDialog {...props} />;
      case 'Text':
        return <TextPostDialog {...props} />;
      case 'Video':
        return <VideoPostDialog {...props} />;
      default:
        return null;
    }
  }
}

PostDialogController.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withMobileDialog()(PostDialogController));
