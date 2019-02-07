import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { H4, Link } from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    flex: 1,
  },
  media: {
    height: 0,
    paddingTop: '76.25%', // 16:9
    position: 'relative'
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
    borderColor: '#00927d',
    borderWidth: 2,
    borderStyle: 'solid'
  },
});

class SinglePostCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        
        <CardMedia
          className={classes.media}
          image="/images/post-img.png"
          title="Paella dish"
        > 
            <CardHeader
          avatar={
            <Avatar alt="Jide Adeleke" src="/images/avatar.png" className={classes.avatar} />
          }
          action={
            <Typography style={{color: '#efefef'}}>
                30 min ago
            </Typography>
          }
          title={
              (<Typography>
                <span style={{fontWeight: 'bolder', color: 'white', fontSize: '1.2em'}}>Victor Omemu</span> <span style={{color: '#efefef'}}>September 14, 2016</span>
              </Typography>)}
          subheader={
              <Typography style={{color: '#777'}}>MUSIC ARTIST</Typography>}
          style={{position: 'absolute', top: 20, flex: 1, left: 5, right: 10}}
        />

        </CardMedia>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        
      </Card>
    );
  }
}

SinglePostCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SinglePostCard);
