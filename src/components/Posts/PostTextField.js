import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    overflow: 'hidden',
  },
  textField: {
    marginLeft: theme.spacing.unit * 0,
    marginRight: theme.spacing.unit * 0,
    border: 'none',
    textAlign: 'center',
    fontSize: 30,
  },
  input: {
    textAlign: 'center',
    color: 'white',
    minHeight: 300,
  }
});

class PostTextField extends React.Component {
  state = {
    postText: '',
    multiline: 'Controlled',
  };

  handleChange = name => event => {
    if(event.target.value.length <= 140) {
      this.setState({
        [name]: event.target.value,
      });
    
      this.props.setPostText(event.target.value);
      this.props.setCharacterCount(event.target.value);
    }
  };

  render() {
    const { classes, postText, className } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <Input
          className={classNames(classes.textField)}
          classes={{input: classes.input}}
          onChange={this.handleChange('postText')}
          value={postText}
          multiline
          fullWidth={true}
          disableUnderline={true}
          autoFocus={true}
        />
      </form>
    );
  }
}

PostTextField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostTextField);
