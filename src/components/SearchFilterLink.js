import React from 'react';
import Typography from '@material-ui/core/Typography';
import FilterLink from './FilterLink';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

const SearchFilterLink = () => (
    <div>
        <Typography color={theme.palette.primary.dark} style={{marginTop: 40}}>
            <FilterLink filter="all">
                All
            </FilterLink>
            <FilterLink filter="posts">
                Posts
            </FilterLink>
            <FilterLink filter="images">
                Images
            </FilterLink>
            <FilterLink filter="videos">
                Videos
            </FilterLink>
            <FilterLink filter="people">
                People
            </FilterLink>
        </Typography>
    </div>
);

export default SearchFilterLink;

