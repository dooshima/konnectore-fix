import React from 'react';
import { Toolbar, Typography, Button, withStyles } from '@material-ui/core';
import SnackMessage from '../../widgets/alerts/SnackMessage';

const styles = theme => ({
    alertText: {
        color: 'white',
        fontSize: theme.typography.fontSize * 1.5,
        textTransform: 'none',
        fontWeight: 300,
        opacity: 0.8,
    },
    appBar: {
        backgroundColor: '#e19f47',
        border: 'none',
    },
    settingUp: {
        backgroundColor: '#00A294',
    },
    settingUpText: {
        color: 'white',
        textAlign: 'center',
        flex: 1,
    }
});

class OnboardToolbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
        }
    }

    resendConfirmation = (e) => {
        this.props.resendConfirmation(this.props.authToken)
        this.setState({open: true});
        e.preventDefault();
        e.stopPropagation();

    };

    handleClose = () => {
        this.setState({open: false});
    }

    render() {
        const { classes, userData } = this.props;
        return (
            <>
            {+userData.verified >= 1? null: <Toolbar className={classes.appBar} style={{justifyContent: 'center'}}>
                <Typography className={classes.alertText}>
                    Your account has not yet been activated. <Button type="button" onClick={this.resendConfirmation} className={classes.alertText} style={{textDecoration: 'underline'}}>Resend activation link</Button>
                </Typography>
                <SnackMessage open={this.state.open} handleClose={this.handleClose} message="Confirmation email resent." />
            </Toolbar>}
            <Toolbar className={classes.settingUp}>
                <Typography variant="h5" className={classes.settingUpText}>Finish setting up</Typography>
            </Toolbar>
            </>
        )
    }
}

export default withStyles(styles)(OnboardToolbar);