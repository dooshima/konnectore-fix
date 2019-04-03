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

  }
});

function TextPostDetailItem(props) {
  const { classes, theme, item } = props;

  return (
    <Card className={classes.card}>
        <div className={classes.cover} title="Post title" style={{backgroundColor: '#ffb91b'}}>
            <Typography component="h3" color="textSecondary" className={classes.text}>
                {item.text}
            </Typography>
        </div>
        <div className={classes.details}>
            <CardHeader
                className={classes.header}
                avatar={
                    <Avatar aria-label="Victor Omemu" className={classes.avatar} src="/images/avatar.png" />
                }
                action={
                    <IconButton>
                    <ArrowDropDownIcon />
                    </IconButton>
                }
                title={
                    <Typography component="h6" variant="h6">
                        Victor Omemu
                    </Typography>
                }
                subheader={
                    <div className={classes.subheader}>
                    <AlarmIcon size="small" className={classes.alarmIcon} />
                    <Typography variant="subtitle1" color="textSecondary">
                        30 mins ago
                    </Typography>
                    </div>
                }
            />
            <CardContent className={classes.content}>
                <Typography>
                Watch my latest performance at the annual contest challenge last night. 
                Thanks to everyone who was a part of this night #Star #SuperStar
                </Typography>
            </CardContent>
            <CardActions>
                <FormControl className={classes.formControl}>
                    <Input 
                        disableUnderline={true}
                        placeholder="Add comment"
                        className={classes.input}
                    />
                </FormControl>
            </CardActions>
        </div>
    </Card>
  );
}

TextPostDetailItem.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TextPostDetailItem);
