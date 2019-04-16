import React from 'react';
import PropTypes from 'prop-types';
import { List, ListSubheader, ListItemText, MenuItem, Typography, ListItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import KPaper from '../UIC/KPaper';

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
        fontSize: theme.typography.fontSize,
        color: '#0000008a',
    },
    icon: {},
    widgetText: {
        flexDirection: 'column',
    },
    categories: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        margin: '1em auto',
    }
});

function PageInfoWidget(props) {
    const { classes, match } = props;
    return (
        <KPaper>
            <List subheader={<ListSubheader>PAGE INFORMATION</ListSubheader>} style={{textAlign: 'left'}} className={classes.root}>
                <ListItem className={classes.widgetText}>
                <Typography color="textSecondary" className={classes.description}>
                    Over 40 Freestylers from over 20 African countries. 
                    Over $50, 000 worth prices to be won, including a brand new 
                    GA3S car + all-expenses paid trip for English Premiership 
                    halftime performance.
                </Typography>
                <div className={classes.categories}>
                    <Typography>Categor(ies) </Typography>&nbsp;
                    <Typography color="primary">Football</Typography>
                </div>
                </ListItem>
            </List>
            <List subheader={<ListSubheader>USEFUL LINKS</ListSubheader>} style={{textAlign: 'left'}} className={classes.root}>
                
                <MenuItem className={classes.menuItem} 
                    classes={{ root: classes.primary }}
                    onClick={() => props.history.push(`${match.url}/rules`)}>
                    <ListItemText color classes={{ primary: classes.primary }} inset primary="Rules of participation" />
                </MenuItem>
            
            
                <MenuItem className={classes.menuItem} 
                    classes={{ root: classes.primary }}
                    onClick={() => props.history.push(`${match.url}/guide`)}>
                    <ListItemText classes={{ primary: classes.primary }} inset primary="Help and guidelines" />
                </MenuItem>
            
                <MenuItem className={classes.menuItem} classes={{ root: classes.primary }}>
                    <ListItemText classes={{ primary: classes.primary }} inset primary="Visit our website" />
                </MenuItem>
            </List>
      </KPaper>
)
    }

PageInfoWidget.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PageInfoWidget);