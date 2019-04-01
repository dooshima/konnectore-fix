import React from 'react';
import KCard from '../UIC/KCard';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { CardContent, Typography, FormControl, InputLabel, Input, AppBar, Toolbar, Button, CardActions } from '@material-ui/core';
import KButton from '../UIC/KButton';

const styles = theme => ({
    main: {
        backgroundColor: '#f9fffc',
    },
    card: {
        width: '40%',
        margin: '100px auto 20px',
        padding: '100px 70px 20px',
        flexDirection: 'column',
    },
    formControl: {
        width: '100%',
        marginTop: '1.8em',
    },
    bootstrapRoot: {
        'label + &': {
          marginTop: theme.spacing.unit * 3,
        },
        width: '60%',
      },
    bootstrapInput: {
        borderRadius: 20,
        position: 'relative',
        backgroundColor: '#f8f8f8',
        border: '1px solid transparent',
        fontSize: 14,
        color: '#a2a2a2',
        padding: '10px 12px',
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
    }
});

const ChooseUsername = props => {
    const { classes } = props;
    return (
        <div className={classes.main}>
        
        <Toolbar className={classes.appBar} style={{justifyContent: 'center'}}>
            <Typography className={classes.alertText}>
                Your account has not yet been activated. <Button className={classes.alertText}>Resend activation link</Button>
            </Typography>
        </Toolbar>
        
        <KCard className={classes.card}>
            <CardContent className={classes.content}>
                <Typography variant="h3" style={{fontSize: '2em', opacity: 0.8, marginBottom: '.6em'}}>
                    Hi There,
                </Typography>
                <Typography variant="title" color="textSecondary">
                    Choose a unique username to get this ball rolling
                </Typography>

                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="username" shrink className={classes.bootstrapFormLabel}>Enter Username</InputLabel>
                    <div style={{display: 'flex',flexDirection: 'row', alignItems: 'center', paddingTop: 20,}}>
                        <Input id="username" 
                            placeholder="yourname@domain.com" 
                            value={props.username} 
                            onChange={props.handleUsernameChange} 
                            //fullWidth={true}
                            disableUnderline={true}
                            classes={{
                                root: classes.bootstrapRoot,
                                input: classes.bootstrapInput,
                            }} 
                        />
                        <Typography color="error" style={{marginLeft: 20,}}>
                            Sorry, that username has been taken
                        </Typography>
                    </div>
                </FormControl>
            </CardContent>
            <CardActions className={classes.actions}>
                <KButton onClick={() => props.setScreen('PersonalInformation')} label="Next" size="small" />
            </CardActions>
        </KCard>
        </div>
    )
};

ChooseUsername.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChooseUsername);