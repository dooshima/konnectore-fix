import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FormControl, InputBase, IconButton, Paper, FormLabel } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import { fade } from '@material-ui/core/styles/colorManipulator';
import KButton from './KButton';
import { Link } from 'react-router-dom';
import Auth from '../../services/Auth/Auth';

const theme = createMuiTheme()

const styles = {
  input: {
    position: 'relative',
    borderRadius: 18,
    backgroundColor: fade(theme.palette.common.black, 0.06),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.08),
    },
    marginBottom: theme.spacing.unit * 2,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      //marginLeft: theme.spacing.unit * 3,
      width: '100%',
    },
    
  },
  labelText: {
    fontSize: theme.spacing.unit * 1.4,
  },
  labelRoot: {
    display: 'flex', 
    textAlign: 'left',
    marginBottom: theme.spacing.unit * 1.3,
  },
  inputIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
    fontSize: theme.spacing.unit * 1.5
  },
  header: {
    marginBottom: theme.spacing.unit * 3,
  },
  headerAccess: {
    color: '#808080',
    fontWeight: 500,
  },
  headerIntro: {
    color: '#808080',
  },
  error: {
    marginBottom: theme.spacing.unit * 1.2,
  }
};

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        email: '',
        password: ''
      },
      error: '',
    }
  }

  handleChange = name => event => {
    let data = {...this.state.data, [name]: event.target.value}
    this.setState({
      data: data,
    });
    console.log(data);
  };

  handleInput(e, key) {
    console.log(e.target.value, key);
  }
  submit() {
    const data = this.state.data;
    const validate = Auth.login(data.email, data.password);
    if(validate !== true) {
      this.setState({error: validate.message});
      console.log(validate);
      return;
    }
    this.props.handleLogin(data);
  }

  render() {
  const { classes } = this.props;

  return (
      <form>
        <div className={classes.header}>
          <Typography component="h6" variant="" className={classes.headerAccess}>
            Sign In to Access Your Account
          </Typography>
          <Typography component="p" gutterBottom className={classes.headerIntro}>
            And share your talent with the world
          </Typography>
        </div>

        {this.state.error !== '' && <div>
          <Typography component="p" color="error" className={classes.error}>
            {this.state.error}
          </Typography>
        </div>}
        
        <div>
          <FormControl className={classes.labelRoot}>
            <FormLabel className={classes.labelText}>Email Address</FormLabel>
          </FormControl>
        </div>

        <div className={classes.input}>
          <IconButton className={classes.inputIcon}>
            <EmailIcon />
          </IconButton>
          <InputBase id="email" type="text" 
            value={this.state.data.email}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            onChange={this.handleChange('email')}
          placeholder={"Enter Your Email"} />
        </div>

        <div>
          <FormControl className={classes.labelRoot}>
            <FormLabel className={classes.labelText}>Password</FormLabel>
          </FormControl>
        </div>
        <div className={classes.input}>
            <IconButton className={classes.inputIcon}>
            <LockIcon />
            </IconButton>
            <InputBase id="password" type="password" 
            value={this.state.data.password}
            onChange={this.handleChange('password')}
            classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
            }}
            placeholder={"Type Your Password"} />
        </div>

        <div>
          <KButton onClick={this.submit.bind(this)} label="Login" size="small" />
        </div>

        <div>
          <Typography className={classes.headerIntro}>
            Don't have an account? <Link to="/signup" color="primary">Signup</Link>
          </Typography>
        </div>
      </form>
  );
          }
}

SignupForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignupForm);
