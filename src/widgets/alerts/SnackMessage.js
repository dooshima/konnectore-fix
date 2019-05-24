import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';


function SnackMessage(props) {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'right',
  });
  const { vertical, horizontal, open } = state;
  const { message } = props;
  const classes = {};

  const handleClick = () => {
    setState({ open: props.openSnackMessage });
  };

  function handleClose() {
    //setState({ ...state, open: false });
    props.handleClose();
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={props.open}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        autoHideDuration={6000}
        variant="success"
        message={<span id="message-id">{message}</span>}
        action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
      />
    </div>
  );
}

export default SnackMessage;
