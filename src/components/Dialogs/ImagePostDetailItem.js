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
  }
});

function ImagePostDetailItem(props) {
  const { classes, theme, item } = props;
  console.log(item)
  return (
    <Card className={classes.card}>
        <CardMedia
            className={classes.cover}
            image={item.coverImage}
            title="Live from space album cover"
        />
        <div className={classes.details}>
            <CardHeader
                className={classes.header}
                avatar={
                    <Avatar aria-label={item.fullName} className={classes.avatar} src={item.avatar? item.avatar: "/images/avatar.png"} />
                }
                action={
                    <IconButton>
                    <ArrowDropDownIcon />
                    </IconButton>
                }
                title={
                    <Typography component="h6" variant="h6">
                        {item.fullName}
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
                {item.text}
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

ImagePostDetailItem.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ImagePostDetailItem);
