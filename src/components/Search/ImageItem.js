import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import { Avatar, CardHeader, Icon } from '@material-ui/core';
import KCard from '../UIC/KCard';
import Utility from '../../services/Utility';
import ReactTimeAgo from 'react-time-ago/commonjs/ReactTimeAgo';

const styles = theme => ({
  card: {
    display: 'flex',
    margin: theme.spacing.unit * 0,
    marginBottom: theme.spacing.unit * 1,
    padding: 0,
    flexDirection: 'row',
    width: '100%',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '40%',
    height: 200,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  title: {
      fontSize: '1.1em',
  },
  icon: {
    margin: theme.spacing.unit * 0.1,
    fontSize: '0.9em',
  },
  small: {
      fontSize: '0.8em'
  }

});

class ImageItem extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        loadCSS(
          'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
          document.querySelector('#insertion-point-jss'),
        );
      }

    render() {
  const { classes, theme, item, } = this.props;

  return (
    <KCard className={classes.card}>
      <CardMedia
        className={classes.cover}
        component={item.type === 'video'? 'video': 'img' }
        src={Utility.getPath(item.src)}
        title={item.text}
      />
      <div className={classes.details}>
        <CardHeader
          avatar={
            <Avatar alt={`${item.user.firstname} ${item.user.lastname}`} src={Utility.getAvatar(item.user.avatar)} className={classes.avatar} />
          }
          title={
            <Typography component="h5" variant="h5" className={classes.title}>
                {item.user.firstname} {item.user.lastname}
            </Typography>
          }
          subheader={<ReactTimeAgo date={new Date(item.created_at)} />}
        />
        <CardContent className={classes.content}>
          <Typography variant="body1" color="textSecondary">
            {item.text}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton>
            <Icon className={classNames(classes.icon, 'far fa-heart')} />
          </IconButton>
          <Typography variant="subheading" color="textSecondary" className={classes.small}>{item.likes_count} likes</Typography>
          <IconButton style={{marginLeft: 50}}>
            <Icon className={classNames(classes.icon, 'far fa-comment-dots')} />
          </IconButton>
          <Typography variant="subheading" color="textSecondary" className={classes.small}>{item.comments_count} comments</Typography>
        </div>
      </div>
    </KCard>
  );
        }
}

ImageItem.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ImageItem);
