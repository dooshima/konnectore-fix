import React from 'react';
import { Avatar, List, ListSubheader, ListItem, CardContent, Typography, Link } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import KPaper from '../UIC/KPaper';
import KCard from '../UIC/KCard';
import KBigButton from '../UIC/KBigButton';
import KFormSelect from '../../widgets/form/KFormSelect';

const styles = theme => ({
    contestants: {
        flexWrap: 'wrap',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        margin: '1.5em auto',
    },
    available: {
        fontSize: theme.typography.fontSize * 1.1,
        fontWeight: 900,
    },
    avatar: {
        margin: '5px 1px',
        width: 30,
        height: 30,
    },
    awards: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 15,
    },
    award: {
        width: 45,
        height: 45,
        margin: 5,
    },
    categoryList: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-start',
        width: '100%'
    },
    mentioned: {
        fontSize: theme.typography.fontSize * 1.1,
        margin: 20,
        textAlign: 'center',
    },
    agree: {
        fontSize: theme.typography.fontSize * .9,
        margin: 20,
        textAlign: 'center',
    },
    viewLink: {
        textAlign: 'center',
        textDecoration: 'none',
        fontStyle: 'normal',
        fontSize: 15,
        cursor: 'pointer',
    },
    infoText: {
        fontSize: theme.typography.fontSize * 1.8,
        margin: 20,
        textAlign: 'center',
        color: '#0000008a',
    },
});

const contestants = [...Array(20)].map((v, i) => i);
class AvailablePositionsWidget extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            category: 1,
        }
    }

    handleChange = value => {
        this.setState({category: value})
    }

    render() {
        const {classes, match, history, url, user} = this.props;
        let content = '';
        console.log(user);
    return (
        <KCard style={{marginTop: 5}}>
            <CardContent className={classes.contestants}>
                <Typography className={classes.available}>Available positions</Typography>
                <div className={classes.awards}>
                    <img src="/contests/award1.png" className={classes.award} />
                    <img src="/contests/award2.png" className={classes.award} />
                    <img src="/contests/award3.png" className={classes.award} />
                </div>
                {false && <div className={classes.categoryList}>
                    <div style={{lineHeight: '5px'}}>
                        <Typography>Categor(ies) </Typography>&nbsp;
                        <Typography color="primary">Vocalists, Comedians, Dancers</Typography>
                    </div>
                </div>}

                {user.data.usertype === 3 && <Typography className={classes.infoText}>You're a workforce. You can't join a contest</Typography>}
                
                {user.data.usertype === 2 && user.data.referralsCount >= 20 && <div>
                <KFormSelect options={[{label: 'Singer', value: 1}, {label: 'Comedian', value: 2} ]} handleChange={this.handleChange} value={this.state.category} label="Category" name="category" />
                <Typography className={classes.mentioned}>
                    Select one of the above categories
                </Typography>
                <KBigButton onClick={() => history.push(`${url}/entry`)} label="Join the contest" />
                <Typography className={classes.agree}>
                    By joining, you agree that you understand the contest guidelines
                </Typography>
                </div>}

                {user.data.usertype === 2 && user.data.referralsCount < 20 && <Typography className={classes.infoText}>
                    To join the contest, you much refer at least 20 contests.
                </Typography>}
                <Link onClick={() => history.push(`${url}/submissions`)} className={classes.viewLink}><Typography color="textSecondary">View entries</Typography></Link>
            </CardContent>
        </KCard>
    )
    }
}


export default withStyles(styles)(AvailablePositionsWidget);