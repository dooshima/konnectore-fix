import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import { Toolbar, FormControl, Input } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import withMobileDialog from '@material-ui/core/withMobileDialog';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const styles = theme => ({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  root: {
    //width: 500,
  },
  close: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 0,
  },
  input: {
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    padding: '5px 10px',
  }
});

function SimpleDialog(props) {
  const { classes, followings } = props;
  const { onClose, selectedValue, ...other } = props;

  function handleClose() {
    onClose(selectedValue);
  }

  function handleListItemClick(value) {
    props.addThread(value);
    onClose(value);

  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" {...other} classes={{root: classes.root}}>
      <DialogTitle id="simple-dialog-title" className={classes.close}>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <div>
          <div>
          <Toolbar style={{flex: 1,}} className={classes.toolbar}>
                <form onSubmit={() => {}} style={{flex: 1,}}>
                <FormControl className={classes.formControl}>
                    <Input 
                        disableUnderline={true}
                        placeholder="Type to chat"
                        className={classes.input}
                        value={props.message}
                        onChange={props.handleChange('message')}
                    />
                </FormControl>
                <Button onClick={props.sendMessage} color="primary" className={classes.button}>
                    search
                </Button>
                </form>
            </Toolbar>
          </div>
          <div><Typography variant="caption">Recently added</Typography></div>
        <List>
          {followings.map( (user, i) => (
            <ListItem button onClick={() => handleListItemClick(user)} key={i}>
              <ListItemAvatar>
                <Avatar className={classes.avatar} src={user.avatar} />
              </ListItemAvatar>
              <ListItemText primary={`${user.fname} ${user.lname}`} />
            </ListItem>
          ))}
          <ListItem button onClick={() => handleListItemClick('addAccount')}>
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="add account" />
          </ListItem>
        </List>
      </div>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

const UsersDialog = withMobileDialog({breakpoint: 'sm'})(withStyles(styles)(SimpleDialog));

function RecentlyAddedUsersDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  function handleClickOpen() {
    setOpen(true);
  }

  const handleClose = value => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <span>
      <IconButton onClick={handleClickOpen}>
        <CreateNewFolderIcon />
    </IconButton>
      <UsersDialog 
        followings={props.followings} 
        selectedValue={selectedValue} 
        open={open} onClose={handleClose} 
        handleChange={() => props.handleChange('q')} 
        addThread={props.addThread}
        //onClick={props.getMessages} 
        />
    </span>
  );
}

export default RecentlyAddedUsersDialog;
