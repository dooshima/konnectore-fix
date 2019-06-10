import React from 'react';
import KCard from '../../KCard';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { CardContent, Typography, FormControl, InputLabel, Input, MenuItem, CardActions, Grid, CardHeader, Select } from '@material-ui/core';
import KBigButton from '../../KBigButton';
import SelectInput from '@material-ui/core/Select/SelectInput';
import KDatePicker from './KDatePicker1';
import { red } from '@material-ui/core/colors';
import Utility from '../../../../services/Utility';


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
        marginTop: 10,
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
    },
    kbutton: {
        backgroundColor: 'red',
    },
    refCountRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    refCount: {
        backgroundColor: '#F5F7F6',
        color: '#00A294',
        padding: 20,
        marginLeft: 10,
        borderRadius: 20,
        fontSize: 20,
        fontWeight: 800,
    }
});

const AccountReferrals = props => {
    const { classes, currentScreen, user } = props;
    const userData = Utility.isset(user.data)? user.data: {};
    return (
        <div className={classes.main}>
        <div className={classes.wrapper}>
        <Grid container spacing={0} className={classes.grid}>
            <Grid item md={12} className={classes.grid}>
                <KCard className={classes.card}>
                    <CardContent className={classes.content}>
                        <Grid container spacing={2} className={classes.grid}>
                            <Grid item md={6} style={{display: 'flex', alignItems: 'center',}}>
                                <Typography color="textSecondary"
                                //className={classes.bootstrapFormLabel}
                                >
                                    Referral Code
                                </Typography>
                            </Grid>
                            <Grid item md={6}className={classes.refCountRow}>
                                <Typography color="textSecondary">Your referral code is</Typography>
                                <span className={classes.refCount}>{userData.referralsCount}</span>
                            </Grid>
                            
                            <Grid item md={6} className={classes.grid}>
                                <Typography>Your referral code is</Typography>
                            </Grid>
                            <Grid item md={8} className={classes.grid}>
                                <FormControl className={classes.formControl}>
                                        <Input id="newPassword_confirmation" 
                                            placeholder=""
                                            type="text" 
                                            value={userData.referralID} 
                                            //onChange={props.handleChange('newPassword_confirmation')} 
                                            fullWidth={true}
                                            disableUnderline={true}
                                            classes={{
                                                root: classes.bootstrapRoot,
                                                input: classes.bootstrapInput,
                                            }} 
                                        />
                                </FormControl>
                            </Grid>
                            <Grid item md={4} className={classes.grid}>
                                <div className={classes.next}>
                                    <KBigButton className={classes.kBigButton} onClick={props.handleSubmit} label="Copy link" size="small" />
                                </div>
                            </Grid>

                            
                        </Grid>
                        
                    </CardContent>
                </KCard>
                
            </Grid>
        </Grid>
        </div>
        </div>
    )
};

AccountReferrals.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AccountReferrals);