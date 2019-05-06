import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import ReactTimeAgo from 'react-time-ago'
import Utility from '../../services/Utility';


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
  },
  author: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  }
});

class MessageAuthorWidget extends React.Component {
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
    const { classes, avatar, fullName, date } = this.props;
    return (
        <div className={classes.author}>
        <div className={classes.rule} />

        <CardActions className={classes.actions} disableActionSpacing >
            <Avatar alt={fullName} src={avatar? Utility.getAvatar(avatar): Utility.getAvatar("")} className={classes.avatar} />
            <div className={classes.title}>
                <Typography component="h4" className={classes.h4}>{fullName}</Typography>
                
                <Typography className={classes.titleStat}><ReactTimeAgo date={new Date(date)} locale="en" /></Typography>
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

        </div>
    );
  }
}

MessageAuthorWidget.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  date: PropTypes.date.isRequired,
};

export default withStyles(styles)(MessageAuthorWidget);
