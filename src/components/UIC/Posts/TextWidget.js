import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import classNames from 'classnames';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoIcon from '@material-ui/icons/Photo';
import { Link } from '@material-ui/core';
import PostDetailDialogController from '../../Dialogs/PostDetailDialogController';
import dialogActions from '../../../reducers/dialog/actions';
import { connect } from 'react-redux';
import Utility from '../../../services/Utility';
import ReactTimeAgo from 'react-time-ago'
import PopoverPostActions from '../../../widgets/alerts/PopoverPostActions';
import HashtagParser from '../../../widgets/posts/HashtagParser';


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
    flex: 1,
    justifyContent: 'space-between',
  },
  actionAvatar: {
    display: 'flex',
    flexDirection: 'row',
  },
  p: {
    color: '#fff',
    fontSize: '0.8571428571428571rem',
    fontWeight: 400,
    textAlign: 'left',
  },
  h4: {
    color: '#fcfcfc',
    fontSize: theme.spacing.unit * 1.5,
    fontWeight: 400,
  },
  stats: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: '0.7rem',
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
    borderColor: '#29b673',
    borderWidth: 2,
    borderStyle: 'solid'
  },
  typeIcon: {
      position: 'absolute',
      right: 10,
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
    textAlign: 'center',
  },
  titleStat: {
      color: 'rgba(255,255,255,0.6)',
      fontSize: theme.spacing.unit * 1.1,
      fontWeight: 200,
      textAlign: 'left',
  },
  icon: {
    margin: theme.spacing.unit * 0,
    padding: theme.spacing.unit * 0.2,
    marginRight: theme.spacing.unit * 0.8,
    fontSize: '0.9em',
    color: 'rgba(255,255,255,0.6)'
  },
  rule: {borderTop: '1px solid rgba(255,255,255,0.4)', margin: `0 ${theme.spacing.unit * 2}px`, height: 1},
  link: {
    textDecoration: 'none',
    fontStyle: 'normal',
    cursor: 'pointer',
    '&:hover, &:focus': {
      textDecoration: 'none',
      outline: 'none'
    },
    backgroundColor: 'transparent',
    background: 'none',
    border: 'none',
    outline: 'none',
    display: 'block',
    width: '100%',
  }
});

class TextWidget extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
        }
    }

    componentDidMount() {
        loadCSS(
          'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
          document.querySelector('#insertion-point-jss'),
        );
    }

    handleExpandClick = () => {

    }

    showDetails(item) {
      this.props.toggleDialog(item);
    }

  render() {
    const { classes, type, text, user, comments, endorsements, item, contentStyle, deletePost } = this.props;
    const fullName = (Utility.isset(item) && Utility.isset(item.user)? item.user.firstname: '') + ' ' + (Utility.isset(item) && Utility.isset(item.user)? item.user.lastname: '');
    return (
      <div style={{background: item.type !== 'text' ? 'linear-gradient(to bottom, rgba(255,0,0,0), rgba(0, 0, 0, 0.87))': ''}}>
      <button className={classes.link} onClick={() => this.showDetails(item)}>
        <CardContent
          className={classes.content}
          style={contentStyle}
          action="icon"
        >

        <IconButton className={classes.typeIcon} color="primary">
            {type === 'video' && <VideocamIcon style={{color: "white"}} />}
            {type === 'image' && <PhotoIcon style={{color: "white"}} />}
        </IconButton>
        
        <Typography className={classes.p}>
            <HashtagParser>{text}</HashtagParser>
        </Typography>
        <div className={classes.footer}>
            <IconButton style={{padding: 0}}>
                <Icon className={classNames(classes.icon, 'far fa-heart')} />
            </IconButton>
            <Typography className={classes.stats}>{ endorsements } likes</Typography>

            <IconButton style={{marginLeft: 10, padding: 0,}}>
                <Icon className={classNames(classes.icon, 'far fa-comment-dots')} />
            </IconButton>
            <Typography className={classes.stats}>
                { comments } comments
            </Typography>
        </div>
           
        </CardContent>
        <div className={classes.rule} />
        </button>
        <CardActions className={classes.actions} disableActionSpacing >
          <div className={classes.actionAvatar}>
            <Avatar alt={fullName} src={item.user? Utility.getAvatar(item.user.avatar): Utility.getAvatar("")} className={classes.avatar} />
            <div className={classes.title}>
                <Typography component="h4" className={classes.h4}>{fullName}</Typography>
                
                <Typography className={classes.titleStat}><ReactTimeAgo date={new Date(item.created_at)} locale="en" /></Typography>
            </div>
          </div>
            <PopoverPostActions className={classes.more} author={item.author} post_id={item.id} user_id={user.data.id} deletePost={deletePost} />
            
        </CardActions>
        </div>
        
    );
  }
}

TextWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    showDM: state.dialog.showDM,
    user: state.user,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    showDialog: open => {
      dispatch(dialogActions.showDialog(open));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TextWidget));
