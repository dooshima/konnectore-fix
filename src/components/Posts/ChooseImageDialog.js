import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import KButton from './../UIC/KButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import { withStyles } from '@material-ui/core';
import FileDropzone from './FileDropzone';
import KProgressBar from './../UIC/KProgressBar';
import NewTextField from './NewTextField';

const styles = theme => ({
  contentHolder: {
    backgroundColor: '#efefef',
    border: 'none',
    display: 'block',
    padding: theme.spacing.unit * 2,
  },
  bordered: {
    backgroundColor: '#efefef',
    border: '1px dashed #bcbcbc',
    padding: theme.spacing.unit * 2,
    flex: 1,
  },
  content: {
    backgroundColor: '#fff',
    padding: theme.spacing.unit * 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 150,
    position: 'relative',
  },
  paper: {
    width: '60%',
    maxHeight: 'max-content',
  },
  root: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  }
});
class ChooseImageDialog extends React.Component {
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
          <DialogContent>
            <div>
              <div className={classes.contentHolder}>
                <section className={classes.bordered}>
                  <div className={classes.content}>
                  <FileDropzone imageurl={this.props.imageurl} 
                    setDataImageURL={this.props.setDataImageURL} 
                    setFormData={this.props.setFormData}
                    dataImageURL={this.props.dataImageURL} />
                  </div>
                </section>
              </div>
              <KProgressBar progressNumber={this.props.progressNumber} show={this.props.isUploading} />
              <div>
                <NewTextField onChange={this.setPostText} setPostText={this.setPostText} 
                postText={this.props.postText} />
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <KButton onClick={this.handleClose} upper={false}  color="secondary" label="Cancel" size="small" />
            <KButton onClick={this.props.uploadMedia} {...p} label="Share post" size="small" />
          </DialogActions>
        </Dialog>
    );
  }
}

ChooseImageDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withStyles(styles)(withMobileDialog()(ChooseImageDialog));
