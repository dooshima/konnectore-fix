import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import { withStyles, Button } from '@material-ui/core';
import PostDetailSlider from './PostDetailSlider';
import { searchResults } from './../assets/searchResults';

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
    minHeight: 150,
    height: '100%',
    position: 'relative',
  },
  paper: {
    width: '100vw',
    //maxHeight: 'max-content',
    height: '80vh',
    borderRadius: 0,
  },
  root: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    height: '80vh',
  }
});

class PostDetailDialogController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open,
            postText: ''
        };
    }

  setPostText = text => {
    this.props.setPostText(text);
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
      this.props.openDialog(!this.props.open);
    /*this.props.toggleDM(false);
    this.props.setDataImageURL("");
    this.props.setPostText("");*/
  };

  

  render() {
    const { fullScreen, classes, postText, dataImageURL } = this.props;
    const p = postText && dataImageURL? {}: {disabled: true};
    const funcs = {
        setPostText: this.setPostText,
        handleClickOpen: this.handleClickOpen,
        handleClose: this.handleClose,
    }

    let posts = [];

    for (let i in searchResults.data.posts.byId) {
      let item = searchResults.data.posts.byId[i];
      posts.push(item);
    }
    
    return (
        <Dialog
          fullScreen={fullScreen}
          open={this.props.open}
          onClose={this.handleClose}
          maxWidth="lg"
          aria-labelledby="post-detail-dialog"
          classes={{
            paper: classes.paper,
            root: classes.root,
          }}
          disableEscapeKeyDown={false}
          disableBackdropClick={false}
        >

          <PostDetailSlider {...this.props} posts={posts} />

        </Dialog>
    );
  }
}

PostDetailDialogController.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withMobileDialog()(PostDetailDialogController));
