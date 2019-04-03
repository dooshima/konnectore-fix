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
import { DialogContent } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    content: {
      backgroundColor: '#efefef',
      border: 'none',
      display: 'flex',
      flexDirection: 'row',
      padding: theme.spacing.unit * 3,
    },
}); 

class ImagePostDetailDialog extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
              <DialogContent>
                <div className={classes.wrapper}>
                    <div>
                        <h2>Placeholder</h2>
                    </div>
                    <div>
                        <p>For comments</p>
                    </div>
                </div>
              </DialogContent>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(ImagePostDetailDialog);