import React from 'react';
import PropTypes, { nominalTypeHack } from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import { Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Link, ListSubheader } from '@material-ui/core';
import DraftsIcon from '@material-ui/icons/Drafts';
import HomeIcon from '@material-ui/icons/Home';
import InboxIcon from '@material-ui/icons/Inbox';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import GroupIcon from '@material-ui/icons/Group';
import StarsIcon from '@material-ui/icons/Stars';
import classNames from 'classnames';
import SinglePostCard from './SinglePostCard';
import SectionListHeader from './SectionListHeader';
import JoinChallengeCard from './JoinChallengeCard';
import CompetitionSummaryCard from './Contests/CompetitionSummaryCard';
import SearchFilterLink from './SearchFilterLink';
import LeftSidebar from './LeftSidebar';
import KTabs from './UIC/KTabs';
import NavTabs from './NavTabs';
import FeedCard from './FeedCard';
import ImageCard from './UIC/Posts/ImageCard/ImageCard';
import MasonryGrid from './UIC/MasonryGrid/MasonryGrid';
import TextCard from './UIC/Posts/TextCard/TextCard';
import ContestListItem from './ContestListItem';

const activeLink = classNames({'link': true, 'active': true});
const dudUrl = 'javascript:;';

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

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  active: {
    color: '#00927d'
  },
  avatar: {
    borderRadius: 3
  },
  uAvatar: {
    borderRadius: 15
  },
  link: {
    margin: theme.spacing.unit,
    textDecoration: 'none',
    paddingLeft: 30,
    paddingRight: 30, 
    color: '#000000de',
    '&:hover': {
      fontStyle: 'normal'
    }
  },
  search: {
    position: 'relative',
    borderRadius: 18,
    backgroundColor: fade(theme.palette.common.black, 0.06),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.08),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

const tabs = [
  {
    label: "All",
    route: "/search/all"
  },
  {
    label: "Posts",
    route: "/search/posts"
  },
  {
    label: "Images",
    route: "/search/images"
  },
  {
    label: "Videos",
    route: "/search/videos"
  },
  {
    label: "About",
    route: "/about"
  }
]

function SearchResultBody (props) {
    const { classes } = props;
    return (
<div style={{marginTop: 30, marginLeft: 20, marginRight: 20}}>
          <Grid container xs={12}>
            <Grid item xs={8}>
              <Paper style={{boxShadow: 'none', textAlign: "left", paddingLeft: 10, paddingRight: 10}}>
                <Typography>
                  <span>Showing results for</span>
                  <span style={{color: '#00927d'}}> #100yearchallenge</span>
                </Typography>
                
                <KTabs tabs={tabs} size="small" />
                <div style={{display: 'flex'}}>
                {
                  [
                    {url: '/images/c1.png', title: 'Street Dance Contest'},
                    {url: '/images/c2.png', title: 'Double Homicide Challenge'},
                    {url: '/images/c3.png', title: 'The Sctage Contest'}
                  ].map( (item, i) => {
                    return (
                      <div style={{ marginLeft: `${i > 0? 20: 0}px`, flex: 1 }}>
                      <ContestListItem url={item.url} title={item.title}  />
                      </div>
                    )
                  })
                }
                </div>
                <Paper style={{marginTop: 30}}>
                  <SectionListHeader />
                  <MasonryGrid>
                  {
                    [...Array(6)].map( (i, key) => {
                      let counter = Math.ceil(Math.random() * 100);
                      let chooser = counter % 2 === 0? true: false;
                      return chooser? <ImageCard index={key} />: <TextCard index={key} />
                    })
                  }
                  </MasonryGrid>
                </Paper>
              </Paper>
            </Grid>
            <Grid item xs={4}>
                  <div style={{marginLeft: 20}}>
             <FeedCard />     

      <CompetitionSummaryCard />



        <JoinChallengeCard />
        </div>
            </Grid>
          </Grid>
        </div>
    )
    
}

SearchResultBody.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SearchResultBody);