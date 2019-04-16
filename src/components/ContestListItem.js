import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActionArea, CardActions, CardMedia, Typography, Icon, withStyles } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import KPaper from './UIC/KPaper';
import { Link, withRouter } from 'react-router-dom';

const styles = theme => ({
    media: {
        height: theme.spacing.unit * 10,
    },
    title: {
        fontSize: theme.spacing.unit * 1.15,
        marginLeft: theme.spacing.unit * 1,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    item: {
        width: '33.3%',
    },
    link: {
        textDecoration: 'none',
        fontStyle: 'normal',
    }
})
function ContestListItem(props) {
    const { classes, item } = props;
    return (
        <KPaper square classes={classes.item}>
        <Link to={`/contest/${item.slug}`} className={classes.link}>
            <CardMedia
                image={item.coverImage}
                className={ classes.media }
            />
            <CardActions>
                <Typography className={classes.title}>{item.title}</Typography>                
            </CardActions>
        </Link>
        </KPaper>
    )
}

ContestListItem.propTypes = {
    title: PropTypes.string.isRequired,
    coverImage: PropTypes.string.isRequired,
    contestID: PropTypes.string,
    contest: PropTypes.object
}

export default withRouter(withStyles(styles)(ContestListItem));