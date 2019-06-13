import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, CardHeader, CardContent, TextField, FormControl, InputLabel, Input, Typography, LinearProgress, createMuiTheme } from '@material-ui/core';
import KCard from './../../components/UIC/KCard';
import SocialButtons from './SocialButtons';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ResetPassword from './ResetPassword';
import Auth from '../../services/Auth/Auth';
import userActions from '../../reducers/user/actions';
import { connect } from 'react-redux';

const theme = createMuiTheme({
    spacing: 10,
  });

const styles = {
    container: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: '#fff',
        overflowY: 'scroll',
        [theme.breakpoints.down('md')]: {
            position: 'relative',
        }
    },
    formDiv: {
        minHeight: 500,
        width: theme.spacing.unit * 50,
        //maxWidth: '40%',
        borderRadius: 20,
        position: 'relative',
        margin: 100,    
        zIndex: 10,
        flexDirection: 'column',
        //display: 'flex',
        //justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            width: '90%',
            borderRadius: 10,
            minHeight: 'auto',
            margin: '5%',
            padding: 0,
        },
    },
    wrapper: {
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'relative',
        backgroundImage: `url(/images/landing_bg.jpg)`,
        backgroundSize: 'cover',
        backgroundAttachment: 'scroll',
        backgroundColor: '#fff',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center',
            minHeight: 'auto',
            flexDirection: 'column-reverse',
            justifyContent: 'center',
            alignItems: 'center',
        }
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: 5,
        overflow: 'hidden',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center',
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
        }
    },
    pathImage: {
        width: '100%',
        height: 'auto',
        marginBottom: '-10px',
        [theme.breakpoints.down('md')]: {
            display: 'none',
        }
    },
    buttons: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    introText: {
        position: 'absolute',
        zIndex: 12,
        left: 50,
        bottom: 125,
        color: 'white',
        lineHeight: '50px',
        [theme.breakpoints.down('md')]: {
            position: 'static',
            left: 0,
            bottom: 0,
            lineHeight: '35px',
            fontSize: 28,
            textAlign: 'center',
            paddingTop: 30,
            fontWeight: '800',
            color: '#24b573',
        }
    },
    linearColorPrimary: {
        backgroundColor: '#b2dfdb',
      },
      linearBarColorPrimary: {
        backgroundColor: '#00695c',
      },
      loaderHolder: {
        flex: 1,
        marginBottom: theme.spacing.unit * 0,
      }
};

class HomeCompoment extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            form: 'signin',
        }
    }

    componentDidMount() {
        //this.props.clearUserCache();
        
    }

    toggleForm = (form) => {
        this.setState({form: form});
    }

    signup = data => {
        Auth.signup(data);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
            {
            (this.props.authLoading || this.props.appLoading) && <div className={classes.loaderHolder}><LinearProgress
            classes={{
                colorPrimary: classes.linearColorPrimary,
                barColorPrimary: classes.linearBarColorPrimary,
            }}
            /></div>
            }
            <div className={classes.wrapper}>
                <KCard square={false} className={classes.formDiv}>
                    <div className={classes.buttons}>
                        <img src="/images/logo.png" 
                        style={{width: 70, border: 'solid 5px #24b573', 
                        borderRadius: 10, padding: 10, margin: '2.4em auto 1.5em'}} />
                        {this.state.form !== 'reset' && <SocialButtons />}
                    </div>
                    <CardContent>
                        {this.state.form === 'signin' && <SignIn toggleForm={this.toggleForm} signin={this.signin} {...this.props} />}
                        {this.state.form === 'signup' && <SignUp toggleForm={this.toggleForm} signup={this.signup} {...this.props} />}
                        {this.state.form === 'reset' && <ResetPassword toggleForm={this.toggleForm} />}
                    </CardContent>
                    
                </KCard>
                
                <div className={classes.bottomContainer}>
                    <img src="/images/path-home.png" className={classes.pathImage} />
                    <Typography variant="h3" className={classes.introText}>
                        The world is waiting to see<br/> what you’ve got!
                    </Typography>
                </div>
            </div>   
            </div>
        )
    }
}

HomeCompoment.propTypes = {
    classes: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
    return {
        signupSuccessful: state.user.account.hasOwnProperty('id'),
        userAccount: state.user.account,
        authError: state.user.errorMsg,
        authLoading: state.user.isLoading,
        usernameExists: state.user.available,
        authRedirect: state.user.signupRedirect,
        userData: state.user.data,
        appLoading: state.app.isLoading,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        handleSignup: data => {
            dispatch(userActions.handleSignup(data));
        },
        clearUserCache: () => {
            dispatch(userActions.clearUserCache());
        },
        checkUsername: username => {
            dispatch(userActions.checkUsername(username));
        },
        handleLogin: (email, password) => {
            dispatch(userActions.handleLogin(email, password));
        },
        authSignupSuccess: account => {
            dispatch(userActions.authSignupSuccess(account));
        },
        authSignupRedirect: bol => {
            dispatch(userActions.authSignupRedirect(bol))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(HomeCompoment));