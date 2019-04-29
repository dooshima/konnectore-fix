import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PostActivityContent from './PostActivityContent';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import { CardHeader, Avatar, CardActions, TextField, FormControl, Input } from '@material-ui/core';
import AlarmIcon from '@material-ui/icons/Alarm'
import Utility from '../../services/Utility';
import ReactTimeAgo from 'react-time-ago/commonjs/ReactTimeAgo';

const styles = theme => ({
    postText: {
        fontSize: theme.typography.fontSize * 1.2,
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
          width: '100%',
      },
      input: {
          padding: 10,
      },
      text: {
          padding: '40px 60px',
          fontSize: 30,
          color: 'white',
      },
});

class PostActivityWidget extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            comment: '',
        }
    }

    componentDidMount() {
        //this.setState({count: this.state.count++})
    }

    handleChange = event => {
        this.props.handleCommentChange(event.target.value);
    };

    addComment = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.props.addComment(this.props.item, this.state.comment)
    }

    
    render () {
    const comments = [...Array(3).keys()];
    const { classes, item } = this.props;

    return (
        <React.Fragment>
            <CardHeader
                className={classes.header}
                avatar={
                    <Avatar aria-label={item.fullName} className={classes.avatar} src={Utility.getAvatar(item.user.avatar)} />
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
                        <ReactTimeAgo date={new Date(item.created_at)} locale="en" />
                    </Typography>
                    </div>
                }
            />
            <CardContent className={classes.content}>
                <PostActivityContent post={item} {...this.props}/>
            </CardContent>
            <CardActions style={{flex: 1,}}>
                <form onSubmit={this.addComment.bind(this)} style={{flex: 1,}}>
                <FormControl className={classes.formControl}>
                    <Input 
                        disableUnderline={true}
                        placeholder="Add comment"
                        className={classes.input}
                        value={this.props.comment}
                        onChange={this.handleChange.bind(this)}
                    />
                </FormControl>
                </form>
            </CardActions>
        </React.Fragment>
    )
            }
}

export default withStyles(styles)(PostActivityWidget);