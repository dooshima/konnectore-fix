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
import green from '@material-ui/core/colors/green';
import SimpleTextAlert from '../../../widgets/alerts/SimpleTextAlert';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles({
    joined: {
        width: 500,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
  }); 

const KButtonLink = withRouter(({history}) => {
    history.push('/sctage/submissions')
})

function JoinAsContestantButton(props) {
  const [open, setOpen] = React.useState(false);
  const { contest, contestProgress } = props;
  const currentEdition = Utility.isset(contest)? contest.currentEdition: {};
  const classes = useStyles();
  const progress = contestProgress;
  const continueBtn = progress.status === true? true: false;

  console.log(progress)
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
      props.joinContest({contest_edition_id: state.contest_edition_id, ref_code: state.ref_code});
  }

  //const classes = useStyles();
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

  const handleJoin = () => {
    if(!Utility.isset(props.category) || props.category === "") {
        alert("Please select a category.");
        return;
    }

    const form = {category_id: props.category, ref_code: props.referralID, contest_edition_id: props.contest_edition_id};
    props.joinAsContestant(form, props.authToken)
    handleClickOpen();

  }

    return (
        <div>
        <KBigButton disabled={true} onClick={handleJoin} label="Join the contest" upper={true} />
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogContent>
            {props.referralsCount >= 20? <DialogContentText id="alert-dialog-description" style={{display: 'flex', flexDirection: 'column', width: 500,}}>
                <FormControl>
                    <FormLabel>Referred by? (Optional)</FormLabel>
                <Input
                    placeholder="Enter referrer ID"
                    onChange={handleChange('ref_code')}
                />
                </FormControl>
                <FormControl>
                <FormControlLabel
                control={
                <Checkbox
                    checked={state.agreed}
                    onChange={handleCheck('agreed')}
                    value={state.agreed}
                    color="primary"
                />
                }
                label="I've read the TOS"
            />{state.agreed === false && state.showError === true && <FormHelperText style={{color: 'red', fontSize: 12}}>You must accept the TOS to continue</FormHelperText>}</FormControl>
            </DialogContentText>: <div className={classes.joined}>
        <SimpleTextAlert message={progress.message} />
        {progress.status !== true && <img src="/contests/check-joined.png" />}
        <KBigButton disabled={continueBtn} onClick={() => props.history.push('/contest/sctage/submissions')} label="Continue" />
    </div>}
            </DialogContent>
            <DialogActions><Button onClick={handleClose} color="primary" autoFocus>
                Close
            </Button></DialogActions>
        </Dialog>
        </div>
  );
}

export default withRouter(JoinAsContestantButton);
