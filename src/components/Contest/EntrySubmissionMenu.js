import React from 'react';
import { Typography, Link, Dialog, DialogContent, DialogContentText, DialogActions, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import KButton from '../UIC/KButton';
import GuidelinesContent from './GuidelinesContent';

const styles = theme => ({
    menuRow: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    info: {
        textDecoration: 'none',
        fontStyle: 'normal',
        cursor: 'pointer',
        '&:hover': {
            fontStyle: 'normal',
            textDecoration: 'none',
        }
    },
    label: {
        fontSize: theme.typography.fontSize * 1.2,
        fontWeight: 700,
    },
    paper: {
        width: '60%',
        maxHeight: 'max-content',
    },
    root: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
});

class EntrySubmissionMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
        }
    }

    toggle = open => {
        this.setState({open: open});
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.menuRow}>
                <Typography className={classes.label}>Stage 1 - Auditioning</Typography>
                <Typography>Submit an entry for this stage before the stated deadline</Typography>
                <Link onClick={() => this.toggle(true)} className={classes.info}>
                    <Typography color="primary">more information</Typography>
                </Link>

                <Dialog
                    fullScreen={true}
                    open={this.state.open}
                    onClose={() => this.toggle(false)}
                    maxWidth="md"
                    aria-labelledby="stage-information"
                    classes={{
                      paper: classes.paper,
                      root: classes.root,
                    }}
                    >
                    <DialogContent>
                <DialogContentText>
                <div className={classes.contentHolder}>
                    <Grid container>
                        <Grid item md="5">
                        
                        </Grid>
                        <Grid item md="7">
                            <GuidelinesContent />
                        </Grid>
                    </Grid>
                </div>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <KButton onClick={() => this.toggle(false)} label="Close" size="small" />
            </DialogActions>

                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(EntrySubmissionMenu);