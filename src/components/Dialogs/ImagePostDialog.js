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
import { DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import FileDropzone from './../Posts/FileDropzone';
import KProgressBar from './../UIC/KProgressBar';
import NewTextField from './../Posts/NewTextField';
import KButton from './../UIC/KButton';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    contentHolder: {
      backgroundColor: '#efefef',
      border: 'none',
      display: 'block',
      padding: theme.spacing.unit * 3,
    },
    bordered: {
      backgroundColor: '#efefef',
      border: '1px dashed #bcbcbc',
      padding: theme.spacing.unit * 2,
      flex: 1,
      height: '100%',
    },
    content: {
      backgroundColor: '#fff',
      padding: theme.spacing.unit * 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      //minHeight: 150,
      height: '100vh',
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

class ImagePostDialog extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes, postText, dataImageURL } = this.props;
        const p = postText && dataImageURL? {}: {disabled: true};

        return (
            <React.Fragment>
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
                    <NewTextField onChange={this.props.setPostText} setPostText={this.props.setPostText} 
                    postText={this.props.postText} />
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

export default withStyles(styles)(ImagePostDialog);