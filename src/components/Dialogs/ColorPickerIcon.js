import React from 'react';
import { Fab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    color: {
        margin: 0,
        padding: 0,
        width: 25,
        minHeight: 20,
        height: 25,
        marginRight: 10,
    },
})
const ColorPickerIcon = ({classes, color, shadow, postTextColor, setPostTextColor}) => {
    return (
        <Fab 
            onClick={() => setPostTextColor(color)}
            className={classes.color} 
            color="primary" 
            size="small" 
            style={{backgroundColor: color, boxShadow: shadow,}} />
    )
}

export default withStyles(styles)(ColorPickerIcon);