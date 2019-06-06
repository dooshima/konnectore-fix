import * as React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/hooks'
import { IconButton } from '@material-ui/core';

const PopoverPostActions = ({author, post_id, user_id, deletePost}) => {
    console.log(author, post_id, user_id)
  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function deleteAPost(pid) {
      if(window.confirm ('Really want to delete your post?')) {
        deletePost(pid);
      }
      //popupState.close;
      
  }
  return (
    <div>
      <IconButton
        aria-label="More"
        aria-owns={open ? 'long-menu' : undefined}
        aria-haspopup="true"
        //onClick={handleClick}
        {...bindTrigger(popupState)}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu {...bindMenu(popupState)}>
          <MenuItem onClick={popupState.close}>Share</MenuItem>
          {+user_id === +author && <MenuItem onClick={() => deleteAPost(post_id)}>Delete</MenuItem>}
          {+user_id !== +author && <MenuItem onClick={popupState.close}>Report Abuse</MenuItem>}
      </Menu>
    </div>
  )
}

export default PopoverPostActions
