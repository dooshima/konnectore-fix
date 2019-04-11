import React, { Fragment, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    grid: {
      width: '100%',
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
  });

class KDatePicker extends React.Component {
    state = {
        // The first commit of Material-UI
        selectedDate: null,
      };

    static getDerivedStateFromProps(props) {
        return {selectedDate: new Date(props.dob)}
    }
    
      handleDateChange = date => {
        //this.setState({ selectedDate: date });
        this.props.handleDateChange(date);
      };

      render() {
        const { classes } = this.props;
  return (
    <DatePicker
        selected={this.state.selectedDate}
        onChange={this.handleDateChange}
        dateFormat="yyyy-MM-dd"
        className={classes.bootstrapInput}
    />
  );
        }
}

export default withStyles(styles)(KDatePicker);
