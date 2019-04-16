import React from 'react';
import PropTypes from 'prop-types';
import { List, ListSubheader, ListItem, ListItemIcon, ListItemText, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import BeachAccessIcon from '@material-ui/icons/History';
import EditLocationIcon from '@material-ui/icons/Motorcycle';
import StarsIcon from '@material-ui/icons/Autorenew';
import KPaper from '../UIC/KPaper';

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
        color: '#0000008a',
    },
    icon: {},
});

function MyContestsWidget(props) {
    const { classes, match } = props;
    return (
        <KPaper>
            <List subheader={<ListSubheader>CONTESTS</ListSubheader>} style={{textAlign: 'left'}} className={classes.root}>
                
                    <MenuItem className={classes.menuItem}
                        onClick={() => props.history.push(`${match.url}/account/edit`)}
                    >
                    <ListItemIcon className={classes.icon}>
                        <BeachAccessIcon />
                    </ListItemIcon>
                    <ListItemText classes={{ primary: classes.primary }} inset primary="My Contests" />
                    </MenuItem>
                
               
                    <MenuItem className={classes.menuItem}
                        onClick={() => props.history.push(`${match.url}/account/manage`)}
                    >
                    <ListItemIcon className={classes.icon}>
                        <EditLocationIcon />
                    </ListItemIcon>
                    <ListItemText classes={{ primary: classes.primary }} inset primary="Trending Contests" />
                    </MenuItem>
                
                    <MenuItem className={classes.menuItem} 
                        onClick={() => props.history.push(`${match.url}/account/contestant`)}
                    >
                    <ListItemIcon className={classes.icon}>
                        <StarsIcon />
                    </ListItemIcon>
                    <ListItemText classes={{ primary: classes.primary }} inset primary="See all contests" />
                    </MenuItem>
                
      </List>
      </KPaper>
)
    }

MyContestsWidget.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withRouter(withStyles(styles)(MyContestsWidget));