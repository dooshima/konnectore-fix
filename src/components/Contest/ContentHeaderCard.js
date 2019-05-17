import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import KButton from '../UIC/KButton';

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
    backgroundColor: 'transparent',
    padding: `${theme.spacing.unit * 2}px !important`,
  },
  title: {
    color: 'white',
    fontWeight: 700,
    fontSize: theme.typography.fontSize * 1.5,
  }
});

const ContestHeaderCard = props => {
  const { classes, editProfile, contest } = props;
  const KButtonLink = withRouter( ({history}) => {
    if(contest.followed == -1) {
      return <KButton
      onClick={() => props.handleFollowContest()}
      label="Login to Follow" disabled={true} size="small" />
    } else if(contest.followed > 0) {
      return <KButton
      onClick={() => props.handleFollowContest()}
      label="Following" disabled size="small" />
    } else {
    return <KButton
      onClick={() => props.handleFollowContest()}
      label="Follow" size="small" />
    }
  });
  
  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.paper} style={{backgroundImage: `url('/contests/cover-img-grp.png')`}}>
        <Grid container spacing={8}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="/images/post-img.png" />
            </ButtonBase>
          </Grid>
          <Grid item xs={8} sm className={classes.summary}>
                <Typography gutterBottom component="h5" className={classes.title}>
                  The Sctage
                </Typography>
                <KButtonLink />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

ContestHeaderCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContestHeaderCard);
