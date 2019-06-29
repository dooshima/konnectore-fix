import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Route, Switch, Link ,BrowserRouter} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Singer from './Singer';
import Photography from './Photography';
import Instrumentalist from './Instrumentalist';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavContest({onSelect}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue({newValue});
  }

  function handleActive(tab) {
    alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
  }

  return (
     
    <BrowserRouter>
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Singers" 
          data-route="/home"
          onActive={handleActive}
          component = {Link} to ="/sing" />
          <Tab label="Photography" component = {Link} to ="/photo" />
          <Tab label="Instrument" component = {Link} to ="/instrument"  />
          
        </Tabs>
      </AppBar>

      <Switch>
          <Route extact path="/sing" component={Singer} />
          <Route path="/photo" component={Photography} />
          <Route path="/instrument" component={Instrumentalist} />


     </Switch>
    

    </div>
    </BrowserRouter>
  );
}