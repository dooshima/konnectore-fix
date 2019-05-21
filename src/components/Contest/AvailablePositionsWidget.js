import React from 'react';
import { Avatar, List, ListSubheader, ListItem, CardContent, Typography, Link } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import KPaper from '../UIC/KPaper';
import KCard from '../UIC/KCard';
import KBigButton from '../UIC/KBigButton';
import KFormSelect from '../../widgets/form/KFormSelect';
import ContestEntryRequirementsWidget from './widgets/ContestEntryRequirementsWidget';
import JoinContestWidget from './widgets/JoinContestWidget';

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
        const {classes, match, history, url, user, contest} = this.props;
        let content = '';
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

                <JoinContestWidget user={user.data} url={url} contest={contest} entryCategory={this.props.entryCategory} addEntryCategory={this.props.addEntryCategory} />

                <Link onClick={() => history.push(`${url}/submissions`)} className={classes.viewLink}><Typography color="textSecondary">View entries</Typography></Link>
            </CardContent>
        </KCard>
    )
    }
}

export default withStyles(styles)(AvailablePositionsWidget);