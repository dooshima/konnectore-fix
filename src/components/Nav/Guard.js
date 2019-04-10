import React from 'react';
import { connect } from 'react-redux';

class Guard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authenticated: false
        }
    }

    static getDerivedStateFromProps(props) {
        const data = props.user;
        if(data.hasOwnProperty('id')) {
            return {authenticated: true};
        } else {
            return {authenticated: false};
        }
    }

    componentDidMount() {
        const data = this.props.user;
        if(data.hasOwnProperty('id')) {
            this.setState({authenticated: true});
        } else {
            this.setState({authenticated: false})
        }
    }

    login(cb) {
        this.authenticated = true;
        cb;
    }

    logout(cb) {
        this.authenticated = false;
        cb;
    }

    isAuthenticated() {
        return this.state.authenticated;
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps, null)(Guard);