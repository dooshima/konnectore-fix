import React from 'react';
import { Toolbar, IconButton, Typography } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom';

const MeHeaderNav = props => {
    return (
        <Toolbar>
            <Link to="/me">
                <IconButton>
                    <ArrowBackIosIcon />               
                </IconButton>
                <Typography>
                    Back
                </Typography>
            </Link>
            <Typography component="h4">Edit Profile</Typography>
        </Toolbar>
    )
}

export default MeHeaderNav;