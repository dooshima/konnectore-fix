import React from 'react';
import KPaper from '../UIC/KPaper';
import ContentHeader from './ContentHeader';
import GuidelinesContent from './GuidelinesContent';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        padding: theme.spacing.unit * 1,
    }
})
class ContestGuideComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        const { classes } = this.props;
        return (
            <KPaper classes={classes.root}>
                <ContentHeader />
                <GuidelinesContent />
            </KPaper>
        )
    }
}

export default withStyles(styles)(ContestGuideComponent);