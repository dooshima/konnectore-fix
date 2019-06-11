import React from 'react';
import ProptTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FormControl, Input, InputLabel, FormControlLabel, Checkbox, Typography, Button } from '@material-ui/core';
import KButton from './../UIC/KButton';
import userActions from '../../reducers/user/actions';
import { connect } from 'react-redux';

const styles = theme => ({
    form: {
        width: 400,
        [theme.breakpoints.down('md')]: {
            width: '100%',
        }
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
          fontSize: '1.5em',
          color: '#04a294',
          margin: '2em',
          textAlign: 'center',
      }
})
class ResetPassword extends React.Component {
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

    handleSubmit = () => {
        console.log();
        this.props.createPasswordReset({email: this.state.email, base_url: window.location.href});
    }

    render() {
        const { classes } = this.props;
        if(this.props.user.errorMsg === 'passwordreset') {
            return (
                <Typography className={classes.reset}>
                    We've emailed your password reset link. Please check your email to continue.
                </Typography>
            )
        } 
        return (
            <form className={classes.form} noValidate autoComplete="off">
                <Typography>
                    Enter your email address in order to regain access to your account. 
                    We will send you a password reset link.
                </Typography>
                {this.props.user.errorMsg && <Typography color="error">{this.props.user.errorMsg}</Typography>}
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
                <div className={classes.footer}>
                    <KButton onClick={this.handleSubmit.bind(this)} label="Submit" size="small" />
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Typography>Don't have an account?<Button onClick={() => this.props.toggleForm('signup')} color="primary" transparent>Sign Up</Button></Typography>
                    </div>
                </div>

            </form>
        )
    }
}

ResetPassword.propTypes = {
    classes: ProptTypes.object.isRequired,
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        createPasswordReset: form => {
            dispatch(userActions.createPasswordReset(form));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ResetPassword));