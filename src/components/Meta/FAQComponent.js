import React from 'react';
import MetaContentSection from '../../widgets/meta/MetaContentSection';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
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
    },
    papa: {
        float: 'left',
      },
  }));
  
  export default function FAQComponent() {
    const classes = useStyles();
        const links = [{label: "Home", route: "/"}, {label: "FAQ", route: "/faq"}];
        return (
            <div>
                <MetaContentSection links={links}>
                    <Typography variant="h3">Frequently Asked Questions</Typography>

                <Paper className={classes.paper}>
                <Typography align="left">Registering on Konnectore</Typography>
                <br></br>
                <Typography align="left">Connecting with friends</Typography>
                <br></br>
                <Typography align="left">Sharing content</Typography>
                <br></br>
                <Typography align="left">Building Your Profile</Typography>
                <br></br>
                <Typography align="left">Participating in a Contest</Typography>

                <Grid container spacing={2}>
      
      <Grid item>
        <Typography variant="subtitle1" align="right">Konnectore is a Platform that encourages Users to nurture and harness their talents. As such, it is very important that you disclose your true identity on Konnectore, and you must provide us with accurate and up to date information. Also, you must not impersonate someone else, and you cannot create an account for someone else unless you have their express permission.
        <br></br>
        <br></br>



      Konnectore is a Platform that encourages Users to nurture and harness their talents. As such, it is very important that you disclose your true identity on Konnectore, and you must provide us with accurate and up to date information. Also, you must not impersonate someone else, and you cannot create an account for someone else unless you have their express permission.</Typography>
      </Grid>
    </Grid>
            
        
      </Paper>
      </MetaContentSection>

            </div>
            
        
            
        )
    }


