import React from 'react';
import ChangePassword from './ChangePassword';

class ManageAccount extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            password: '',
            newPassword: '',
            form: 'ChangePassword',
        }

    }

    render() {
        return (
            <ChangePassword {...this.state} />
        )
    }
}

export default ManageAccount;