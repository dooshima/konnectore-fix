import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Button } from '@material-ui/core';
import KButton from '../KButton';
import { withRouter } from 'react-router-dom';
import KButtonSmall from '../KButtonSmall';
import Utility from '../../../services/Utility';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 1,
    margin: 'auto',
    maxWidth: '100%',
  },
  image: {
    width: 150,
    height: 150,
    cursor: 'pointer',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    width: '80%',
    borderRadius: '50%',
  },
  summary: {
    backgroundColor: '#F2F7F4',
    borderRadius: 12,
    padding: `${theme.spacing.unit * 2}px !important`,
  },
  imageHolder: { 
    width: 140,
    height: 140,
    overflow: 'hidden',
    borderRadius: '50%',
    display: 'flex',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
});

const FriendHeaderSummary = props => {
  const { classes, currentUser, handleFollow, handleUnfollow } = props;
  const KButtonLink = withRouter( ({history}) => {
    return <KButton
      onClick={() => this.followFriend}
      label="Follow" size="small" />
  })
  const person = null !== currentUser && typeof(currentUser) !== 'undefined'? (null !== currentUser.user && typeof(currentUser.user) !== 'undefined'? currentUser.user: {}): {};
  const path = null !== person && typeof(person) !== 'undefined'? person.avatar: "";
  const avatar = Utility.getAvatar(path);
  const fname = null !== person && typeof(person) !== 'undefined'? person.firstname: '';
  const lname = null !== person && typeof(person) !== 'undefined'? person.lastname: '';
  const fullName = fname + " " + lname;
  
  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <ButtonBase className={classes.image}>
            <div className={classes.imageHolder} style={{backgroundImage: `url(${avatar})`}}>
                
                </div>
            </ButtonBase>
          </Grid>
          <Grid item xs={8} sm container className={classes.summary}>
            
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography gutterBottom variant="h5" component="b">
                  {fullName}
                </Typography>
                <Typography gutterBottom>{person.bio}</Typography>
              </Grid>
              <Grid item style={{display: 'flex', justifyContent: 'start'}}>
                <div style={{textAlign: 'center', marginRight: 20,}}>
                  <Typography>Followers</Typography>
                  <Typography component="span" style={{fontWeight: 900}}>{person.followersCount}</Typography>
                </div>

                <div style={{textAlign: 'center', marginRight: 20,}}>
                  <Typography>Following</Typography>
                  <Typography component="span" style={{fontWeight: 900}}>{person.followingsCount}</Typography>
                </div>

                <div style={{textAlign: 'center'}}>
                  <Typography>Contests</Typography>
                  <Typography component="span" style={{fontWeight: 900}}>{person.contestsCount}</Typography>
                </div>
              </Grid>
            </Grid>
            <Grid item>
            {person.following < 1 ? <KButtonSmall label="Follow" 
                size="small" onClick={() => handleFollow(person.id)} />: 
                <KButtonSmall label="Unfollow" collor="secondary"
                size="small" onClick={() => handleUnfollow(person.id)} />}
            </Grid>
            
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

FriendHeaderSummary.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FriendHeaderSummary);
