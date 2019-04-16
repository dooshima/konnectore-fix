import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActionArea, CardActions, CardMedia, Typography, Icon, withStyles } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
    media: {
        height: theme.spacing.unit * 10,
    },
    title: {
        fontSize: theme.spacing.unit * 1.15,
        marginLeft: theme.spacing.unit * 1,
    }
})
function ContestListItem(props) {
    const { classes, item } = props;
    return (
        <Card square>
            <CardMedia
                image={item.coverImage}
                className={ classes.media }
            />
            <CardActions>
                <Typography className={classes.title}>{item.title}</Typography>                
            </CardActions>
        </Card>
    )
}

ContestListItem.propTypes = {
    title: PropTypes.string.isRequired,
    coverImage: PropTypes.string.isRequired,
    contestID: PropTypes.string,
    contest: PropTypes.object
}

export default withStyles(styles)(ContestListItem);