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
import KCard from '../../UIC/KCard';

const styles = theme => ({
  card: {
    display: 'flex',
    //marginBottom: theme.spacing.unit,
    width: '50%',
    //margin: 5,
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
    margin: 8,
    height: 200,
    marginBottom: 0,
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

function ContestEntryItemCard(props) {
  const { classes, theme, entry } = props;
  console.log(entry)
  return (
    <Card elevation={0} className={classes.card}>
        <CardMedia
            className={classes.cover}
            component={entry.type === 'image'? 'img': 'video'}
            src={Utility.getPath(entry.src)}
            title={entry.description}
        />
    </Card>
  );
}

ContestEntryItemCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ContestEntryItemCard);
