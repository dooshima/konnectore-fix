import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Input, Select } from '@material-ui/core';


const styles = theme => ({
    main: {
        backgroundColor: '#f9fffc',
    },
    wrapper: {
        margin: 0
    },
    card: {
        width: 'auto',
        //margin: '100px auto 20px',
        padding: 16,
        flexDirection: 'column',
    },
    formControl: {
        width: '100%',
        marginTop: '1.8em',
    },
    formRoot: {
        'label + &': {
          marginTop: theme.spacing.unit * 3,
        },
      },
    formInput: {
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
        flex: 1,
        borderRadius: 0,
        position: 'relative',
        backgroundColor: '#f8f8f8',
        border: '1px solid transparent',
        fontSize: '1.5em',
        color: '#a2a2a2',
        padding: '1em',
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

class KFormInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
    const { classes, placeholder, name, handleChange, ...rest } = this.props;

    return (
        <FormControl className={classes.formControl}>
            <Input placeholder={placeholder}
            disableUnderline={true}
            multiline={true}
            rows={rows? rows: 1}
            onChange={handleChange(name)}
            className={classes.formInput}
            {...rest} />
        </FormControl>
    )
    }
};

KFormInput.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(KFormInput);