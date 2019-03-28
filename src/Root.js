import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import App from './App'

const theme = createMuiTheme({
  palette: {
      primary: {
          main: '#00a294',
      },
      white: '#ffffff',
  },
  spacing: {
    unit: 10,
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Acumin Pro',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 12,
  },
});

console.log(theme);

const Root = ({ store }) => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
    <Router>
      <Route path="/:filter?" component={App} />
    </Router>
    </MuiThemeProvider>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root