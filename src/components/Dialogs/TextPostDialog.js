/**
 * This file creates a dialog content component for image post which complements the dialog manager
 * 
 * The ImagePostDialog component is a controlled component with the following required state objects or values:
 * 
 * 1. dataImageURL
 * 2. setting the dataImageURL
 * 3. setting the postFormData
 * 4. accessing and providing the uploadProgress number
 * 5. setting the postText
 * 6. Calling the sharePost action 
 * 
 */
import React from 'react';
import { DialogContent, DialogContentText, DialogActions, DialogTitle, Typography } from '@material-ui/core';
import FileDropzone from './../Posts/FileDropzone';
import KProgressBar from './../UIC/KProgressBar';
import PostTextField from './../Posts/PostTextField';
import KButton from './../UIC/KButton';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    contentHolder: {
      backgroundColor: '#efefef',
      border: 'none',
      display: 'block',
      padding: theme.spacing.unit * 2,
    },
    bordered: {
      backgroundColor: 'transparent',
      border: 'none',
      padding: 0,
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
      width: '50%',
      maxHeight: 'max-content',
    },
    root: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
    }
  }); 

class TextPostDialog extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes, postText } = this.props;
        const p = postText? {}: {disabled: true};

        return (
            <React.Fragment>
                <DialogTitle>
                    <Typography component="h4" variant="p">
                        What's on your mind?
                    </Typography>
                    <Typography component="p">
                        {125} {'characters'} left
                    </Typography>
                </DialogTitle>
              <DialogContent>
                <div>
                  <div className={classes.contentHolder}>
                    <section className={classes.bordered}>
                      <div className={classes.content}>
                      <PostTextField onChange={this.props.setPostText} setPostText={this.props.setPostText} 
                    postText={this.props.postText} />
                      </div>
                    </section>
                  </div>
                  <KProgressBar progressNumber={this.props.progressNumber} show={this.props.isUploading} />
                  <div>
                    
                  </div>
                </div>
              </DialogContent>
              <DialogActions>
                <KButton onClick={this.props.handleClose} upper={false}  color="secondary" label="Cancel" size="small" />
                <KButton onClick={this.props.uploadMedia} {...p} label="Share post" size="small" />
              </DialogActions>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(TextPostDialog);