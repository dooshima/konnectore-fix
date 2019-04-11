import 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker, InlineDatePicker, DatePicker } from 'material-ui-pickers';

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

class KDatePicker1 extends React.Component {
  state = {
    // The first commit of Material-UI
    selectedDate: new Date(),
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
    this.props.handleDateChange(date);
  };

  render() {
    const { classes, input } = this.props;
    const { selectedDate } = this.state;

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container className={classes.grid} justify="space-around">
          <DatePicker
            /*format={this.props.getFormatString({
              moment: "YYYY-MM-DD",
              dateFns: "yyyy-MM-dd",
            })}*/
            margin="normal"
            label="Date of birth"
            value={selectedDate}
            variant="outlined"
            onChange={this.handleDateChange}
            classes={{root: classes.bootstrapInput}}
          />
          
        </Grid>
      </MuiPickersUtilsProvider>
    );
  }
}

KDatePicker1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(KDatePicker1);

/**
 * <TimePicker
            margin="normal"
            label="Time picker"
            value={selectedDate}
            onChange={this.handleDateChange}
          />
 */