import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Paper, withStyles, createMuiTheme } from '@material-ui/core';
import KLink from './KLink';
import { Link } from 'react-router-dom';

const theme = createMuiTheme();

const styles = {
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
    paper: {
        padding: theme.spacing.unit * 3,
        //boxShadow: `0px 2px 4px -1px rgba(0,0,0,0), 0px 4px 5px 0px rgba(0,0,0,0), 0px 1px 10px 0px rgba(0,0,0,0.12)`,
        boxShadow: '-1px 2px 8px -4px rgba(165,165,165,1)',
        textAlign: 'center',
    },
    link: {
        fontSize: theme.spacing.unit * 1.5,
        color: '#bcbcbc',
        lineHeight: '1.6em',
    },
    footer: {
        color: '#bcbcbc',
        marginTop: theme.spacing.unit * 4,
    }
}

function KFooter(props) {
    const { classes } = props;
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <Paper square={true} className={classes.paper}>
            <Typography component="p" className={classes.link}>
                <KLink filter="/about">About Us</KLink>{bull}
                {false && <KLink filter="/support">Support</KLink>}
                {false && <KLink filter="/press">Press</KLink>}
                {false && <KLink filter="/api">API</KLink>}
                {false && <KLink filter="/jobs">Jobs</KLink>}
                <KLink filter="/privacy">Privacy</KLink>{bull}
                <KLink filter="/terms">Terms</KLink>{bull}
                <KLink filter="/faq">FAQ</KLink>
                {false && <KLink filter="/directory">Directory</KLink>}
                {false && <KLink filter="/profiles">Profiles</KLink>}
                {false && <KLink filter="/hashtags">Hashtags</KLink>}
                {false && <KLink filter="/language">Language</KLink>}
            </Typography>

            <Typography component="h4" className={classes.footer}>
                <span>{insertEntity('&copy;')}</span> 2019 KONNECTORE
            </Typography>
        </Paper>
    )
}

KFooter.propTypes = {
    classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(KFooter);

const insertEntity = (val) => {
    return (<span dangerouslySetInnerHTML={{__html: val}}></span>);
}