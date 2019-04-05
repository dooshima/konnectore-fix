import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, CardHeader, CardContent, TextField, FormControl, InputLabel, Input, Typography } from '@material-ui/core';
import KCard from './../../components/UIC/KCard';
import SocialButtons from './SocialButtons';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ResetPassword from './ResetPassword';

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
    }
})
class HomeCompoment extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            form: 'signin',
        }
    }

    toggleForm = (form) => {
        console.log(form)
        this.setState({form: form});
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
            <div className={classes.wrapper}>
                <KCard square={false} className={classes.formDiv}>
                    <div className={classes.buttons}>
                        <img src="/images/logo.png" 
                        style={{width: 70, border: 'solid 5px #24b573', 
                        borderRadius: 10, padding: 10, margin: '2.4em auto 1.5em'}} />
                        {this.state.form !== 'reset' && <SocialButtons />}
                    </div>
                    <CardContent>
                        {this.state.form === 'signin' && <SignIn toggleForm={this.toggleForm} />}
                        {this.state.form === 'signup' && <SignUp toggleForm={this.toggleForm} />}
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

export default withStyles(styles)(HomeCompoment);