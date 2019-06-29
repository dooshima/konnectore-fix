import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { green } from '@material-ui/core/colors';
import ReactPlayer from 'react-player';
import Fab from '@material-ui/core/Fab';
import MetaContentSection from '../../widgets/meta/MetaContentSection';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    padding: theme.spacing.unit * 1,
    overflow: 'hidden',

  },

  paper: {
    position: 'absolute',
   backgroundColor:'#009688',
    color:'#ffffff',
    height:200,
    justifyContent: 'space-between',

  },
  papers:{
    position: 'absolute',
    left: '50%',
    top:'90%',
    height:200,
    transform: 'translate(-50%, -50%)'
  },
  picture: {
    position: 'absolute',
    top:'70%',
   height:'60%',
   width:'100%',
  },

  pape:{
    position: 'absolute',
    width: '100%',
    top:'150%',
    alignItems: 'center',
    // backgroundColor:'#fffaf1',
    backgroundImage: `url(/images/circles-aligned.png)`,
  },
  paps:{
    position: 'relative',
    left: 150,
  justifyContent: 'flex-end',
  alignItems: 'center',

  },
//   wrapper: {
//     width: '100%',
//     minHeight: '100vh',
//     display: 'flex',
//     justifyContent: 'flex-end',
//     position: 'relative',
//     backgroundImage: `url(/images/landing_bg.jpg)`,
//     backgroundSize: 'cover',
//     backgroundAttachment: 'scroll',
//     backgroundColor: '#fff',
//     [theme.breakpoints.down('md')]: {
//         justifyContent: 'center',
//         minHeight: 'auto',
//         flexDirection: 'column-reverse',
//         justifyContent: 'center',
//         alignItems: 'center',
//     }
// },

together:{
  backgroundImage: `url(/images/bg-with-sides.png)`,
},

  share: {
    position: 'absolute',
    width: '100%',
    top:'250%',
    marginLeft: 10,
    alignItems: 'center',

  },
  chat: {
    position: 'absolute',
    width: '100%',
    top:'330%',
    marginRight:50,
    // backgroundImage: `url(/images/bg-with-sides.png)`,

  },
  contest:{
    position: 'absolute',
    width: '100%',
    top:'420%',
    marginLeft:170,

  },

  about:{
    position: 'absolute',
    left: '50%',
    top:'530%',
    transform: 'translate(-50%, -50%)'
  },
  abouts:{
    position: 'absolute',
    left: '50%',
    top:'490%',
    transform: 'translate(-50%, -50%)'
  },
   pap: {
    marginTop: 80,
    marginLeft: 40,
    color:'#ffffff',

  },
  button:{
    borderRadius:16,
    padding:16,
    color:green,
    width: 180,
  },
  image: {
    maxWidth: '90%',
    maxHeight: '90%',
    display: 'block',

  },

  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '200%',
    maxHeight: '200%',
  },
 
  
}));


