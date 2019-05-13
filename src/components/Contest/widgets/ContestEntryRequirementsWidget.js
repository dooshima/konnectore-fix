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
    joinInfo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

class ContestEntryRequirementsWidget extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            category: '',
        }
    }

    handleChange = value => {
        this.setState({category: value});
        this.props.addEntryCategory(value);
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
                if(user.referralsCount <= 20) {
                    return <div className={classes.joinInfo}>
                        <KFormSelect options={[{label: 'Singer', value: 1}, {label: 'Comedian', value: 2} ]} handleChange={this.handleChange} value={this.props.entryCategory} label="Category" name="category" />
                        <Typography className={classes.mentioned}>
                            Select one of the above categories
                        </Typography>
                        <KBigButton disabled={this.props.entryCategory.length < 1 } onClick={() => history.push(`${url}/entry`)} label="Join the contest" />
                        <Typography className={classes.agree}>
                            By joining, you agree that you understand the contest guidelines
                        </Typography>
                    </div>
                } else {
                    return <>
                        <SimpleTextAlert message={`To join ${currentEdition.slogan}, you must refer 20 users or more. Your referral ID is: ${user.referralID}`} />
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