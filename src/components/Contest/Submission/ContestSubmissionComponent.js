import React from 'react';
import KPaper from '../../UIC/KPaper';
import { Typography } from '@material-ui/core';
import ContestHeader from '../ContestHeader';
import ContentHeader from '../ContentHeader';
import SubmissionFilterNav from './SubmissionFilterNav';
import SubmissionTimeline from './SubmissionTimeline';
import PostListWidget from '../../../widgets/posts/PostListWidget';
import EntryFilterNav from '../../../widgets/contest/EntryFilterNav';
import Utility from '../../../services/Utility';

class ContestSubmissionComponent extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            filter: 0,
        }
    }

    handleChange(event, newValue) {
        this.setState({filter: newValue});
    }

    render() {
        const { classes, stages, entries, user } = this.props;
        return (
            <KPaper>
                <ContentHeader {...this.props} />
                <SubmissionFilterNav stages={stages} filter={this.state.filter} handleChange={this.handleChange.bind(this)} />
                <EntryFilterNav currentEdition={Utility.isset(this.props.currentEdition)? this.props.currentEdition: {}}
                    handleContestSearch={this.props.handleContestSearch}
                    accessToken={this.props.accessToken}
                    contest={this.props.contest}
                    setSearchState={this.props.setSearchState} />
                <PostListWidget posts={entries} listType="contest" user={user} />
            </KPaper>
        )
    }
}

export default ContestSubmissionComponent;