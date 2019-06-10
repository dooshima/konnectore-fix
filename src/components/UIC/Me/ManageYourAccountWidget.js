import React from 'react';
import PropTypes from 'prop-types';
import { List, ListSubheader, ListItemText, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import KPaper from '../KPaper';
import { Link } from 'react-router-dom';

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
        color: '#0000008a',
    },
    icon: {},
    link: {
        color: '#0000008a',
        cursor: 'pointer',
        textDecoration: 'none',
        fontStyle: 'normal',
        '&:focus, &:hover': {
            color: theme.palette.primary.main,
            textDecoration: 'none',
            fontStyle: 'normal',
        }
    }
});

function ManageYourAccountWidget(props) {
    const { classes } = props;
    return (
        <KPaper>
            <List subheader={<ListSubheader>MANAGER YOUR ACCOUNT</ListSubheader>} style={{textAlign: 'left'}} className={classes.root}>
                
                    <MenuItem className={classes.menuItem} classes={{ root: classes.primary }}>
                        <ListItemText classes={{ primary: classes.primary }} inset primary={
                            <Link to="/me/account/privacy-settings" className={classes.link}>Privacy Settings</Link>
                        } />
                    </MenuItem>
                
               
                    <MenuItem className={classes.menuItem} classes={{ root: classes.primary }}>
                        <ListItemText classes={{ primary: classes.primary }} inset primary={
                            <Link to="/me/account/change-password" className={classes.link}>Change Password</Link>
                        } />
                    </MenuItem>
                
                    <MenuItem className={classes.menuItem} classes={{ root: classes.primary }}>
                        <ListItemText classes={{ primary: classes.primary }} inset primary={
                            <Link to="/me/account/notifications" className={classes.link}>Notifications</Link>
                        } />
                    </MenuItem>

                    <MenuItem className={classes.menuItem} classes={{ root: classes.primary }}>
                        <ListItemText classes={{ primary: classes.primary }} inset primary={
                            <Link to="/me/account/referrals" className={classes.link}>Referrals</Link>
                        } />
                    </MenuItem>
                
      </List>
      </KPaper>
)
    }

ManageYourAccountWidget.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ManageYourAccountWidget);