import React from 'react';
import ProptTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FormControl, Input, InputLabel, FormControlLabel, Checkbox, Typography, Button, MenuItem, Link } from '@material-ui/core';
import KButton from './../UIC/KButton';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

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
      reset: {
          position: 'absolute',
          top: 0,
          right: 0,
          color: '#efefef',
          cursor: 'pointer',
      }
})
class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rememberme: false,
            email: "",
            password: "",
        }
    }

    handleChange = name => event => {
        console.log(name, event.target.name)
        this.setState({
          [name]: event.target.value,
        });
    };

    handleCheckboxChange = name => event => {
        this.setState({ [name]: event.target.checked });
      };

    signin = () => {
        console.log(this.state);
        this.props.handleLogin(this.state.email, this.state.password);
    }

    test = () => {
        const options = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ2MTQyYzc1ODcxYzc5YTE0NDkxYmE4ODJmMTU4ZmJkZDVlOGYxNWQ3OTE2ZDI1NGI2NThkM2YzZWQ3MTMwYjMyMGY3ZTBlNjNhMWIwNjllIn0.eyJhdWQiOiIyIiwianRpIjoiNDYxNDJjNzU4NzFjNzlhMTQ0OTFiYTg4MmYxNThmYmRkNWU4ZjE1ZDc5MTZkMjU0YjY1OGQzZjNlZDcxMzBiMzIwZjdlMGU2M2ExYjA2OWUiLCJpYXQiOjE1NTQ4NDU1MzMsIm5iZiI6MTU1NDg0NTUzMywiZXhwIjoxNTg2NDY3OTMzLCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.VPpaxHBVspK9JamOuT5DBtJu4BcLZ22aRHrnE5OnDF1mkc7AIml8s-0I6SgjLnU-oP9jrUlrMPaWFNItnygzEugjPYQcK1oEMnQgK6z2ar1mlnaVmzxdklOAFO_ZqBWf6bU7PeC5CckwLfKKQucePTTRuHgOnP0vcSHjT5ieLUdF4oxH1LeQeLWp229nrmIUsnoiztQyD7H1rjKr-zhXKz8cjcj9ipKGu8Ffabbes1ouL3SgyxKMrhN0X-b2ziwt2caRSMVRhqxaHsJ5Yf3tXTp7IxXmtMcaj35M3JUSxmkGz8dE6mD2tDHOLFgddwa2jm_5X7gUzjSsYqz5iKl0C-KD5fELz4NQj2bikpgvH7vc9o2RFxn--gVQ_Afc-x_C9-Hg2QpqNKTMcnzVIFd6Wkdk2jHXBpVi6spn3dftdhssop1QEYZZsQz6Cs1Bb7t-4XSuhshsacJwVza1tLp1ICrUwuzl7k3FyZjIwoPYWVWSk34MNCiZ07fhD_bXil9zRBSIkw_0t6mCS1IETu_KAccrWHqO0hyc3wgLljKcfEMZB4iOVpMg5vcPdgv1Aqp-ZeTgx4x0c2pUse8dGtSFkfwMYhL42PjpEZrxgJY0eGz72K_ylE3TbiTXfOD8gS_O48KJSJZFbPSL7B7bGaMB2nQIhTlpWtKp2PA60My53CY,'
        };
        axios.get('http://localhost/konnectoreapi/public/api/signin', {headers: options})
            .then( u => console.log(u))
    }

    render() {
        const { classes } = this.props;
        if(this.props.authRedirect) {
            const data = this.props.userData;
            if(!data.username) {
                this.props.authSignupSuccess({id: data.id, email: data.email});
                this.props.authSignupRedirect(false);
                this.props.history.push('/onboard/');
            } else {
                this.props.history.push('/me');
                this.props.authSignupRedirect(false);
            }
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
                        disableUnderline={true}
                        classes={{
                            root: classes.bootstrapRoot,
                            input: classes.bootstrapInput,
                        }} 
                    />
                </FormControl>
                <FormControl className={classes.formControl}>
                    
                    <InputLabel htmlFor="password" shrink 
                            className={classes.bootstrapFormLabel}>Password</InputLabel>
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
                    <Link className={classes.reset} component="span" onClick={() => this.props.toggleForm("reset")}>
                        <Typography color="textSecondary">Reset password?</Typography>
                    </Link>
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
                    <KButton onClick={this.signin} label="Sign In" size="small" />
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Typography>Don't have an account?<Button onClick={() => this.props.toggleForm('signup')} color="primary">Sign Up</Button></Typography>
                    </div>
                </div>

            </form>
        )
    }
}

SignIn.propTypes = {
    classes: ProptTypes.object.isRequired,
}

export default withRouter(withStyles(styles)(SignIn));