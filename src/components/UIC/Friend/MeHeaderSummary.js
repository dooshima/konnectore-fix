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
import PostDetailDialogController from '../../Dialogs/PostDetailDialogController';
import ImagePostDetailDialog from '../../Dialogs/ImagePostDetailDialog';

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
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    width: '70%',
  },
  summary: {
    backgroundColor: '#F2F7F4',
    borderRadius: 12,
    padding: `${theme.spacing.unit * 2}px !important`,
  }
});

const MeHeaderSummary = props => {
  const { classes } = props;
  const [open, openDialog] = useState(false);
  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        <Grid container spacing={8}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="/images/avatar.png" />
            </ButtonBase>
          </Grid>
          <Grid item xs={8} sm container className={classes.summary}>
            
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography gutterBottom variant="h5" component="b">
                  Victor Omemu
                </Typography>
                <Typography gutterBottom>I dance for fun, but others find it entertaining. This is my user page for the stage contest, and with your votes I can win.</Typography>
              </Grid>
              <Grid item style={{display: 'flex', justifyContent: 'start'}}>
                <div style={{textAlign: 'center', marginRight: 20,}}>
                  <Typography style={{ cursor: 'pointer' }}>Followers</Typography>
                  <Typography component="span" style={{fontWeight: 900}}>345</Typography>
                </div>

                <div style={{textAlign: 'center', marginRight: 20,}}>
                  <Typography style={{ cursor: 'pointer' }}>Following</Typography>
                  <Typography component="span" style={{fontWeight: 900}}>345</Typography>
                </div>

                <div style={{textAlign: 'center'}}>
                  <Typography style={{ cursor: 'pointer' }}>Contests</Typography>
                  <Typography component="span" style={{fontWeight: 900}}>345</Typography>
                </div>
              </Grid>
            </Grid>
            <Grid item>
              <KButton
               onClick={() => openDialog(!open)}
               label="Follow" size="small" />

               <PostDetailDialogController open={open} openDialog={openDialog} />
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
