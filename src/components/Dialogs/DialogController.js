import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import { withStyles } from '@material-ui/core';
import ImagePostDialog from './ImagePostDialog';
import TextPostDialog from './TextPostDialog';

const styles = theme => ({
  contentHolder: {
    backgroundColor: '#efefef',
    border: 'none',
    display: 'block',
    padding: theme.spacing.unit * 2,
  },
  bordered: {
    backgroundColor: '#efefef',
    border: '2px dashed #bcbcbc',
    padding: theme.spacing.unit * 2,
    flex: 1,
  },
  content: {
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
    width: '60%',
    maxHeight: 'max-content',
    //height: '80vh',
  },
  root: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  }
});

class DialogController extends React.Component {
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
    console.log(type)
    switch(type) {
      case 'Image':
        return <ImagePostDialog {...props} />;
      case 'Text':
        return <TextPostDialog {...props} />;
      default:
        return null;
    }
  }
}

DialogController.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withMobileDialog()(DialogController));
