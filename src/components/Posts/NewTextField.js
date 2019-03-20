import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});


class NewTextField extends React.Component {
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
    const { classes, showpostform } = this.props;
    console.log(showpostform)

    if(showpostform) {
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-full-width"
          label="Enter text"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText=""
          onChange={this.handleChange('postText')}
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    );
        } else {
            return null;
        }
  }
}

NewTextField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewTextField);
