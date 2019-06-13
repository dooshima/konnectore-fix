import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import { withStyles, Button, IconButton } from '@material-ui/core';
import PostDetailSliderWidget from './PostDetailSliderWidget';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  /* contentHolder: {
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
  } */
});

class PostDetailWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            postText: ''
        };
    }

    componentDidMount() {
      console.log('increment view count text2 pure');
    }

  setPostText = text => {
    this.props.setPostText(text);
  }

  handleClickOpen = () => {
    this.props.toggleDialog(this.props.postItem)
  };

  handleClose = () => {
    this.props.toggleDialog(this.props.postItem);
  };

  render() {
    const { fullScreen, classes, postText, dataImageURL, user, toggleDialog } = this.props;
    const p = postText && dataImageURL? {}: {disabled: true};
    const funcs = {
        setPostText: this.setPostText,
        handleClickOpen: this.handleClickOpen,
        handleClose: this.handleClose,
    }

    let item = this.props.postItem || [];
    item['fullName'] = user && user.data.firstname || '' + ' ' + user && user.data.lastname || '';
    item['avatar'] = user.data.avatar;
    let posts = [item];

    /*for (let i in this.props.items) {
      let item = this.props.items[i];
      posts.push(item);
    }*/
    
    if(posts) {
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
        >
          <IconButton onClick={this.handleClose} className={classes.iconButton}>
            <CloseIcon />
          </IconButton>
          <PostDetailSliderWidget posts={posts} toggleDialog={toggleDialog} {...this.props} />

        </Dialog>
    );
        } else {
          return null;
        }
  }
}

PostDetailWidget.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withMobileDialog()(PostDetailWidget));
