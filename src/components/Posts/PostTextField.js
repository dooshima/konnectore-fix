import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
  },
  textField: {
    marginLeft: theme.spacing.unit * 0,
    marginRight: theme.spacing.unit * 0,
    width: '100%',
    height: '100%',
    flex: 1,
    border: 'none',
  },
});

class PostTextField extends React.Component {
  state = {
    postText: '',
    multiline: 'Controlled',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
    this.props.setPostText(event.target.value);
  };

  render() {
    const { classes, postText } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-bare"
          className={classes.textField}
          defaultValue="Start typing ..."
          margin="normal"
          onChange={this.handleChange('postText')}
          value={postText}
          multiline
        />
      </form>
    );
  }
}

PostTextField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostTextField);
