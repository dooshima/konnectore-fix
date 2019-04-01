import React from 'react';
import ProptTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FormControl, Input, InputLabel, FormControlLabel, Checkbox, Typography, Button } from '@material-ui/core';
import KButton from './../UIC/KButton';

const styles = theme => ({
    form: {
        width: 400,
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
      bootstrapFormLabel: {
        fontSize: 16,
      },
      footer: {display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'},
})
class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rememberme: false,
        }
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
    };

    handleCheckboxChange = name => event => {
        this.setState({ [name]: event.target.checked });
      };

    render() {
        const { classes } = this.props;
        return (
            <form className={classes.form} noValidate autoComplete="off">
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="email" shrink className={classes.bootstrapFormLabel}>Email Address</InputLabel>
                    <Input id="email" 
                        placeholder="yourname@domain.com" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        fullWidth={true}
                        disableUnderline={true}
                        classes={{
                            root: classes.bootstrapRoot,
                            input: classes.bootstrapInput,
                        }} 
                    />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="password" shrink className={classes.bootstrapFormLabel}>Choose Password</InputLabel>
                    <Input id="password" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        fullWidth={true}
                        type="password"
                        disableUnderline={true}
                        classes={{
                            root: classes.bootstrapRoot,
                            input: classes.bootstrapInput,
                        }} 
                    />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="repassword" shrink className={classes.bootstrapFormLabel}>Retype Password</InputLabel>
                    <Input id="repassword" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        fullWidth={true}
                        type="password"
                        disableUnderline={true}
                        classes={{
                            root: classes.bootstrapRoot,
                            input: classes.bootstrapInput,
                        }} 
                    />
                </FormControl>
                <FormControl component="fieldset" className={classes.formControl1}>
                    <FormControlLabel
                    control={
                        <Checkbox checked={this.state.rememberme} onChange={this.handleCheckboxChange('rememberme')} value="rememberme" />
                    }
                    color="primary"
                    label="Remember me on this device"
                    />
                </FormControl>
                <div className={classes.footer}>
                    <KButton label="Sign In" size="small" />
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Typography>Don't have an account?<Button onClick={() => this.props.toggleForm('signin')} color="primary" transparent>Sign In</Button></Typography>
                    </div>
                </div>

            </form>
        )
    }
}

SignUp.propTypes = {
    classes: ProptTypes.object.isRequired,
}

export default withStyles(styles)(SignUp);