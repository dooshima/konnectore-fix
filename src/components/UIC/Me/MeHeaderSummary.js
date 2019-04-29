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
    position: 'relative',
    margin: 5,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    width: '100%',
    height: 'auto',
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
  summary: {
    backgroundColor: '#F2F7F4',
    borderRadius: 12,
    padding: `${theme.spacing.unit * 2}px !important`,
  },
  picker: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  avatar: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 100,
    opacity: 0,
    cursor: 'pointer',
  },
  alert: {
    padding: 5,
    backgroundColor: 'transparent',
    borderRadius: 10,
    position: 'absolute',
    marginRight: 20,
    color: 'white',
    top: '60%',
  }
});

const MeHeaderSummary = props => {
  const { classes, editProfile, user } = props;
  const avatar = Utility.getAvatar(props.user.data.avatar);
  const person = user.data;
  const fname = null !== person && typeof(person) !== 'undefined'? person.firstname: '';
  const lname = null !== person && typeof(person) !== 'undefined'? person.lastname: '';
  const fullName = fname + " " + lname;
  const KButtonLink = withRouter( ({history}) => {
    return <KButton
      onClick={() => history.push("/me/account/edit")}
      label="Edit" size="small" />
  });

  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        <Grid container spacing={8}>
          <Grid item className={classes.picker}>
            <ButtonBase className={classes.image}>
              <div className={classes.imageHolder} style={{backgroundImage: `url(${avatar})`}}>
                
              </div>
              
              <Typography color="textSecondary" className={classes.alert}>Click to change image</Typography>
            </ButtonBase>
            <input type="file" onChange={props.handleAvatarUpload} className={classes.avatar} />
            
          </Grid>
          <Grid item xs={8} sm container className={classes.summary}>
            
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography gutterBottom variant="h5" component="b">
                  { fullName }
                </Typography>
                <Typography gutterBottom>{ person.bio }</Typography>
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
              <KButtonLink />
            </Grid>
            
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

MeHeaderSummary.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MeHeaderSummary);
