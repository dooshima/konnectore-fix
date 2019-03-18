import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import KButton from './../UIC/KButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  contentHolder: {
    backgroundColor: '#efefef',
    border: 'none',
    display: 'block',
    padding: theme.spacing.unit * 2,
  },
  bordered: {
    backgroundColor: '#efefef',
    border: '1px dashed #bcbcbc',
    padding: theme.spacing.unit * 2,
    flex: 1,
  },
  content: {
    backgroundColor: '#fff',
    padding: theme.spacing.unit * 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 150,
  },
  root: {
    minWidth: '60%',
  }
});
class ResponsiveDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.props.toggledialog();
  };

  render() {
    const { fullScreen, classes } = this.props;

    return (
        <Dialog
          fullScreen=""
          open={this.props.opendialog}
          onClose={this.handleClose}
          maxWidth="md"
          paperWidthMd
          aria-labelledby="responsive-dialog-title"
          className={classNames(classes.root)}
        >
          <DialogContent>
            <DialogContentText>
              <div className={classes.contentHolder}>
                <section className={classes.bordered}>
                  <div className={classes.content}>
                    <p>Drag image over or click to add</p>
                  </div>
                </section>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <KButton onClick={this.handleClose} color="error" label="Cancel" size="small" />
            <KButton onClick={this.handleClose} label="Continue" size="small" />
          </DialogActions>
        </Dialog>
    );
  }
}

ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withStyles(styles)(withMobileDialog()(ResponsiveDialog));
