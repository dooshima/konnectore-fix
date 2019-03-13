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
      }
  },
  spacing: {
    unit: 10,
  },
  typography: {
    fontSize: 12,
  }
});

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