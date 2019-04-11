import React from 'react';
import PropTypes from 'prop-types';
import { List, ListSubheader, ListItemText, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import KPaper from '../KPaper';

const styles = theme => ({
    menuItem: {
        '&:focus, &:hover': {
          backgroundColor: theme.palette.common.white,
          '& $primary, & $icon': {
            color: theme.palette.primary.main,
          },
        },
        '&:first-child': {
            paddingLeft: 10,
        }
    },
    primary: {
        paddingLeft: 0,
    },
    icon: {},
});

function EditPersonalInfoWidget(props) {
    const { classes } = props;
    return (
        <KPaper>
            <List subheader={<ListSubheader>EDIT PERSONAL INFORMATION</ListSubheader>} style={{textAlign: 'left'}} className={classes.root}>
                
                    <MenuItem className={classes.menuItem} classes={{ root: classes.primary }}>
                        <ListItemText classes={{ primary: classes.primary }} inset primary="Basic Information" />
                    </MenuItem>
                
               
                    <MenuItem className={classes.menuItem} classes={{ root: classes.primary }}>
                        <ListItemText classes={{ primary: classes.primary }} inset primary="Overview" />
                    </MenuItem>
                
                    <MenuItem className={classes.menuItem} classes={{ root: classes.primary }}>
                        <ListItemText classes={{ primary: classes.primary }} inset primary="Contact" />
                    </MenuItem>
                
      </List>
      </KPaper>
)
    }

EditPersonalInfoWidget.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(EditPersonalInfoWidget);