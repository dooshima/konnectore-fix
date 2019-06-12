import React from 'react';
import KCard from '../UIC/KCard';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { CardContent, Typography, FormControl, InputLabel, Input, AppBar, Toolbar, Button, CardActions, Grid, Select, MenuItem, createMuiTheme } from '@material-ui/core';
import KButton from '../UIC/KButton';
import OnboardMenu from './OnboardMenu';
import KBigButton from '../UIC/KBigButton';
import OnboardToolbar from './OnboardToolbar';

const theme = createMuiTheme({
    spacing: 10,
})
const styles = {
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
        width: '100%',
        marginTop: '1.8em',
    },
    bootstrapRoot: {
        'label + &': {
          marginTop: theme.spacing.unit * 3,
        },
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
    bootstrapTextarea: {
        borderRadius: 10,
        position: 'relative',
        backgroundColor: '#f8f8f8',
        border: '1px solid transparent',
        fontSize: 14,
        color: '#a2a2a2',
        padding: '10px 12px',
        width: '80%',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
          borderRadius: 10,
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
    rightContent: {
        paddingLeft: 80,
        [theme.breakpoints.down('md')]: {
            paddingLeft: 0,
        }
    }
};

const PersonalInformation = props => {
    const { classes, currentScreen } = props;
    const active = (props.firstname && props.lastname && props.firstname.length > 2 && props.lastname.length > 2)? false: true;
    return (
        <div className={classes.main}>
        
        <OnboardToolbar {...props} />
        <div className={classes.wrapper}>
        <Grid container spacing={0}>
            <Grid item md={3} xs={12} sm={12}>
                <OnboardMenu currentScreen={currentScreen} />
            </Grid>
            <Grid item md={9} xs={12} sm={12}  className={classes.rightContent}>
                <Typography variant="h3" style={{fontSize: '2em', opacity: 0.8, marginBottom: '.6em'}}>
                    Let’s get you to stardom!
                </Typography>
                <Typography variant="title" color="textSecondary">
                    Build up your profile so your friends can connect with you. <span className={classes.span}>Choose as many as applicable</span>
                </Typography>
                <KCard className={classes.card}>
                    <CardContent className={classes.content}>
                        <Grid container spacing={16}>
                            <Grid item md={6} xs={12} sm={12}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="firstname" shrink className={classes.bootstrapFormLabel}>Firstname</InputLabel>
                                        <Input id="firstname" 
                                            placeholder="Your name" 
                                            value={props.firstname} 
                                            onChange={props.handleChange('firstname')} 
                                            fullWidth={true}
                                            disableUnderline={true}
                                            classes={{
                                                root: classes.bootstrapRoot,
                                                input: classes.bootstrapInput,
                                            }} 
                                        />
                                </FormControl>
                            </Grid>
                            <Grid item md={6} xs={12} sm={12}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="lastname" shrink className={classes.bootstrapFormLabel}>Lastname</InputLabel>
                                        <Input id="lastname" 
                                            placeholder="Your surname" 
                                            value={props.lastname} 
                                            onChange={props.handleChange('lastname')} 
                                            fullWidth={true}
                                            disableUnderline={true}
                                            classes={{
                                                root: classes.bootstrapRoot,
                                                input: classes.bootstrapInput,
                                            }} 
                                        />
                                </FormControl>
                            </Grid>
                            <Grid item md={12} xs={12} sm={12}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="bio" shrink className={classes.bootstrapFormLabel}>A little description about yourself and what you do so that people can connect with you</InputLabel>
                                        <Input id="bio" 
                                            placeholder="Your bio" 
                                            value={props.bio} 
                                            onChange={props.handleChange('bio')} 
                                            fullWidth={true}
                                            disableUnderline={true}
                                            classes={{
                                                root: classes.bootstrapRoot,
                                                input: classes.bootstrapTextarea,
                                            }}
                                            multiline
                                            rows={4}
                                            style={{borderRadius: 10,}}
                                        />
                                </FormControl>
                            </Grid>
                            {false && <Grid item md={6} xs={12} sm={12}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="usertype" shrink className={classes.bootstrapFormLabel}>Goal (Optional)</InputLabel>
                                        <Select 
                                            value={props.usertype} 
                                            onChange={props.handleChange('usertype')}
                                            input={<Input id="usertype" 
                                                
                                                 
                                                fullWidth={true}
                                                disableUnderline={true}
                                                classes={{
                                                    root: classes.bootstrapRoot,
                                                    input: classes.bootstrapInput,
                                                }} 
                                            />}
                                            >
                                            <MenuItem value="3">Workforce</MenuItem>
                                            <MenuItem value="4">Business</MenuItem>
                                            <MenuItem value="2">Regular User</MenuItem>
                                            </Select>
                                </FormControl>
                                </Grid>}
                                <Grid item md={6} xs={12} sm={12}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="referrer" shrink className={classes.bootstrapFormLabel}>Who referred you? (Enter Referrer ID) - Optional</InputLabel>
                                        <Input id="referrer" 
                                            placeholder="Your referrer ID" 
                                            value={props.referrer} 
                                            onChange={props.handleChange('referrer')} 
                                            fullWidth={true}
                                            disableUnderline={true}
                                            classes={{
                                                root: classes.bootstrapRoot,
                                                input: classes.bootstrapInput,
                                            }} 
                                        />
                                </FormControl>
                            </Grid>
                            
                        </Grid>
                        
                    </CardContent>
                    <CardActions className={classes.actions}>
                        
                    </CardActions>
                </KCard>
                <div className={classes.next}>
                    <KBigButton disabled={active} onClick={() => props.setScreen('AddYourPicture')} label="Next" size="small" />
                </div>
            </Grid>
        </Grid>
        </div>
        </div>
    )
};

PersonalInformation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PersonalInformation);