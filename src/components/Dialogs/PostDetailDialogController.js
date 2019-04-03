import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import { withStyles, Button } from '@material-ui/core';
import ImagePostDetailDialog from './ImagePostDetailDialog';
import TextPostDetailDialog from './TextPostDialog';

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
    height: '90vh',
    borderRadius: 0,
  },
  root: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    height: '90vh',
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
      this.props.openDialog(!this.state.open);
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
    
    return (
        <>
        <Button onClick={this.handleClickOpen}>Open</Button>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          maxWidth="md"
          aria-labelledby="post-detail-dialog"
          classes={{
            paper: classes.paper,
            root: classes.root,
          }}
        >

          { this.selectDialog1(this.props.dialog, {...this.props, ...funcs}) }

        </Dialog>
        </>
    );
  }

  selectDialog1 = (type, props) => {
    console.log(<ImagePostDetailDialog {...props} />)
    switch(type) {
      case 'Image':
        return <ImagePostDetailDialog {...props} />;
      case 'Text':
        return <TextPostDetailDialog {...props} />;
      default:
        return <ImagePostDetailDialog {...props} />;
    }
  }
}

PostDetailDialogController.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withMobileDialog()(PostDetailDialogController));
