import React from 'react';
import KPaper from '../../UIC/KPaper';
import { Typography } from '@material-ui/core';
import ContestHeader from '../ContestHeader';
import ContentHeader from '../ContentHeader';
import SubmissionFilterNav from './SubmissionFilterNav';
import SubmissionTimeline from './SubmissionTimeline';

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
        const { classes, stages, entries } = this.props;
        return (
            <KPaper>
                <ContentHeader />
                <SubmissionFilterNav stages={stages} filter={this.state.filter} handleChange={this.handleChange.bind(this)} />
                <SubmissionTimeline entries={entries} />
            </KPaper>
        )
    }
}

export default ContestSubmissionComponent;