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
import { DialogContent, DialogContentText, DialogActions, DialogTitle, Typography, Fab } from '@material-ui/core';
import FileDropzone from './../Posts/FileDropzone';
import KProgressBar from './../UIC/KProgressBar';
import PostTextField from './../Posts/PostTextField';
import KButton from './../UIC/KButton';
import { withStyles } from '@material-ui/core';
import ColorPickerIcon from './ColorPickerIcon';

const styles = theme => ({
    contentHolder: {
      //backgroundColor: '#efefef',
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
      backgroundColor: 'transparent',
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
    },
    title: {
      margin: 0,
      padding: 0,
    },
    titleStyle: {
      padding: '20px 40px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    dContent: {
      padding: 0,
      margin: 0,
      //backgroundColor: '#efefef',
    },
    footer: {
      justifyContent: 'space-between',
    },
    color: {
      margin: 0,
      padding: 0,
      width: 25,
      minHeight: 20,
      height: 25,
    },
    colors: {
      paddingLeft: 20,
    },
    h4: {
      fontSize: 18,
      fontWeight: 300,
    }
  }); 

class TextPostDialog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          characters: 0,
        }
    }

    componentDidMount() {
      this.props.setType('text');
      console.log('increment view count text2');
    }

    setCharacterCount = text => {
      this.setState({characters: text.length});
    }

    render() {
        const { classes, postText, postTextColor } = this.props;
        const p = postText? {}: {disabled: true};
        
        return (
            <React.Fragment>
                <DialogTitle className={classes.title}>
                  <div className={classes.titleStyle}>
                    <Typography component="h4" className={classes.h4}>
                        What's on your mind?
                    </Typography>
                    <Typography component="big" className={classes.big}>
                        {140 - +this.state.characters} {'characters'} left
                    </Typography>
                  </div>
                </DialogTitle>
              <DialogContent className={classes.dContent} style={{backgroundColor: postTextColor}}>
                <div>
                  <div className={classes.contentHolder} style={{backgroundColor: postTextColor}}>
                      <div className={classes.content}>
                      <PostTextField disableUnderline={true} onChange={this.props.setPostText} setPostText={this.props.setPostText} 
                    postText={this.props.postText} setCharacterCount={this.setCharacterCount} />
                      </div>
                  </div>
                   
                </div>
              </DialogContent>
              <KProgressBar progressNumber={this.props.progressNumber} show={this.props.isUploading} />
              <DialogActions className={classes.footer}> 
                <div className={classes.colors}>
                  {['#ffb91b', '#e6464c', '#95b4ff', '#00da70', 
                    '#ff9497', '#b796ff', '#ff91f4', '#3fb6ff'].map(color => {
                      return <ColorPickerIcon color={color} shadow={color === '#fff'? '1px 2px 2': 'none'} 
                        setPostTextColor={this.props.setPostTextColor}
                        postTextColor={this.props.postTextColor} />
                    })
                    }
                </div>
                <div className={classes.actions}>
                <KButton onClick={this.props.handleClose} upper={false}  color="secondary" label="Cancel" size="small" />
                <KButton onClick={this.props.uploadMedia} {...p} label="Share post" size="small" />
                </div>
              </DialogActions>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(TextPostDialog);