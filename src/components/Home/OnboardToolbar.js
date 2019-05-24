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
    }
});

class OnboardToolbar extends React.Component {
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
        const { classes } = this.props;
        return (
            <Toolbar className={classes.appBar} style={{justifyContent: 'center'}}>
                <Typography className={classes.alertText}>
                    Your account has not yet been activated. <Button onClick={this.resendConfirmation} className={classes.alertText} style={{textDecoration: 'underline'}}>Resend activation link</Button>
                </Typography>
                <SnackMessage open={this.state.open} handleClose={this.handleClose} message="Confirmation email resent." />
            </Toolbar>
        )
    }
}

export default withStyles(styles)(OnboardToolbar);