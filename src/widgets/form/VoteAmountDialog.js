import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PaystackVoteButton from '../vote/PaystackVoteButton';
import { InputAdornment } from '@material-ui/core';

function VoteAmountDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [amount, setAmount] = React.useState(0);

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
      <Dialog open={props.open} onClose={() => props.toggleDialog(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">How much do you want to vote?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter amount in Naira
          </DialogContentText>
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

export default VoteAmountDialog;
