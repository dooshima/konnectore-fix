import React from 'react';
import PropTypes from 'prop-types';
import { List, ListSubheader, ListItem, ListItemIcon, ListItemText, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import StarsIcon from '@material-ui/icons/Stars';
import KPaper from '../KPaper';

const styles = theme => ({
    menuItem: {
        '&:focus, &:hover': {
          backgroundColor: theme.palette.common.white,
          '& $primary, & $icon': {
            color: theme.palette.primary.main,
          },
        },
    },
    primary: {
        paddingLeft: '0px !important',
    },
    icon: {},
});

function AccountInfoWidget(props) {
    const { classes, match } = props;
    return (
        <KPaper>
            <List subheader={<ListSubheader>ACCOUNT INFO</ListSubheader>} style={{textAlign: 'left'}} className={classes.root}>
                
                    <MenuItem className={classes.menuItem}
                        onClick={() => props.history.push(`${match.url}/account/edit`)}
                    >
                    <ListItemIcon className={classes.icon}>
                        <BeachAccessIcon />
                    </ListItemIcon>
                    <ListItemText classes={{ primary: classes.primary }} inset primary="Edit Personal Information" />
                    </MenuItem>
                
               
                    <MenuItem className={classes.menuItem}
                        onClick={() => props.history.push(`${match.url}/account/change-password`)}
                    >
                    <ListItemIcon className={classes.icon}>
                        <EditLocationIcon />
                    </ListItemIcon>
                    <ListItemText classes={{ primary: classes.primary }} inset primary="Manage Your Account" />
                    </MenuItem>
                
                    <MenuItem className={classes.menuItem} 
                        onClick={() => props.history.push(`${match.url}/account/contestant-data`)}
                    >
                    <ListItemIcon className={classes.icon}>
                        <StarsIcon />
                    </ListItemIcon>
                    <ListItemText classes={{ primary: classes.primary, root: classes.root }} inset primary="Contestant Data" />
                    </MenuItem>
                
      </List>
      </KPaper>
)
    }

AccountInfoWidget.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withRouter(withStyles(styles)(AccountInfoWidget));