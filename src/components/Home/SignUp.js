import React from 'react';
import ProptTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Redirect, withRouter } from 'react-router-dom';
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
        console.log(name, event.target.value)
        this.setState({
          [name]: event.target.value,
        });
    };

    handleCheckboxChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    signup = () => {
        this.props.handleSignup({email: this.state.email, password: this.state.password})
    }

    render() {
        const { classes } = this.props;
        if(this.props.signupSuccessful) {
            this.props.history.push("/signed-up");
        }
        return (
            <form className={classes.form} noValidate autoComplete="off">
                <Typography color="error" style={{textAlign: 'center'}}>{this.props.authError}</Typography>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="email" shrink className={classes.bootstrapFormLabel}>Email Address</InputLabel>
                    <Input id="email" 
                        placeholder="yourname@domain.com" 
                        value={this.state.email} 
                        onChange={this.handleChange('email')} 
                        fullWidth={true}
                        name="email"
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
                        value={this.state.password} 
                        onChange={this.handleChange('password')} 
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
                    <InputLabel htmlFor="repassword" shrink className={classes.bootstrapFormLabel}>Confirm Password</InputLabel>
                    <Input id="repassword" 
                        value={this.state.repassword} 
                        onChange={this.handleChange('repassword')} 
                        fullWidth={true}
                        type="password"
                        disableUnderline={true}
                        classes={{
                            root: classes.bootstrapRoot,
                            input: classes.bootstrapInput,
                        }} 
                    />
                </FormControl>
                <div className={classes.footer}>
                    <KButton onClick={this.signup} label="Sign Up" size="small" />
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Typography>Don't have an account?<Button onClick={() => this.props.toggleForm('signin')} color="primary" >Sign In</Button></Typography>
                    </div>
                </div>

            </form>
        )
    }
}

SignUp.propTypes = {
    classes: ProptTypes.object.isRequired,
}

export default withRouter(withStyles(styles)(SignUp));