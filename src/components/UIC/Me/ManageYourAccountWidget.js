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

function ManageYourAccountWidget(props) {
    const { classes } = props;
    return (
        <KPaper>
            <List subheader={<ListSubheader>MANAGER YOUR ACCOUNT</ListSubheader>} style={{textAlign: 'left'}} className={classes.root}>
                
                    <MenuItem className={classes.menuItem} classes={{ root: classes.primary }}>
                        <ListItemText classes={{ primary: classes.primary }} inset primary="Privacy Settings" />
                    </MenuItem>
                
               
                    <MenuItem className={classes.menuItem} classes={{ root: classes.primary }}>
                        <ListItemText classes={{ primary: classes.primary }} inset primary="Change Password" />
                    </MenuItem>
                
                    <MenuItem className={classes.menuItem} classes={{ root: classes.primary }}>
                        <ListItemText classes={{ primary: classes.primary }} inset primary="Referrals" />
                    </MenuItem>
                
      </List>
      </KPaper>
)
    }

ManageYourAccountWidget.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ManageYourAccountWidget);