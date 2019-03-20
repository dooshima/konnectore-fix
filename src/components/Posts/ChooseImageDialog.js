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
class ResponsiveDialog extends React.Component {
  state = {
    open: false,
    postText: ''
  };

  setPostText = text => {
      this.setState({postText: text});
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.props.toggledialog();
    this.props.setFormdata(null, true);
  };

  render() {
    const { fullScreen, classes, disabled, showpostform } = this.props;
    const d = this.props.imageurl? {}: {disabled: true};
    const p = this.state.postText? {}: {disabled: true};
    const label = this.props.showpostform? 'Share post': 'Continue';
    return (
        <Dialog
          fullScreen={fullScreen}
          open={this.props.opendialog}
          onClose={this.handleClose}
          maxWidth="md"
          aria-labelledby="responsive-dialog-title"
          classes={{
            paper: classes.paper,
            root: classes.root,
          }}
        >
          <DialogContent>
            <DialogContentText>
              <div className={classes.contentHolder}>
                <section className={classes.bordered}>
                  <div className={classes.content}>
                  <FileDropzone imageurl={this.props.imageurl} setImageUrl={this.props.setImageUrl} setFormdata={this.props.setFormdata} />
                  </div>
                </section>
              </div>
              <KProgressBar progress={this.props.uploadprogress} show={this.props.imageurl? true: false} />
              <NewTextField showpostform={this.props.showpostform} setPostText={this.setPostText} />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <KButton onClick={this.handleClose} upper={false}  color="error" label="Cancel" size="small" />
            {!showpostform && <KButton onClick={this.props.uploadMedia} {...d} label="Continue" size="small" />}
            {showpostform && <KButton onClick={this.props.sharePost} {...p} label="Share post" size="small" />}
          </DialogActions>
        </Dialog>
    );
  }
}

ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withStyles(styles)(withMobileDialog()(ResponsiveDialog));
