import React from 'react';
import KCard from '../UIC/KCard';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { CardContent, Typography, FormControl, InputLabel, Input, List, Toolbar, Button, CardActions, Grid, ListItem } from '@material-ui/core';
import KButton from '../UIC/KButton';
import OnboardMenu from './OnboardMenu';
import KBigButtonOutlined from '../UIC/KBigButtonOutlined';
import KBigButton from '../UIC/KBigButton';
import Constants from '../../assets/Constants';

const styles = theme => ({
    main: {
        backgroundColor: '#f9fffc',
    },
    wrapper: {
        width: '80%',
        margin: '100px auto 20px'
    },
    card: {
        width: 'auto',
        //margin: '100px auto 20px',
        padding: 16,
        flexDirection: 'column',
        marginTop: 20,
    },
    formControl: {
        width: 200,
        marginTop: '1.8em',
        height: 200,
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundPosition: 'center',
        borderRadius: '50%',
    },
    picturePrompt: {
        position: 'absolute',
        bottom: '30%',
        textAlign: 'center',
        color: '#a2a2a2',
        fontSize: 15,
    },
    bootstrapRoot: {
        'label + &': {
          marginTop: theme.spacing.unit * 3,
        },
      },
    bootstrapInput: {
        borderRadius: 20,
        position: 'relative',
        backgroundColor: 'transparent',
        border: '1px solid transparent',
        fontSize: 14,
        color: '#a2a2a2',
        padding: '10px 12px',
        width: 200,
        height: 200,
        opacity: 0,
        cursor: 'pointer',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
          borderRadius: 20,
          borderColor: 'transparent',
          boxShadow: '0 0 0 0.2rem rgba(0,0,0,.01)',
        },
        '&::placeholder': {
            textOverflow: 'ellipsis !important',
            color: '#a2a2a2',
            fontSize: 14,
        }
      },
    bootstrapFormLabel: {
        fontSize: 16,
    },
    footer: {display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'},
    appBar: {
          backgroundColor: '#e19f47',
          border: 'none',
    },
    alertText: {
          color: 'white',
          fontSize: theme.typography.fontSize * 1.5,
          textTransform: 'none',
          fontWeight: 300,
          opacity: 0.8,
          
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    content: {
        marginBottom: 20,
    },
    next: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    span: {
        fontSize: theme.typography.fontSize,
        color: '#aaa',
    },
    listItem: {
        paddingTop: 0,
        paddingBottom: 0,
    },
    flexed: {
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    }
});

const AddYourPicture = props => {
    const { classes, currentScreen } = props;
    const avatar = props.avatar? `url(${props.avatar})`: `url(/images/addPicture.png)`;
    const active = (props.avatar)? false: true;
    return (
        <div className={classes.main}>
        <Toolbar className={classes.appBar} style={{justifyContent: 'center'}}>
            <Typography className={classes.alertText}>
                Your account has not yet been activated. <Button className={classes.alertText} style={{textDecoration: 'underline'}}>Resend activation link</Button>
            </Typography>
        </Toolbar>
        <div className={classes.wrapper}>
        <Grid container spacing={0}>
            <Grid item md={3}>
                <OnboardMenu currentScreen={currentScreen} />
            </Grid>
            <Grid item md={9} style={{paddingLeft: 80,}}>
                <Typography variant="h3" style={{fontSize: '2em', opacity: 0.8, marginBottom: '.6em'}}>
                    Let’s get you to stardom!
                </Typography>
                <Typography variant="title" color="textSecondary">
                    Put your best face forward. <span className={classes.span}>Choose a picture</span>
                </Typography>
                <KCard className={classes.card}>
                    <CardContent className={classes.content}>
                        <Typography color="error">{props.authError}</Typography>
                        <Grid container spacing={40}>
                            <Grid item md={5} className={classes.flexed}>
                                
                                <FormControl className={classes.formControl} style={{backgroundImage: avatar,}}>
                                        <Input id="firstname" 
                                            placeholder="Your name" 
                                            //value={props.avatar} 
                                            onChange={props.handleFileupload} 
                                            fullWidth={true}
                                            disableUnderline={true}
                                            classes={{
                                                root: classes.bootstrapRoot,
                                                input: classes.bootstrapInput,
                                            }}
                                            type="file"
                                        />
                                        <Typography component="h3" className={classes.picturePrompt} color="textSecondary">Choose a picture</Typography>
                                </FormControl>
                            </Grid>
                            <Grid item md={7} className={classes.flexed}>
                                <div>
                                    <Typography component="h4">Tips for selecting an image:</Typography>
                                    <List>
                                        <ListItem className={classes.listItem}>
                                            <Typography color="textSecondary">* Take a selfie with good lighting</Typography>
                                        </ListItem>
                                        <ListItem className={classes.listItem}>
                                            <Typography color="textSecondary">* You are the star, so its your just you in the selfie</Typography>
                                        </ListItem>
                                        <ListItem className={classes.listItem}>
                                            <Typography color="textSecondary">* When uploading, use compatible formats such as .png or .jpg</Typography>
                                        </ListItem>
                                        <ListItem className={classes.listItem}>
                                            <Typography color="textSecondary">* and be sure to smile!</Typography>
                                        </ListItem>
                                    </List>
                                </div>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions className={classes.actions}>
                        <div className={classes.next}>
                            <KBigButtonOutlined variant="outlined" onClick={() => props.setScreen('ChooseCategory')} label="Maybe later" size="small" />
                            <KBigButton disabled={active} onClick={() => props.setScreen('ChooseCategory')} label="Next" size="small" />
                        </div>
                    </CardActions>
                </KCard>
            </Grid>
        </Grid>
        </div>
        </div>
    )
};

AddYourPicture.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddYourPicture);