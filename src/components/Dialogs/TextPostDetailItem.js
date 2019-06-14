import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import { CardHeader, Avatar, CardActions, TextField, FormControl, Input } from '@material-ui/core';
import AlarmIcon from '@material-ui/icons/Alarm'
import PostStatsWidget from '../../widgets/posts/PostStatsWidget';
import PostCommentItem from '../../widgets/comments/PostCommentItem';
import PostActivityWidget from '../../widgets/posts/PostActivityWidget';
import HashtagParser from '../../widgets/posts/HashtagParser';

const styles = theme => ({
  card: {
    display: 'flex',
    height: '100%',
    borderRadius: 0,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  content: {
    flex: '1 0 auto',
    overflowY: 'scroll',
    overflowX: 'hidden',
    padding: '1em 1.5em',
    height: 250,
  },
  cover: {
    width: '50%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  subheader: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
  },
  header: {
      borderBottom: '1px solid #efefef'
  },
  alarmIcon: {
      margin: '0 0 5px 0',
      height: 15,
      height: 15,
  },
  formControl: {
      flex: 1,
      borderTop: '1px solid #efefef',
  },
  input: {
      padding: 10,
  },
  text: {
      padding: '40px 60px',
      fontSize: 30,
      color: 'white',
  },
  postText: {
      fontSize: theme.typography.fontSize * 1.2,
      //lineHeight: theme.typography.fontSize * 2,
      
  }
});

function TextPostDetailItem(props) {
  const { classes, theme, item } = props;
  
  return (
    <Card className={classes.card}>
        <div className={classes.cover} title="Post title" style={{backgroundColor: item.backgroundColor}}>
            <Typography component="h3" color="textSecondary" className={classes.text}>
                <HashtagParser>{item.text}</HashtagParser>
            </Typography>
        </div>
        <div className={classes.details}>
            <PostActivityWidget item={item} {...props}/>
        </div>
    </Card>
  );
}

TextPostDetailItem.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TextPostDetailItem);
