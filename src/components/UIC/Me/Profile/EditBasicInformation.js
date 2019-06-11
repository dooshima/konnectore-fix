import React from 'react';
import KCard from '../../KCard';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { CardContent, Typography, FormControl, InputLabel, Input, MenuItem, CardActions, Grid, CardHeader, Select } from '@material-ui/core';
import KBigButton from '../../KBigButton';
import KDatePicker from './KDatePicker';


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
    label: {
        fontSize: 12,
        marginBottom: 15,
    },
});

const EditBasicInformation = props => {
    const { classes, currentScreen, dob } = props;
    const sdate = props.dob;
    return (
        <div className={classes.main}>
        <div className={classes.wrapper}>
        <Grid container spacing={0}>
            <Grid item md={12}>
                <KCard className={classes.card}>
                    <CardHeader title="Basic Information" />
                    <CardContent className={classes.content}>
                        <Grid container spacing={2}>
                            <Grid item md={6} xs={12} sm={12} >
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
                            <Grid item md={6} xs={12} sm={12} >
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
                            <Grid item md={6} xs={12} sm={12} >
                            <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="gender" shrink className={classes.bootstrapFormLabel}>Gender</InputLabel>
                                        <Select id="gender"
                                            value={props.gender} 
                                            onChange={props.handleChange('gender')} 
                                            input={
                                                <Input
                                                    placeholder="Gender" 
                                                    value={props.gender} 
                                                    //onChange={props.handleChange} 
                                                    fullWidth={true}
                                                    disableUnderline={true}
                                                    classes={{
                                                        root: classes.bootstrapRoot,
                                                        input: classes.bootstrapInput,
                                                    }} 
                                                />
                                            }
                                        >
                                            <MenuItem value="">Gender</MenuItem>
                                            <MenuItem value="Male">Male</MenuItem>
                                            <MenuItem value="Female">Female</MenuItem>
                                        </Select>
                                </FormControl>
                            </Grid>
                            <Grid item md={6}>
                                
                            </Grid>
                            <Grid item md={12} xs={12} sm={12} >
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="bio" shrink className={classes.bootstrapFormLabel}>Bio</InputLabel>
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

EditBasicInformation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditBasicInformation);

/**
 * <FormControl className={classes.formControl}>
                                <Typography color="textSecondary" component="p" className={classes.label}>Date of birth</Typography>
                                    <KDatePicker
                                        handleDateChange={props.handleDateChange}
                                        dob={sdate}
                                        init={props.dob}
                                        some={`some${sdate}${props.dob}`}
                                    />
                                </FormControl>
 */