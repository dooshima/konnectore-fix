import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PaystackVoteButton from '../vote/PaystackVoteButton';
import { InputAdornment, Grid, Avatar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    //width: 1000,
  }
});

function VoteAmountDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [amount, setAmount] = React.useState(0);
  const { classes } = props;

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleAmount(event) {
      setAmount(+event.target.value * 100);
  }

  return (
      
    <div>
      <Dialog classes={{root: classes.root}} open={props.open} onClose={() => props.toggleDialog(false)} aria-labelledby="form-dialog-title">
      <DialogContent>
        <Grid container spacing={0}>
          <Grid item md={6} sm={12} className={classes.gridLeft}>
            <div className={classes.leftContent}>
              <div className={classes.avatarWithName}>
                <Avatar src="/images/avatar.png" />
                <Typography variant="h5">Tunde Bakare</Typography>
              </div>
              <div className={classes.description}>
                <Typography color="textSecondary">You are voting for the submission entry posted in</Typography>
                <Typography color="primary">The Sctage 2019 Contest</Typography>
              </div>
            </div>
            <div>
              <Typography>Need help?</Typography>
            </div>
          </Grid>
          <Grid item md={6} sm={12}>
          <TextField
            autoFocus
            margin="dense"
            id="vote"
            label="Please enter vote amount"
            type="number"
            fullWidth
            onChange={handleAmount}
            InputProps={{
                startAdornment: <InputAdornment position="start">N</InputAdornment>,
            }}
          />
          </Grid>
        </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.toggleDialog(false)} color="primary">
            Cancel
          </Button>
          <PaystackVoteButton toggleDialog={props.toggleDialog} email={props.user.email} amount={amount} metadata={props.metadata} />
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default withStyles(styles)(VoteAmountDialog);
