import React from 'react';
import PropTypes from 'prop-types';
import { Paper, List, ListSubheader, ListItem, 
  FormControl, Select, MenuItem, Typography, OutlinedInput } from '@material-ui/core';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import KPaper from './../UIC/KPaper';

const styles = theme => ({
  form: {
    flex: 1,
  },
  outlinedInput: {
    padding: theme.spacing.unit,
  },
  formControl: {
    marginBottom: theme.spacing.unit,
  }
});

class SearchFilterCard extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        from: "",
      }
    }

    handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };

    render() {
    const { classes } = this.props;
    return (
      <KPaper style={{marginBottom: 20,}}>
        <List subheader={<ListSubheader>SEARCH FILTER</ListSubheader>} style={{textAlign: 'left'}} className={classes.root}>
          <ListItem>
            <form className={classes.form} autoComplete="off">
              <FormControl
                fullWidth={true}
                className={classes.formControl}
              >
                <Select
                  value={this.state.from}
                  name="from"
                  onChange={this.handleChange}
                  displayEmpty
                  input={
                    <OutlinedInput
                      labelWidth={this.state.labelWidth}
                      id="filter_by_from"
                      classes={{input: classes.outlinedInput}}
                    />
                  }
                >
                  <MenuItem value="">From Anyone</MenuItem>
                </Select>
              </FormControl>

              <FormControl
                fullWidth={true}
                className={classes.formControl}
              >
                <Select
                  value={this.state.from}
                  name="nearme"
                  onChange={this.handleChange}
                  displayEmpty
                  input={
                    <OutlinedInput
                      labelWidth={this.state.labelWidth}
                      id="filter_by_nearme"
                      classes={{input: classes.outlinedInput}}
                    />
                  }
                >
                  <MenuItem value="">Near me</MenuItem>
                </Select>
              </FormControl>

              <FormControl
                fullWidth={true}
                className={classes.formControl}
              >
                <Select
                  value={this.state.from}
                  name="language"
                  onChange={this.handleChange}
                  displayEmpty
                  input={
                    <OutlinedInput
                      labelWidth={this.state.labelWidth}
                      id="filter_by_language"
                      classes={{input: classes.outlinedInput}}
                    />
                  }
                >
                  <MenuItem value="">In all Languages</MenuItem>
                </Select>
              </FormControl>
            </form>
          </ListItem>
          <ListItem>
            <Typography component="a" color="primary">
              Advanced Search
            </Typography>
          </ListItem>
        </List>
      </KPaper>
)
                }
    }

SearchFilterCard.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SearchFilterCard);