export default function AboutComponent() {
  const classes = useStyles();
  const links = [{label: "Home", route: "/"}, {label: "About Us", route: "/abouts"}];

  return (
      <div  className={classes.root}>
    {/* <MetaContentSection links={links}> */}
    <Paper >
        <Grid container spacing={2} className={classes.paper}>
        {/* <img src="/images/aboutUs.png" /> */}

            <Grid item xs container direction="column" spacing={2} className={classes.pap}>

              <Grid item xs>

                <Typography variant="h6" gutterBottom >
                Find and connect with old friends, make new friends, discover amazing talents an contest
                in talent shows and events to win BIG! 
                </Typography>

                <Typography variant="body2">
                 Konnectore is a talent showcasing and discovery paltform that create a socially  engaging 
                 environment for you. The platform exists to offer users a means to connect with other outstanding 
                 talents users and share in their rise to success
                </Typography>
              </Grid>

            

              {/* <Grid item>
              <Fab color="primary" variant="extended" aria-label="Delete" className={classes.fab}>
                  JOIN THIS CONTEST
                </Fab>
              </Grid> */}

            </Grid>
            
            <Grid item>
            <ButtonBase className={classes.pap}>
            <img className={classes.img} alt="complex" src="/images/logo-with-shadow.png"/>
            </ButtonBase>
        </Grid>
        </Grid>
        </Paper>
       
        <div className={classes.papers}>
          <Typography variant="h3"   align="center">Build Your  Profile</Typography>
            {' '}
            <Typography variant="body">
            Find and connect with old friends, make new friends, discover amazing talents an contest
                in talent shows and events to win BIG!  </Typography>

            <Grid item>
            <ButtonBase className={classes.picture}>
            <img className={classes.img} alt="complex" src="/images/about-one.png"/>
            </ButtonBase>
        </Grid>   
    </div>


    <div className={classes.pape}>
    <Typography variant="h3"  align="center">Share Media</Typography>
            {' '}
        <Typography variant="body1"  align="center">
            Find and connect with old friends, make new friends, discover amazing talents an
            contest in talent shows and events to win BIG! 
    </Typography>
    <br/>

    <Grid  className={classes.paps} >
      <Grid container spacing={3}>       
        <Grid item xs={6} sm={3}>

          <img className={classes.img} alt="complex" src="/images/about-05.png"/>
        </Grid>
        <Grid item xs={6} sm={3}>
        <img className={classes.img} alt="complex" src="/images/about-06.png"/>
        </Grid>
        <Grid item xs={6} sm={3}>
        <img className={classes.img} alt="complex" src="/images/share-media.png"/>
          
        </Grid>

      </Grid>
      </Grid>
    </div>

  <div className={classes.together}>  
    <Grid container className={classes.share} >
      
            <Grid item xs container direction="column" >
              <Grid item xs>
              <Typography variant="h3" gutterBottom>
                 Chat & Messaging With Friends
                </Typography>

                <Typography variant="body2" gutterBottom >
                Find and connect with old friends, make new friends, discover amazing talents an contest
                in talent shows and events to win BIG! 
                </Typography>

                
              </Grid>
            </Grid>
            
            <Grid item >
            <ButtonBase >
            <img className={classes.image} alt="complex" src="/images/bg-items-1.png" />
            </ButtonBase>
        </Grid>
        </Grid>

    <Grid container className={classes.chat}>
    <Grid item  xs container direction="column" >
            <ButtonBase >
            <img className={classes.image} alt="complex" src="/images/about-09.png" />
            </ButtonBase>
        </Grid>
      
            <Grid item xs container direction="column" >
              <Grid item xs>
              <Typography variant="h3" gutterBottom>
                Partcipate in contest and support great talents
                </Typography>

                <Typography variant="body2" gutterBottom >
                Find and connect with old friends, make new friends, discover amazing talents an contest
                in talent shows and events to win BIG! 
                </Typography>

                
              </Grid>
            </Grid>
          
        </Grid>
    </div> 

 <div className={classes.contest}>
          <Typography variant="h3" aligin="center">What are contest?</Typography>
            <Typography variant="h6" gutterBottom >
                Find and connect with old friends, make new friends, discover amazing talents an contest
                in talent shows and events to win BIG! 
                </Typography>
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
            {' '}
        <Grid container >
        <Grid item  xs container direction="column" >
              <Fab  variant="extended" aria-label="Delete" className={classes.button}>
                  Learn More
                </Fab>
        </Grid>
      
        <Grid item  xs container direction="column" >
              <Fab color="primary" variant="extended" aria-label="Delete" className={classes.button}>
                  Join a Contest
                </Fab>
        </Grid>
      
            </Grid>
          
        </div>

   <div className={classes.about}>
    <Grid container >
      
            <Grid item xs container direction="column" >
              <Grid item xs>
              <Typography variant="h3" gutterBottom>
                About The Stage
                </Typography>

                <Typography variant="body2" gutterBottom >
                Find and connect with old friends, make new friends, discover amazing talents an contest
                in talent shows and events to win BIG! 
                </Typography>

                
              </Grid>
            </Grid>
            
            <Grid item >
            <ButtonBase className={classes.abouts} >
            <img className={classes.image} alt="complex" src="/images/img-shakara.png" />
            </ButtonBase>
        </Grid>
      
        </Grid>
      
    </div>
         
    <Grid item  xs container direction="column"  >
              <Fab color="primary" variant="extended" className={classes.button}>
                View Contest
                </Fab>
        </Grid>
{/* </MetaContentSection>     */}
</div>
  );
}




