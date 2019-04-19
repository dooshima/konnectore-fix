import React from 'react';
import KCard from '../../KCard';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { CardContent, Typography, FormControl, InputLabel, Input, MenuItem, CardActions, Grid, CardHeader, Select } from '@material-ui/core';
import KBigButton from '../../KBigButton';
import SelectInput from '@material-ui/core/Select/SelectInput';
import KDatePicker from './KDatePicker1';


const styles = theme => ({
    main: {
        backgroundColor: '#f9fffc',
    },
    wrapper: {
        margin: 0
    },
    card: {
        width: 'auto',
        //margin: '100px auto 20px',
        padding: 16,
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
    grid: {
        paddingTop: '0px !important',
        paddingBottom: '0px !important',
    }
});

const ChangePassword = props => {
    const { classes, currentScreen } = props;
    return (
        <div className={classes.main}>
        <div className={classes.wrapper}>
        <Grid container spacing={0} className={classes.grid}>
            <Grid item md={12} className={classes.grid}>
                <KCard className={classes.card}>
                    <CardHeader title="Change your password"
                        subheader={
                            props.user.errorMsg && props.user.errorMsg !== 'redirectme' && <Typography color="error">{props.user.errorMsg}</Typography>} />
                    <CardContent className={classes.content}>
                        <Grid container spacing={40} className={classes.grid}>
                            <Grid item md={6}className={classes.grid}>
                                <FormControl className={classes.formControl}>
                                    <Typography color="textSecondary"
                                    className={classes.bootstrapFormLabel}>
                                        Enter your current password
                                    </Typography>
                                </FormControl>
                            </Grid>
                            <Grid item md={6}className={classes.grid}>
                                <FormControl className={classes.formControl}>
                                        <Input id="password" 
                                            placeholder=""
                                            type="password" 
                                            value={props.password} 
                                            onChange={props.handleChange('password')} 
                                            fullWidth={true}
                                            disableUnderline={true}
                                            classes={{
                                                root: classes.bootstrapRoot,
                                                input: classes.bootstrapInput,
                                            }} 
                                        />
                                </FormControl>
                            </Grid>
                            
                            <Grid item md={6} className={classes.grid}>
                                <FormControl className={classes.formControl}>
                                    <Typography color="textSecondary"
                                    className={classes.bootstrapFormLabel}>
                                        Enter a new password
                                    </Typography>
                                </FormControl>
                            </Grid>
                            <Grid item md={6} className={classes.grid}>
                                <FormControl className={classes.formControl}>
                                        <Input id="newPassword" 
                                            placeholder=""
                                            type="password" 
                                            value={props.newPassword} 
                                            onChange={props.handleChange('newPassword')} 
                                            fullWidth={true}
                                            disableUnderline={true}
                                            classes={{
                                                root: classes.bootstrapRoot,
                                                input: classes.bootstrapInput,
                                            }} 
                                        />
                                </FormControl>
                            </Grid>

                            <Grid item md={6} className={classes.grid}>
                                <FormControl className={classes.formControl}>
                                    <Typography color="textSecondary"
                                    className={classes.bootstrapFormLabel}>
                                        Retype new password
                                    </Typography>
                                </FormControl>
                            </Grid>
                            <Grid item md={6} className={classes.grid}>
                                <FormControl className={classes.formControl}>
                                        <Input id="newPassword_confirmation" 
                                            placeholder=""
                                            type="password" 
                                            value={props.newPassword_confirmation} 
                                            onChange={props.handleChange('newPassword_confirmation')} 
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
                        <div className={classes.next}>
                            <KBigButton onClick={props.handleSubmit} label="Save" size="small" />
                        </div>
                    </CardActions>
                </KCard>
                
            </Grid>
        </Grid>
        </div>
        </div>
    )
};

ChangePassword.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChangePassword);