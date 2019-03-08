import React from 'react';
import { TextField, FormControl, Input, MenuItem, Typography, Select, InputLabel, OutlinedInput } from '@material-ui/core';

function TestForm (props) {
    return (
        <>
        <TextField placeholder="Type something" select>
            {['One', 'Two', 'Three', 'Four'].map( (item, i) => {
                return <Typography key={i} value={item}>{item}</Typography>
            })}
        </TextField>
        <FormControl>
          <InputLabel htmlFor="age-simple">Age</InputLabel>
          <Select
            value={props.age}
            onChange={props.handleChange}
            input={
                <OutlinedInput
                  labelWidth={100}
                  name="age"
                  id="outlined-age-simple"
                />
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        </>
    )
}

export default TestForm;