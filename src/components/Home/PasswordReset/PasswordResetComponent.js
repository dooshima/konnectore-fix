import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, CardHeader, CardContent, TextField, FormControl, InputLabel, Input, Typography, LinearProgress } from '@material-ui/core';
import { connect } from 'react-redux';
import PasswordResetForm from './PasswordResetForm';
import userActions from '../../../reducers/user/actions';
import KCard from '../../UIC/KCard';

const styles = theme => ({
    container: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: '#fff',
        overflowY: 'scroll',
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
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: 5,
        overflow: 'hidden',
    },
    pathImage: {
        width: '100%',
        height: 'auto',
        marginBottom: '-10px',
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
})
class PasswordResetCompoment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            form: 'signin',
        }
    }

    componentDidMount() {
        const match = this.props.match;
        this.props.loadPasswordReset(match.params.token)
    }

    toggleForm = (form) => {
        this.setState({form: form});
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    }

    handleSubmit = () => {
        
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
                    </div>
                    <CardContent>
                        <PasswordResetForm {...this.props} />
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

PasswordResetCompoment.propTypes = {
    classes: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
    return {
        //user: state.user,
        appLoading: state.app.isLoading,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        handlePasswordReset: form => {
            dispatch(userActions.handlePasswordReset(form));
        },
        loadPasswordReset: token => {
            dispatch(userActions.loadPasswordReset(token));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PasswordResetCompoment));