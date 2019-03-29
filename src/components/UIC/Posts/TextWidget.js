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
    borderColor: '#29b673',
    borderWidth: 2,
    borderStyle: 'solid'
  },
  typeIcon: {
      position: 'absolute',
      right: 5,
      top: 5,
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
  icon: {
    margin: theme.spacing.unit * 0,
    padding: theme.spacing.unit * 0.2,
    marginRight: theme.spacing.unit * 0.8,
    fontSize: '0.9em',
    color: 'rgba(255,255,255,0.6)'
  },
  rule: {borderTop: '1px solid rgba(255,255,255,0.4)', margin: `0 ${theme.spacing.unit * 2}px`, height: 1},
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

  render() {
    const { classes, type, text, user, comments, endorsements, backgroundColor, textColor, fullName, contentStyle } = this.props;

    return (
      <>
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
            {text} 
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

        <CardActions className={classes.actions} disableActionSpacing >
            <Avatar alt={fullName} src={user.avatar} className={classes.avatar} />
            <div className={classes.title}>
                <Typography component="h4" className={classes.h4}>{fullName}</Typography>
                <Typography className={classes.titleStat}>12 hours ago</Typography>
            </div>

            <IconButton
                className={classes.more}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Show more"
            >
                <MoreHorizIcon />
            </IconButton>
        </CardActions>
        </>
    );
  }
}

TextWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextWidget);
