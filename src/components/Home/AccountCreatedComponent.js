import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PrimaryNavBar from '../PrimaryNavBar';
import { Typography } from '@material-ui/core';
import KBigButton from '../UIC/KBigButton';
import { withRouter } from 'react-router-dom';
import Server from './../../services/Server/Server';
import SnackMessage from '../../widgets/alerts/SnackMessage';

const styles = theme => ({
    header: {
        minHeight: 200,
        backgroundColor: '#00A294',
        backgroundImage: `url(/images/sign-up-center-bg.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    headerText: {
        color: 'white',
        marginBottom: 20,
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '3em',
        flexDirection: 'column',
    },
    title: {
        margin: 20,
    },
    desc: {
        textAlign: 'center',
    },
    link: {
        color: '#DEA750',
        fontStyle: 'underline',
        cursor: 'pointer',
    }
});

const KButtonLink = withRouter( ({history}) => {
    return <KBigButton
      onClick={() => history.push('/onboard')}
      label="Continue" size="small" />
});

const KLink = withRouter( ({history}) => {
    return <a
      onClick={() => history.push('/onboard')}
      label="Continue" size="small" />
});
class AccountCreatedComponent extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
        }
    }

    resendConfirmation = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    }

    render() {
        const { classes, user } = this.props;
        console.log(user);
        return (
            <div>
                <PrimaryNavBar loggedIn={false} handleLogin={() => {}} />
                <header className={classes.header}>
                    <Typography variant="h4" className={classes.headerText}>Your account has been created</Typography>
                </header>
                <div className={classes.content}>
                    <img src="/images/logo.png" style={{width: 50, height: 'auto',}} />
                    <Typography variant="title" className={classes.title}>
                        Thank you for signing up on Konnectore
                    </Typography>
                    <Typography className={classes.desc}>
                        We have sent an activation link to the email you provided. Please ensure you use 
                        the link to activate<br />your account in order to enjoy Konnectore’s full features
                    </Typography>

                    <Typography variant="title" className={classes.title}>
                        Didn’t get a link? <a onClick={this.resendConfirmation} className={classes.link}>Resend activation link</a>
                    </Typography>

                    <KButtonLink />
                    <SnackMessage open={this.state.open} handleClose={this.handleClose} message="Confirmation email resent." />
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(AccountCreatedComponent);