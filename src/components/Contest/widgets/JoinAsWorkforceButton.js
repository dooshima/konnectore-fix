import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import KBigButton from '../../UIC/KBigButton';
import Utility from '../../../services/Utility';
import { Input, FormControlLabel, Checkbox, FormControl, Typography, FormHelperText, FormLabel, Grid, InputLabel } from '@material-ui/core';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
import green from '@material-ui/core/colors/green';
import SimpleTextAlert from '../../../widgets/alerts/SimpleTextAlert';

const theme = createMuiTheme({
  spacing: 10,
});

const useStyles = makeStyles({
  viewLink: {
      textAlign: 'center',
      textDecoration: 'none',
      fontStyle: 'normal',
      fontSize: 15,
      cursor: 'pointer',
  },
  formControl: {
    width: '100%',
    marginTop: '1.8em',
},
bootstrapRoot: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
bootstrapInput: {
    borderRadius: 20,
    position: 'relative',
    backgroundColor: '#f8f8f8',
    border: '1px solid transparent',
    fontSize: 14,
    color: '#a2a2a2',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderRadius: 20,
      borderColor: 'transparent',
      boxShadow: '0 0 0 0.2rem rgba(0,0,0,.01)',
    },
    '&::placeholder': {
        textOverflow: 'ellipsis !important',
        color: '#a2a2a2',
        fontSize: 14,
    }
},
bootstrapTextarea: {
    borderRadius: 10,
    position: 'relative',
    backgroundColor: '#f8f8f8',
    border: '1px solid transparent',
    fontSize: 14,
    color: '#a2a2a2',
    padding: '10px 12px',
    width: '80%',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderRadius: 10,
      borderColor: 'transparent',
      boxShadow: '0 0 0 0.2rem rgba(0,0,0,.01)',
    },
    '&::placeholder': {
        textOverflow: 'ellipsis !important',
        color: '#a2a2a2',
        fontSize: 14,
    }
  },
bootstrapFormLabel: {
    fontSize: 16,
},
});

function JoinAsWorkforceButton(props) {
  const [open, setOpen] = React.useState(false);
  const { contest, contestProgress } = props;
  const currentEdition = Utility.isset(contest)? contest.currentEdition: {};
  const progress = contestProgress;

  
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
    location: '',
    origin: '',
    comment: '',
    joined: false,
    current_location: '',
    state_of_origin: '',
    why_join_contest: '',
  });

  console.log(state)

  const handleCheck = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const handleState = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.value });
  };

  const handleJoin = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const form = {category_id: props.category, state_of_origin: state.state_of_origin, current_location: state.current_location, why_join_workforce: state.why_join_contest, contest_edition_id: props.contest_edition_id};
    props.joinAsWorkforce(form, props.authToken);

    console.log(form);
  }

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
              {progress.joined !== true? <div>
              {false && <><Typography variant="h5">What is Wiki Loves Africa?</Typography>
              <Typography>
Of all of the millions of subjects you can read about on Wikipedia, subjects relating to Africa have the least coverage. This is due to a number of reasons, but mainly because many people do not know that they can donate their images, videos and audio to Wikipedia.
We need your help to visually celebrate the richness, diversity and beauty of Africa.</Typography></>}

<Grid container spacing={40}>
                            <Grid item md={6}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="currentLocation" shrink className={classes.bootstrapFormLabel}>Current Location</InputLabel>
                                        <Input id="currentLocation" 
                                            placeholder="Current Location" 
                                            value={state.current_location} 
                                            onChange={handleChange('current_location')} 
                                            fullWidth={true}
                                            disableUnderline={true}
                                            classes={{
                                                root: classes.bootstrapRoot,
                                                input: classes.bootstrapInput,
                                            }}
                                        />
                                </FormControl>
                            </Grid>
                            <Grid item md={6}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="state" shrink className={classes.bootstrapFormLabel}>State of Origin</InputLabel>
                                        <Input id="state" 
                                            placeholder="State of Origin" 
                                            value={state.state_of_origin} 
                                            onChange={handleChange('state_of_origin')} 
                                            fullWidth={true}
                                            disableUnderline={true}
                                            classes={{
                                                root: classes.bootstrapRoot,
                                                input: classes.bootstrapInput,
                                            }} 
                                        />
                                </FormControl>
                            </Grid>
                            <Grid item md={12}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="comment" shrink className={classes.bootstrapFormLabel}>Why do you want to become a workforce agent for the Stage 2019?</InputLabel>
                                        <Input id="comment" 
                                            placeholder="Comment" 
                                            value={state.why_join_contest} 
                                            onChange={handleChange('why_join_contest')} 
                                            fullWidth={true}
                                            disableUnderline={true}
                                            classes={{
                                                root: classes.bootstrapRoot,
                                                input: classes.bootstrapTextarea,
                                            }}
                                            multiline
                                            rows={4}
                                            style={{borderRadius: 10,}}
                                        />
                                </FormControl>
                                <SimpleTextAlert message={progress.message} />
                                <KBigButton onClick={handleJoin} label="Join" />
                                
                            </Grid>
                          </Grid></div>: <SimpleTextAlert message="You've become a workforce on the Stage." />}
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
