import React from 'react';
import PropTypes, { nominalTypeHack } from 'prop-types';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import { Grid, Paper, LinearProgress, Typography } from '@material-ui/core';
import classNames from 'classnames';
import ContestListItem from '../ContestListItem';
import MasonryGrid from '../UIC/MasonryGrid/MasonryGrid';
import ImageCard from '../UIC/Posts/ImageCard/ImageCard';
import TextCard from '../UIC/Posts/TextCard/TextCard';
import VideoCard from '../UIC/Posts/VideoCard/VideoCard';
import CompetitionSummaryCard from '../Contest/CompetitionSummaryCard';
import JoinChallengeCard from '../JoinChallengeCard';
import FeedCard from '../FeedCard';
import PlaceComponents from '../UIC/PlaceComponents';
import { connect } from 'react-redux';
import contestActions from './../../reducers/contest/actions';
import ContestFeedHorizontal from './Scrollables/ContestFeedHorizontal';
import PostDetailWidget from '../../widgets/posts/PostDetailWidget';
import Utility from '../../services/Utility';
import ContestInfoBanners from '../../widgets/carousels/ContestInfoBanners';

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

class DashboardComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            item: {},
        }
    }

    componentDidMount() {
      //activate fetching of contests
      this.props.getContestFeed();
    }

    toggleDialog = item => {
        this.setState({item: item, open: !this.state.open})
    }

    render() {
    const { classes, user, contestFeed, me, post } = this.props;
    let recentPosts = [];
    const contestList = !contestFeed.data? []: contestFeed.data;
    const keys = Utility.isset(me) && Utility.isset(me.postIds)? me.postIds.sort( (a, b) => b -a): [];
    const posts = Utility.isset(post.byId) ? post.byId: [];
    for(let i of keys) {
      let item = posts[i];
      recentPosts.push(item);
    }

    recentPosts = recentPosts.sort((a, b) => b.id > a.id);

    return (
<div style={{marginTop: 30, marginLeft: 20, marginRight: 20}}>
          <Grid container spacing={8}>
            <Grid item xs={8}>
              <Paper style={{boxShadow: 'none', textAlign: "left", paddingLeft: 10, paddingRight: 10}}>
                
                
                <ContestInfoBanners />
                
                <Paper elevation={0} style={{marginTop: 30}}>
                {recentPosts.length > 0 &&
                  <MasonryGrid>
                  {
                    recentPosts.map( (item, i) => {
                      let counter = Math.ceil(Math.random() * 100);
                      let chooser = counter % 2 === 0? true: false;
                      if(item !== null && typeof(item) !== 'undefined') {
                        if(item.type === 'image'){
                          return <ImageCard key={i} index={i} item={item}  toggleDialog={this.toggleDialog}/>;
                        } else if (item.type === 'text') {
                          return <TextCard key={i} index={i} item={item} toggleDialog={this.toggleDialog}/>;
                        } else {
                          return <VideoCard key={i} item={item} toggleDialog={this.toggleDialog}/>
                        }
                      }
                    })
                  }
                  </MasonryGrid>}
                  {recentPosts.length < 1 && <Typography color="textSecondary" 
                    style={{textAlign: "center", fontSize: 15,}}>No posts found.</Typography>}
                </Paper>
              </Paper>
              <PostDetailWidget postItem={this.state.item} open={this.state.open} user={user} toggleDialog={this.toggleDialog} />
            </Grid>
            <Grid item xs={4}>
                <PlaceComponents spacer={20}>
                    <FeedCard />     
                    <CompetitionSummaryCard />
                    <JoinChallengeCard />
                </PlaceComponents>
            </Grid>
          </Grid>
        </div>
    )
                }
    
}

DashboardComponent.propTypes = {
    classes: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
  return {
    contestFeed: state.contest.feed,
    me: state.me,
    post: state.post,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getContestFeed: () => {
      dispatch(contestActions.getContestFeed());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(DashboardComponent));