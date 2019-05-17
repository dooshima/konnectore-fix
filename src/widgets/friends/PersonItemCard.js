import React from 'react';
import { Typography, Avatar } from '@material-ui/core';
import Utility from '../../services/Utility';

const PersonItemCard = (props) => {
    return (
        <div>
            <Avatar src={Utility.getAvatar(props.person.avatar)} />
            <Typography>{props.person.firstname} {props.person.lastname}</Typography>
        </div>
        
    )
};

export default PersonItemCard;