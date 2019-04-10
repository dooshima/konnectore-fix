import React from 'react';
import EditBasicInformation from './EditBasicInformation';
import moment from 'moment';
import userActions from '../../../../reducers/user/actions';
import { connect } from 'react-redux';

class EditProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            gender: '',
            dob: '',
            form: 'EditBasicInformation',
        }
    }

    componentDidMount() {
        const profile = this.props.user.data
        this.setState({
            firstname: profile && profile.firstname? profile.firstname: '',
            lastname: profile && profile.lastname? profile.lastname: '',
            gender: profile && profile.gender? profile.gender: '',
            dob: profile && profile.dob? profile.dob: '',
            bio: profile && profile.bio? profile.bio: '',
        })
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    }

    handleDateChange = event => {
        let date = moment(event).format('YYYY-MM-DD');
        this.setState({dob: date});
    }

    handleSubmit = () => {
        const data = {
            user_id: this.props.user.data.id,
            ...this.state
        };
        this.props.handleEditProfile(data);
    }

    render() {
        console.log(this.state)
        return (
            <EditBasicInformation {...this.state} handleSubmit={this.handleSubmit} handleChange={this.handleChange} handleDateChange={this.handleDateChange} />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleEditProfile: data => {
            dispatch(userActions.handleEditProfile(data));
        }
    }
}

export default connect(null, mapDispatchToProps)(EditProfile);