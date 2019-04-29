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
import Utility from '../../../services/Utility';
import ReactTimeAgo from 'react-time-ago/commonjs/ReactTimeAgo';
import { Avatar } from '@material-ui/core';

const styles = theme => ({
  card: {
    display: 'flex',
    marginBottom: theme.spacing.unit,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '55%',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '45%',
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
  description: {
      margin: '1em 0',
  }
});

function ContestFeedItemCard(props) {
  const { classes, theme, edition } = props;
  const contest = edition;
  return (
    <Card className={classes.card}>
        <CardMedia
            className={classes.cover}
            image={Utility.getPath(contest.coverImage)}
            title={contest.slogan}
        />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {contest.slogan}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Ended <ReactTimeAgo date={new Date(contest.endDate)} locale="en" />
          </Typography>
          <Typography color="textSecondary" className={classes.description}>{contest.description}</Typography>
        </CardContent>
        <div className={classes.controls}>
          <Avatar src={Utility.getAvatar("")} />
          <Avatar src={Utility.getAvatar("")} />
          <Avatar src={Utility.getAvatar("")} />
        </div>
      </div>
      
    </Card>
  );
}

ContestFeedItemCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ContestFeedItemCard);
