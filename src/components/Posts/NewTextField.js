import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Input } from '@material-ui/core';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 15,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
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
    fontSize: 24,
    color: '#a2a2a2',
    padding: '20px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderRadius: 10,
      borderColor: 'transparent',
      boxShadow: '0 0 0 0.2rem rgba(0,0,0,.01)',
    },
    '&::placeholder': {
        textOverflow: 'ellipsis !important',
        color: '#a2a2a2',
        fontSize: 24,
    }
  },
bootstrapFormLabel: {
    fontSize: 16,
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
    const { classes, postText } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <Input
          id="new-text-field"
          label="Enter text"
          style={{ margin: 8 }}
          placeholder="What's on your mind?"
          helperText=""
          onChange={this.handleChange('postText')}
          fullWidth
          disableUnderline={true}
          rows={3}
          classes={{
              root: classes.bootstrapRoot,
              input: classes.bootstrapTextarea,
          }}
          value={postText}
        />
      </form>
    );
  }
}

NewTextField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewTextField);
