import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop:60,
    margin:30,
  },
  papers: {
    margin: 'auto',
    maxWidth: 800,
  },
  pap: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1500,
  },
 
}));



export default function Singer() {
    const classes = useStyles();

  return (
    <div className={classes.root}>
    <Grid container spacing={2} className={classes.pap}>
    <Grid item xs={4}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
            <img className={classes.img} alt="complex" src="/contests/banner-img.png" />
            </ButtonBase>
          </Grid>
          <Grid item xs={6} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
</Grid>
        <Grid item xs={4}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
            <img className={classes.img} alt="complex" src="/contests/banner-img.png" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
</Grid>

<Grid item xs={4} >
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
            <img className={classes.img} alt="complex" src="/contests/banner-img.png" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      </Grid>
</Grid>

<div className={classes.paper}>
            {' '}
    </div>
<Grid container spacing={2} className={classes.pap}>
<Grid item xs={4}>
  <Paper className={classes.paper}>
    <Grid container spacing={2}>
      <Grid item>
        <ButtonBase className={classes.image}>
        <img className={classes.img} alt="complex" src="/contests/banner-img.png" />
        </ButtonBase>
      </Grid>
      <Grid item xs={6} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1">
              Standard license
            </Typography>
            <Typography variant="body2" gutterBottom>
              Full resolution 1920x1080 • JPEG
            </Typography>
            <Typography variant="body2" color="textSecondary">
              ID: 1030114
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" style={{ cursor: 'pointer' }}>
              Remove
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">$19.00</Typography>
        </Grid>
      </Grid>
    </Grid>
  </Paper>
</Grid>
    <Grid item xs={4}>
  <Paper className={classes.paper}>
    <Grid container spacing={2}>
      <Grid item>
        <ButtonBase className={classes.image}>
        <img className={classes.img} alt="complex" src="/contests/banner-img.png" />
        </ButtonBase>
      </Grid>
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1">
              Standard license
            </Typography>
            <Typography variant="body2" gutterBottom>
              Full resolution 1920x1080 • JPEG
            </Typography>
            <Typography variant="body2" color="textSecondary">
              ID: 1030114
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" style={{ cursor: 'pointer' }}>
              Remove
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">$19.00</Typography>
        </Grid>
      </Grid>
    </Grid>
  </Paper>
</Grid>

<Grid item xs={4} >
  <Paper className={classes.paper}>
    <Grid container spacing={2}>
      <Grid item>
        <ButtonBase className={classes.image}>
        <img className={classes.img} alt="complex" src="/contests/banner-img.png" />
        </ButtonBase>
      </Grid>
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1">
              Standard license
            </Typography>
            <Typography variant="body2" gutterBottom>
              Full resolution 1920x1080 • JPEG
            </Typography>
            <Typography variant="body2" color="textSecondary">
              ID: 1030114
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" style={{ cursor: 'pointer' }}>
              Remove
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">$19.00</Typography>
        </Grid>
      </Grid>
    </Grid>
  </Paper>
  </Grid>
</Grid>

</div>
      
  );
}