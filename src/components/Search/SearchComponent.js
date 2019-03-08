import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import classNames from 'classnames';
import SectionListHeader from './../SectionListHeader';
import JoinChallengeCard from './../JoinChallengeCard';
import CompetitionSummaryCard from '../Contests/CompetitionSummaryCard';
import KTabs from './../UI/KTabs';
import FeedCard from './../FeedCard';
import ImageCard from './../UI/Posts/ImageCard/ImageCard';
import MasonryGrid from './../UI/MasonryGrid/MasonryGrid';
import TextCard from './../UI/Posts/TextCard/TextCard';

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
]

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
  }

  getDerivedStateFromProps(p) {
    console.log(p);
  }

  render() {
    console.log('SC: ', this.props.match.params['q']);
    const { classes, q } = this.props;
    const searchResults = this.props.searchResults? this.props.searchResults: [];
    return (
<div style={{marginTop: 30, marginLeft: 20, marginRight: 20}}>
          <Grid container xs={12}>
            <Grid item xs={8}>
              <Paper style={{boxShadow: 'none', textAlign: "left", paddingLeft: 10, paddingRight: 10}}>
                <Typography>
                  <span>Showing results for</span>
                  <span style={{color: '#00927d'}}> { q }</span>
                </Typography>
                
                <KTabs tabs={tabs} size="small" />

                <Paper style={{marginTop: 30}}>
                  <SectionListHeader />
                  {searchResults.length > 0 && <MasonryGrid>
                  {
                    searchResults.map( (post, key) => {
                      let counter = Math.ceil(Math.random() * 100);
                      let chooser = counter % 2 === 0? true: false;
                      return post.type === 'text'? <TextCard post={post} index={key} />: <ImageCard post={post} index={key} />
                    })
                  }
                  </MasonryGrid>}
                  {searchResults.length < 1 && <div>No results found.</div>}
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
    
}

SearchComponent.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SearchComponent);