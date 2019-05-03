import React from 'react';
import SmallCircularLoader from '../../../widgets/loaders/SmallCircularLoader';
import SimpleTextAlert from '../../../widgets/alerts/SimpleTextAlert';
import { withStyles, Typography } from '@material-ui/core';
import KFormSelect from '../../../widgets/form/KFormSelect';
import KBigButton from '../../UIC/KBigButton';
import Utility from './../../../services/Utility';
import { withRouter } from 'react-router-dom';

const styles = theme => ({
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
        fontSize: theme.typography.fontSize * 1.3,
        margin: 20,
        textAlign: 'center',
        //color: '#0000008a',
    },
});

class ContestEntryRequirementsWidget extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { user, classes, history, url, contest } = this.props;
        const currentEdition = Utility.isset(contest)? contest.currentEdition: {};

        if(!Utility.isset(user) || !Utility.isset(user.usertype)) {
            return <SmallCircularLoader />;
        }

        switch(user.usertype) {
            case 3:
                return <SimpleTextAlert message="You're a workforce. You can't join a contest" />;
            case 2:
                if(user.referralsCount >= 20) {
                    return <div>
                        <KFormSelect options={[{label: 'Singer', value: 1}, {label: 'Comedian', value: 2} ]} handleChange={this.handleChange} value={this.state.category} label="Category" name="category" />
                        <Typography className={classes.mentioned}>
                            Select one of the above categories
                        </Typography>
                        <KBigButton onClick={() => history.push(`${url}/entry`)} label="Join the contest" />
                        <Typography className={classes.agree}>
                            By joining, you agree that you understand the contest guidelines
                        </Typography>
                    </div>
                } else {
                    return <>
                        <SimpleTextAlert message={`To join ${currentEdition.slogan}, you must refer 20 users or more.`} />
                        <Typography color="primary" className={classes.infoText}>You've {user.referralsCount} referrals.</Typography>
                        </>
                }
            default:
                return (
                    <SmallCircularLoader />
                )
        }
    }
}

export default withRouter(withStyles(styles)(ContestEntryRequirementsWidget));