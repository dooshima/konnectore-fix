import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import { withStyles, Button } from '@material-ui/core';
import PostDetailSlider from '../../../Dialogs/PostDetailSlider';

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

class PostDetailDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            postText: ''
        };
    }

  setPostText = text => {
    this.props.setPostText(text);
  }

  handleClickOpen = () => {
    this.props.toggleDialog(this.props.postItem)
  };

  handleClose = () => {
    this.props.toggleDialog(this.props.postItem)
      console.log('Close dialog')
  };

  render() {
    const { fullScreen, classes, postText, dataImageURL, user, toggleDialog } = this.props;
    const p = postText && dataImageURL? {}: {disabled: true};
    const funcs = {
        setPostText: this.setPostText,
        handleClickOpen: this.handleClickOpen,
        handleClose: this.handleClose,
    }
    let item = this.props.postItem;
    item['fullName'] = user.data.firstname + ' ' + user.data.lastname;
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
          //disableEscapeKeyDown={false}
          //disableBackdropClick={false}
          // <PostDetailSlider posts={posts} /> <PostDetailItem item={this.props.postItem} />
        >
          <PostDetailSlider posts={posts} toggleDialog={toggleDialog}/>

        </Dialog>
    );
        } else {
          return null;
        }
  }
}

PostDetailDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withMobileDialog()(PostDetailDialog));
