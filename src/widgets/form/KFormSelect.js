import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { FormControl, InputLabel, Input, Select, MenuItem } from '@material-ui/core';


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
        //marginTop: '1.8em',
    },
    formRoot: {
        'label + &': {
          //marginTop: theme.spacing.unit * 3,
        },
      },
    formInput: {
        borderRadius: 5,
        position: 'relative',
        backgroundColor: 'transparent',
        border: '1px solid #444',
        fontSize: 14,
        color: '#444', // '#a2a2a2',
        padding: '4px 8px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
          borderRadius: 20,
          borderColor: 'transparent',
          boxShadow: '0 0 0 0.2rem rgba(0,0,0,.01)',
          backgroundColor: 'transparent',
        },
        '&::placeholder': {
            textOverflow: 'ellipsis !important',
            color: '#444', // '#a2a2a2',
            fontSize: 14,
        },
        //marginTop: 0,
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

class KFormSelect extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    handleSelect = name => event => {
        this.props.handleChange(name, event.target.value);
    }

    render() {
    const { classes, placeholder, name, value, handleChange, options, label, ...rest } = this.props;
    return (
        <FormControl className={classes.formControl}>
            {label && <InputLabel htmlFor={label} shrink className={classes.bootstrapFormLabel}>{label}</InputLabel>}
            <Select
                onChange={this.handleSelect(name)}
                value={value}
                input={
                    <Input placeholder={placeholder}
                    disableUnderline={true}
                    className={classNames(classes.formInput, classes.selectStyle)} 
                    />
                } {...rest}>
                    {
                        options.map( option => <MenuItem value={option.value}>{option.label}</MenuItem>)
                    }
                </Select>
        </FormControl>
    )
    }
};

KFormSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(KFormSelect);