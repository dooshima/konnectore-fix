import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import { withStyles } from '@material-ui/core';
import ImagePostDialog from './ImagePostDialog';
import dialogActions from './../../reducers/dialog/actions';
import { connect } from 'react-redux';
import { DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import FileDropzone from './../Posts/FileDropzone';
import KProgressBar from './../UIC/KProgressBar';
import NewTextField from './../Posts/NewTextField';
import KButton from './../UIC/KButton';

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
    minHeight: 200,
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
class DialogManager extends React.Component {
  state = {
    open: false,
    postText: ''
  };

  setPostText = text => {
      this.setState({postText: text});
  }

  handleClickOpen = () => {
    this.props.toggleDM(true);
  };

  handleClose = () => {
    this.props.toggleDM(false);
    this.props.setFormdata(null, true);
  };

  render() {
    const { fullScreen, classes, showDM, toggleDM, DMComponent, showProgressBar,  } = this.props;
    const showBtn = this.props.imageurl? {}: {disabled: true};
    const p = this.state.postText? {}: {disabled: true};
    
    console.log('SHowDM: ', showDM);
    return (
        <Dialog
          fullScreen={fullScreen}
          open={showDM}
          onClose={toggleDM(false)}
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
                    <video src="/videos/video.mp4" controls className={classes.video} />
                    <FileDropzone imageurl={this.props.imageurl} setImageUrl={this.props.setImageUrl} setFormdata={this.props.setFormdata} />
                    </div>
                    </section>
                </div>
                <KProgressBar progress={this.props.uploadprogress} show={showProgressBar} />
                {this.props.imageurl && <NewTextField showpostform={true} setPostText={this.setPostText} />}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <KButton onClick={this.handleClose} upper={false}  color="error" label="Cancel" size="small" />
                <KButton onClick={this.props.uploadMedia} {...showBtn} label="Share post" size="small" />
            </DialogActions>
        </Dialog>
    );
  }
}

DialogManager.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
    return {
        showDM: state.dialog.showDM
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleDM: showDM => {
            dispatch(dialogActions.toggleDM(showDM));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withMobileDialog()(DialogManager)));
