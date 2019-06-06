import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import KBigButton from '../../UIC/KBigButton';
import Utility from '../../../services/Utility';
import { Input, FormControlLabel, Checkbox, FormControl, Typography, FormHelperText, FormLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
import green from '@material-ui/core/colors/green';
import SimpleTextAlert from '../../../widgets/alerts/SimpleTextAlert';

const useStyles = makeStyles({
  viewLink: {
    textAlign: 'center',
    textDecoration: 'none',
    fontStyle: 'normal',
    fontSize: 15,
    cursor: 'pointer',
},
});

function JoinAsWorkforceButton(props) {
  const [open, setOpen] = React.useState(false);
  const { contest } = props;
  const currentEdition = Utility.isset(contest)? contest.currentEdition: {};

  /*const useStyles = makeStyles({
    root: {
      color: green[600],
      '&$checked': {
        color: green[500],
      },
    },
    checked: {},
  }); */

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleContinue() {
      if(!state.agreed) {
          setState({...state, showError: true});
          return;
      }
      alert('Send: ContestEditionID: ' + state.contest_edition_id + ' and Ref: ' + state.ref_code)
      props.joinContent({contest_edition_id: state.contest_edition_id, ref_code: state.ref_code});
  }

  const classes = useStyles();
  const [state, setState] = React.useState({
    contest_edition_id: props.contest_edition_id,
    ref_code: '',
    agreed: false,
    showError: false,
  });

  const handleCheck = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.value });
  };

    return (
        <div>
        <Link onClick={handleClickOpen} className={classes.viewLink}><Typography color="primary">Join as workforce</Typography></Link>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title"><Typography color="textSecondary">BECOME A WORKFORCE</Typography></DialogTitle>
            <DialogContent>
              <Typography variant="h4">What is Wiki Loves Africa?</Typography>
              <Typography>
Of all of the millions of subjects you can read about on Wikipedia, subjects relating to Africa have the least coverage. This is due to a number of reasons, but mainly because many people do not know that they can donate their images, videos and audio to Wikipedia.
We need your help to visually celebrate the richness, diversity and beauty of Africa.</Typography>
            </DialogContent>
            {props.referralsCount >= 20? <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={handleContinue} color="primary" autoFocus>
                Continue
            </Button>
            </DialogActions>: <DialogActions><Button onClick={handleClose} color="primary" autoFocus>
                Close
            </Button></DialogActions>}
        </Dialog>
        </div>
  );
}

export default JoinAsWorkforceButton;
