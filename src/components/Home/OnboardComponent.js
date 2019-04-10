import React from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import ChooseUsername from './ChooseUsername';
import PersonalInformation from './PersonalInformation';
import AddYourPicture from './AddYourPicture';
import ChooseCategory from './ChooseCategory';
import ConnectWithPeople from './ConnectWithPeople';
import { connect } from 'react-redux';
import userActions from '../../reducers/user/actions';
import { withRouter } from 'react-router-dom';

class OnboardComponent extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            currentScreen: 'ChooseUsername',
        }

        this.handleFileupload = this.handleFileupload.bind(this);
    }

    static getDerivedStateFromProps(props) {
        
        return props;
    }

    componentDidMount() {
        if(!this.props.userAccount.hasOwnProperty('id'))
            this.props.history.push('/');
        this.props.getTalentCategories();
    }

    setScreen = (screen) => {
        this.setState({
            currentScreen: screen,
        })
    }

    handleUsernameChange = event => {
        let username = event.target.value;
        this.setState({ username:  username});
        if(username.length > 4)
            this.props.checkUsername({username});
    }

    handleChange = name => event => {
        let value = event.target.value;
        this.setState({ [name]:  value});
    }

    handleFileupload(event) {
        const file = event.target.files[0];
        this.setState({avatar: file})
        const fd = new FormData();
        fd.append('avatar', file);
        fd.append('user_id', this.props.newAccount.id);
        console.log(file);
        this.props.uploadAvatar(fd);
    }

    setSelectedCategories = selectedCategories => {
        this.setScreen({categories: selectedCategories});
    }

    setSelected = (selected) => {
        this.setState({categoryList: selected});
    }
    redirect = () => {
        this.props.history.push('/me');
    }

    submit = () => {
        const talents = this.state.categoryList.map( s => s.id );
        const data = { ...this.state, user_id: this.props.newAccount.id, talents };
        this.props.processOnboarding(data);
    }

    render() {
        switch(this.state.currentScreen) {
            case 'ChooseUsername':
                return <ChooseUsername setScreen={this.setScreen} 
                    currentScreen={this.state.currentScreen}
                    handleUsernameChange={this.handleUsernameChange}
                    username={this.state.username}
                    {...this.props} />;
            case 'PersonalInformation':
                return <PersonalInformation setScreen={this.setScreen} 
                    currentScreen={this.state.currentScreen}
                    handleChange={this.handleChange}
                    {...this.state}
                     />;
            case 'AddYourPicture':
                return <AddYourPicture setScreen={this.setScreen} 
                    currentScreen={this.state.currentScreen}
                    handleChange={this.handleChange}
                    handleFileupload={this.handleFileupload}
                    avatar={this.props.avatar}
                    {...this.state} {...this.props} />;
            case 'ChooseCategory':
                return <ChooseCategory setScreen={this.setScreen} 
                    currentScreen={this.state.currentScreen}
                    handleChange={this.handleChange}
                    talentCategories={this.props.talentCategories}
                    setSelected={this.setSelected}
                    submit={this.submit} {...this.props}
                    redirect={this.redirect} />;
            case 'ConnectWithPeople':
                return <ConnectWithPeople setScreen={this.setScreen} 
                    currentScreen={this.state.currentScreen}
                    connectWith={this.props.connectWith} />;
            default:
                return <ChooseUsername />;
        }
        
    }
}

const mapStateToProps = state => {
    return {
        signupSuccessful: state.user.account.hasOwnProperty('id'),
        userAccount: state.user.account,
        authError: state.user.errorMsg,
        authLoading: state.user.isLoading,
        usernameExists: state.user.available,
        newAccount: state.user.account,
        avatar: state.user.avatar,
        talentCategories: state.user.talentCategories,
        signupRedirect: state.user.signupRedirect,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        handleSignup: data => {
            dispatch(userActions.handleSignup(data));
        },
        clearUserCache: () => {
            dispatch(userActions.clearUserCache());
        },
        checkUsername: username => {
            dispatch(userActions.checkUsername(username));
        },
        uploadAvatar: avatar => {
            dispatch(userActions.handleUploadAvatar(avatar));
        },
        getTalentCategories: () => {
            dispatch(userActions.getTalentCategories());
        },
        processOnboarding: data => {
            dispatch(userActions.processOnboarding(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(OnboardComponent));