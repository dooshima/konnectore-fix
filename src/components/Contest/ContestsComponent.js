import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { green, orange } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import NavContest from './contestsComponent/NavContest';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop:60,
    margin:30,
  },
  papers: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 800,
    backgroundColor: '#FFA500',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 800,
  },
   pap: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1500,
  },
  button:{
    borderRadius:12,
    padding:6,
    color:green,
  },
  image: {
    width: 200,
    height: 200,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '200%',
    maxHeight: '200%',
  },
}));


export default function ContestsComponent() {
  const classes = useStyles();
    
  return (
    <div className={classes.root}>
      <Paper className={classes.papers}>
        <Grid container spacing={2}>
      
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  POPULAR
                </Typography>

                <Typography variant="body2" gutterBottom>
                 The Sctage 2019
                </Typography>

                <Typography variant="body2" color="textSecondary">
                  The 2019 edition of The Sctage Competition saw many of its users  last till the final
                  round, but only a talented few where able to make it through. 
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  11 Sept 2019
                </Typography>
              </Grid>

              <Grid item>
              <Fab color="primary" variant="extended" aria-label="Delete" className={classes.fab}>
                  JOIN THIS CONTEST
                </Fab>
              </Grid>

            </Grid>
            
            <Grid item>
            <ButtonBase className={classes.image}>
            <img className={classes.img} alt="complex" src="/contests/banner-img.png" />
            </ButtonBase>
        </Grid>
        </Grid>
        </Paper>
        
        <div className={classes.paper}>
          <h2>Latest Contest</h2>
            {' '}
    </div>

    <Grid className={classes.paper}>
      <Grid container spacing={3}>
       
        <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>

          <img className={classes.img} alt="complex" src="/contests/banner-img.png" />
         <Typography variant="body2" color="textSecondary">
                  The 2019 edition of The Sctage Competition saw many of its users  last till the final
                  round. 
                </Typography>
        </Paper>        
        </Grid>
        <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>
          <img className={classes.img} alt="complex" src="/contests/banner-img.png" />
          <Typography variant="body2" color="textSecondary">
                  The 2019 edition of The Sctage Competition saw many of its users  last till the final
                  round. 
                </Typography>
                </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>
          <img className={classes.img} alt="complex" src="/contests/banner-img.png" />
          <Typography variant="body2" color="textSecondary">
                  The 2019 edition of The Sctage Competition saw many of its users  last till the final
                  round. 
                </Typography>
              </Paper>
        </Grid>

        
        <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>

          <img className={classes.img} alt="complex" src="/contests/banner-img.png" />
          <Typography variant="body2" color="textSecondary">
                  The 2019 edition of The Sctage Competition saw many of its users  last till the final
                  round. 
          </Typography>
          </Paper>
        </Grid>
      </Grid>

      </Grid>


      <div className={classes.paper}>
          <h2>Find contests by categories</h2>
            {' '}
    </div>



      <div className={classes.paper}>
       <NavContest />
       </div>
    </div>     
  );
}
