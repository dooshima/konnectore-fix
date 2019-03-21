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

class ImagePostDialog extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes, showProgressBar, formData, postText } = this.props;
        const activeBtn = formData && postText;
        const showBtn = activeBtn? {}: {disabled: true};

        return (
            <React.Fragment>
            <DialogContent>
                <DialogContentText>
                <div className={classes.contentHolder}>
                    <section className={classes.bordered}>
                    <div className={classes.content}>
                    <FileDropzone imageurl={this.props.imageurl} setImageUrl={this.props.setImageUrl} setFormdata={this.props.setFormdata} />
                    </div>
                    </section>
                </div>
                <KProgressBar progress={this.props.uploadprogress} show={showProgressBar} />
                <NewTextField showpostform={true} setPostText={this.setPostText} />
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <KButton onClick={this.handleClose} upper={false}  color="error" label="Cancel" size="small" />
                <KButton onClick={this.props.uploadMedia} {...showBtn} label="Share post" size="small" />
            </DialogActions>
          </React.Fragment>
        )
    }
}

export default withStyles(styles)(ImagePostDialog);