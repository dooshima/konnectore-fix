import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { H4, Link } from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/icons/MoreVert';
import TextWidget from '../TextWidget';
import KPaper from '../../KPaper';
import Utility from '../../../../services/Utility';


const styles = theme => ({
  card: {
    flex: 1,
  },
  content: {
    paddingTop: theme.spacing.unit * 2,
    position: 'relative',
    color: '#fff',
  },
  actions: {
    display: 'flex',
    padding: `${theme.spacing.unit * 0.7}px ${theme.spacing.unit * 1.5}px`,
  },
  p: {
    color: '#fff',
    fontSize: theme.spacing.unit * 1.4,
    fontWeight: 400,
  },
  h4: {
    color: '#fcfcfc',
    fontSize: theme.spacing.unit * 1.5,
    fontWeight: 400,
  },
  stats: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: theme.spacing.unit * 1.1,
    fontWeight: 300,
    display: 'inline',
    marginRight: 10,
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
    backgroundColor: 'transparent',
    borderColor: '#00927d',
    borderWidth: 2,
    borderStyle: 'solid'
  },
  typeIcon: {
      position: 'absolute',
      right: 20,
      top: 10,
  },
  more: {
      color: 'white',
      display: 'inline',
      marginLeft: 'auto',
  },
  footer: {
      display: 'flex',
      alignItems: 'center',
      marginTop: theme.spacing.unit * 2,
  },
  title: {
    marginLeft: theme.spacing.unit * 1.5,
  },
  titleStat: {
      color: 'rgba(255,255,255,0.6)',
      fontSize: theme.spacing.unit * 1.1,
      fontWeight: 200,
  },
  rule: {borderTop: '1px solid rgba(255,255,255,0.5)', margin: `0 ${theme.spacing.unit * 2}px`, height: 1},
});

class TextCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes, fullName, item } = this.props;

    return (
      <KPaper square={false} className={classes.card} style={{backgroundColor: `${item.backgroundColor}`}}>
        <TextWidget 
          text={item.text}
          user={{avatar: item.user && item.user.avatar? Utility.getAvatar(item.user.avatar): Utility.getAvatar("")}}
          comments={item.comments_count}
          endorsements={item.likes_count}
          backgroundColor={item.backgroundColor}
          textColor={item.textColor}
          fullName={fullName}
          {...this.props}
        />
      </KPaper>
    );
  }
}

TextCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextCard);
