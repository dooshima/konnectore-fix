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
import Utility from '../../services/Utility';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 0,
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
    width: '80%',
  },
  summary: {
    backgroundColor: 'transparent',
    padding: `${theme.spacing.unit * 2}px !important`,
  },
  title: {
    //color: 'white',
    fontWeight: 700,
    fontSize: theme.typography.fontSize * 1.5,
  },
  status: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  stats: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  }
});

class ContentHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  handleFollowContest = () => {
    //console.log(this.props.contest, this.props.accessToken)
  }

  render() {

  const { classes, currentEdition } = this.props;
  //console.log(currentEdition)
  const KButtonLink = withRouter( ({history}) => {
    return <KButton
      onClick={this.handleFollowContest}
      label="Follow" size="small" />
  })
  return (
    <div className={classes.root}>
        <Grid container spacing={8}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="/contests/banner-img.png" />
            </ButtonBase>
          </Grid>
          <Grid item xs={8} sm container className={classes.summary}>
            <Grid item xs={8} className={classes.stats}>
                <Typography gutterBottom component="h5" className={classes.title}>
                  The Sctage 2019
                </Typography>
                <Typography color="textSecondary">1024 Contstants</Typography>
                <Typography color="textSecondary">
                    SUBMISSIONS 1st FEB to 1st MAR 2019
                </Typography>
                <Typography color="textSecondary">
                    VOTING 2nd MAR to 21st MAR 2019
                </Typography>
            </Grid>
            <Grid item xs={4} className={classes.status}>
                <Button color="primary" variant="contained">{ Utility.isset(currentEdition)? currentEdition.status: 'n/a' }</Button>
            </Grid>
          </Grid>
        </Grid>
    </div>
  );
  }
}

ContentHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContentHeader);
