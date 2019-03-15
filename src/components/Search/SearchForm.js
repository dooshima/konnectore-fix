import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { InputBase } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { connect } from 'react-redux';
import searchActions from './../../reducers/search/actions';
import { withRouter } from 'react-router-dom';

const styles = theme => ({
    searchForm: {
        background: '#efefef',
    },
    search: {
        position: 'relative',
        borderRadius: 18,
        backgroundColor: fade(theme.palette.common.black, 0.06),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.black, 0.08),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing.unit * 3,
          width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: 200,
        },
    },
});

class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            q: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        const { classes, show } = this.props;
        return ( 
            <form onSubmit={this.handleSubmit} method="get">
                <div className={classes.search} style={{display: show? 'inherit': 'none'}}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                placeholder="Search…"
                onChange={this.handleChange('q')}
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                />
                </div>
            </form>
        )
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
        this.props.addQueryText(event.target.value);
    };

    handleSubmit(e) {
        e.preventDefault();
        //window.location = '/search?q=' + this.state.q;
        this.props.history.push('/search');
        this.props.handleSearch(this.state.q, '');
        return false;
    }
}

SearchForm.propTypes = {
    classes: PropTypes.object.isRequired,
}

const mapStateToProps = (state, ownProp) => {
    return {
        show: state.search.show
    };
}

const mapDispathToProps = dispatch => {
    return {
        addQueryText: text => {
            dispatch(searchActions.addQueryText(text));
        },
        handleSearch: (queryText, queryFilter) => {
            dispatch(searchActions.handleSearch(queryText, queryFilter));
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(withRouter(withStyles(styles)(SearchForm)));
