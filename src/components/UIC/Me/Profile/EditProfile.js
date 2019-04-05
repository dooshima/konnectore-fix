import React from 'react';
import EditBasicInformation from './EditBasicInformation';

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

    render() {
        return (
            <EditBasicInformation {...this.state} />
        )
    }
}

export default EditProfile;