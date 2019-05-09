import React from 'react';
import KCard from '../UIC/KCard';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { CardContent, Typography, FormControl, InputLabel, Input, MenuItem, CardActions, Grid, CardHeader, Select } from '@material-ui/core';
import KBigButton from '../UIC/KBigButton';
import ContentHeader from './ContentHeader';
import { connect } from 'react-redux';
import contestActions from '../../reducers/contest/actions';
import ContestUploadProgress from './ContestUploadProgress';
import Constants from '../../assets/Constants';
import EntrySubmissionMenu from './EntrySubmissionMenu';
import SimpleTextAlert from './../../widgets/alerts/SimpleTextAlert';
import { Link } from 'react-router-dom';


const styles = theme => ({
    main: {
        backgroundColor: '#f9fffc',
    },
    wrapper: {
        margin: 0
    },
    card: {
        width: 'auto',
        //margin: '100px auto 20px',
        padding: 16,
        flexDirection: 'column',
    },
    formControl: {
        width: '100%',
        marginTop: '1.8em',
    },
    bootstrapRoot: {
        'label + &': {
          marginTop: theme.spacing.unit * 3,
        },
      },
    bootstrapInput: {
        borderRadius: 20,
        position: 'relative',
        backgroundColor: '#f8f8f8',
        border: '1px solid transparent',
        fontSize: 14,
        color: '#a2a2a2',
        padding: '10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
          borderRadius: 20,
          borderColor: 'transparent',
          boxShadow: '0 0 0 0.2rem rgba(0,0,0,.01)',
        },
        '&::placeholder': {
            textOverflow: 'ellipsis !important',
            color: '#a2a2a2',
            fontSize: 14,
        }
    },
    bootstrapTextarea: {
        flex: 1,
        borderRadius: 0,
        position: 'relative',
        backgroundColor: '#f8f8f8',
        border: '1px solid transparent',
        fontSize: '1.5em',
        color: '#a2a2a2',
        padding: '1em',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
          borderRadius: 10,
          borderColor: 'transparent',
          boxShadow: '0 0 0 0.2rem rgba(0,0,0,.01)',
        },
        '&::placeholder': {
            textOverflow: 'ellipsis !important',
            color: '#a2a2a2',
            fontSize: 14,
        }
      },
    bootstrapFormLabel: {
        fontSize: 16,
    },
    footer: {display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'},
    appBar: {
          backgroundColor: '#e19f47',
          border: 'none',
    },
    alertText: {
          color: 'white',
          fontSize: theme.typography.fontSize * 1.5,
          textTransform: 'none',
          fontWeight: 300,
          opacity: 0.8,
          
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    content: {
        marginBottom: 20,
    },
    next: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    span: {
        fontSize: theme.typography.fontSize,
        color: '#aaa',
    },
    label: {
        fontSize: 12,
        marginBottom: 15,
    },
    title: {
        fontSize: theme.typography.fontSize * 1.2,
    },
    pickerWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#efefef',
    },
    picker: {
        margin: 25,
        border: `2px dashed #ccc`,
        minHeight: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#efefef',
        flex: 1,
        position: 'relative',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    file: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        opacity: 0,
        cursor: 'pointer',
    },
    info: {
        backgroundColor: '#a2a2a2',
        opacity: 0.4,
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
    },
    success: {
        display: 'flex',
        margin: '3em 2em',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const base = Constants.BASE_URL + 'storage';

class AddEntryComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: '',
            path: '',
            contest_slug: '',
        }
    }

    componentDidMount() {
        this.props.setUploadCount(0);
    }

    handleChange = name => event => {
        this.setState({[name]: event.target.value})
    }

    handleFileSelect = (event) => {
        let file = event.target.files[0];
        const fd = new FormData();
        fd.append("entryFile", file);
        fd.append('contest_slug', this.props.contest_slug);
        fd.append('contest_edition_id', 4);
        this.props.uploadMedia(this.props.accessToken, fd);
    }

    handleSubmit = () => {
        const entry = {
            path: this.props.entryFilePath, 
            description: this.state.description, 
            contest_slug: this.props.contest_slug,
            contest_edition_id: 4,
        };

        this.props.addEntry(entry, this.props.accessToken);
    }

    render() {
    const { classes, currentScreen, dob,submissionPath } = this.props;
    const active = !this.props.entryFilePath || !this.state.description || !this.props.contest_slug? true: false;
    return (
        <div className={classes.main}>
        <div className={classes.wrapper}>
        
                <KCard className={classes.card}>
                <ContentHeader />
                    {false && <CardHeader title="Add an entry" className={classes.title} />}
                    {(this.props.app && this.props.app.error !== false)? <div>
                    <CardHeader title={<EntrySubmissionMenu />} />
                    <CardContent className={classes.content}>
                        <div className={classes.pickerWrapper}>
                            <div className={classes.picker} 
                                style={{backgroundImage: this.props.entryFilePath? `url('${base}/${this.props.entryFilePath}')`: '',
                                margin: this.props.entryFilePath? 0: 30,
                                border: this.props.entryFilePath? 'none': `2px dashed #ccc`}}>
                              <input type="file" onChange={this.handleFileSelect} className={classes.file} />
                              <div className={classes.info}>
                                <Typography color="textSecondary">Files must be in .mp4 format only</Typography>
                                <Typography color="textSecondary">Dag image over or click to add</Typography>
                                <Typography color="textSecondary">Max filesize: 5mb</Typography>
                              </div>
                            </div>
                        </div>
                        <ContestUploadProgress count={this.props.uploadCount} />
                        {this.props.entryFilePath && <FormControl className={classes.formControl}>
                            <Input placeholder="Sell your talent ..."
                            disableUnderline={true}
                            multiline={true}
                            rows="3"
                            onChange={this.handleChange('description')}
                            className={classes.bootstrapTextarea} />
                        </FormControl>}
                    </CardContent>
                    <CardActions className={classes.actions}>
                        <div className={classes.next}>
                            <Typography>Need help?</Typography>
                            <KBigButton disabled={active} onClick={this.handleSubmit} label="Submit" size="small" />
                        </div>
                    </CardActions>
                    </div>: <div className={classes.success}>
                        <SimpleTextAlert message="You have successfully submitted your entry" />
                        <Link to={submissionPath}><Typography>View entries</Typography></Link>
                    </div>}
                </KCard>
        </div>
        </div>
    )
    }
};

AddEntryComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        accessToken: state.user.authToken, 
        uploadCount: state.contest.uploadCount,
        isUploading: state.contest.isUploading,
        entryFilePath: state.contest.entryFilePath,
        contest_slug: state.contest.data.slug,
        app: state.app.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        uploadMedia: (token, form) => {
            dispatch(contestActions.uploadMedia(token, form));
        },
        setUploadCount: count => {
            dispatch(contestActions.setUploadCount(count));
        },
        addEntry: (form, token) => {
            dispatch(contestActions.handleAddEntry(form, token));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddEntryComponent));