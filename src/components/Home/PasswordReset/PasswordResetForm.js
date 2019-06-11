import React from 'react';
import ProptTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FormControl, Input, InputLabel, FormControlLabel, Checkbox, Typography, Button } from '@material-ui/core';
import KButton from '../../UIC/KButton';

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
class PasswordResetForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rememberme: false,
        }
    }

    componentDidMount() {
        this.props.loadPasswordReset();
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
        const {password, password_confirmation} = this.state;
        const form = {email: this.props.user.account.email, token: this.props.user.account.token, password, password_confirmation};
        this.props.handlePasswordReset(form);
    }

    render() {
        const { classes } = this.props;
        if(this.props.user.account === null || typeof(this.props.user.account) === 'undefined' 
            || !this.props.user.account.hasOwnProperty('token')) {
            return (
                <Typography className={classes.reset}>
                    {this.props.user.errorMsg}
                </Typography>
            )
        } 
        return (
            <form className={classes.form} noValidate autoComplete="off">
                <Typography style={{fontSize: '1.3em'}} color="textSecondary">
                    Reset your password
                </Typography>
                {this.props.user.errorMsg && this.props.user.errorMsg !== 'resetform' && <Typography color="error">{this.props.user.errorMsg}</Typography>}
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="password" shrink className={classes.bootstrapFormLabel}>New Password</InputLabel>
                    <Input id="password" 
                        placeholder="" 
                        value={this.state.password} 
                        onChange={this.handleChange('password')} 
                        fullWidth={true}
                        disableUnderline={true}
                        type="password"
                        classes={{
                            root: classes.bootstrapRoot,
                            input: classes.bootstrapInput,
                        }} 
                    />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="password_confirmation" shrink className={classes.bootstrapFormLabel}>Confirm Password</InputLabel>
                    <Input id="password_confirmation" 
                        placeholder="" 
                        value={this.state.password_confirmation} 
                        onChange={this.handleChange('password_confirmation')} 
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
                    <KButton onClick={this.handleSubmit.bind(this)} label="Reset" size="small" />
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Typography>Don't have an account?<Button onClick={() => this.props.history.push('/')} color="primary" transparent>Sign Up</Button></Typography>
                    </div>
                </div>

            </form>
        )
    }
}

PasswordResetForm.propTypes = {
    classes: ProptTypes.object.isRequired,
}

export default withStyles(styles)(PasswordResetForm);