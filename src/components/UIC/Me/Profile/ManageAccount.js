import React from 'react';
import ChangePassword from './ChangePassword';
import { setDate } from 'date-fns';
import userActions from '../../../../reducers/user/actions';
import { connect } from 'react-redux';

class ManageAccount extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            password: '',
            newPassword: '',
            reNewPassword: '',
            form: 'ChangePassword',
        }

    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    }

    handleSubmit = () => {
        const {password, newPassword, newPassword_confirmation} = this.state;
        const form = {password, newPassword, newPassword_confirmation};
        this.props.changePassword(form, this.props.user.authToken);
    }

    render() {
        if(this.props.user.errorMsg === 'redirectme') {
            this.props.history.push('/me')
            this.props.authError("");
        }
        return (
            <ChangePassword {...this.props} {...this.state}
                handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)} />
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changePassword: (form, token) => {
            dispatch(userActions.changePassword(form, token));
        },
        authError: error => {
            dispatch(userActions.authError(error));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAccount);