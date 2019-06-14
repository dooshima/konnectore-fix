import React from 'react';
import { Typography, RootRef } from '@material-ui/core';
import PropTypes from 'prop-types';
import ChooseUsername from './ChooseUsername';
import PersonalInformation from './PersonalInformation';
import AddYourPicture from './AddYourPicture';
import ChooseCategory from './ChooseCategory';
import ConnectWithPeople from './ConnectWithPeople';
import { connect } from 'react-redux';
import userActions from '../../reducers/user/actions';
import { withRouter, Redirect } from 'react-router-dom';
import Utility from '../../services/Utility';
import friendActions from '../../reducers/friend/actions';

const RR = (url) => {
    return <Redirect to="/me" />
}
class OnboardComponent extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            currentScreen: 'ChooseUsername', // ConnectWithPeople
        }

        this.handleFileupload = this.handleFileupload.bind(this);
    }

    static getDerivedStateFromProps(props) {
        
        return props;
    }

    componentDidMount() {
        console.log(this.props.user);
        const props = this.props;
        //if(!props.user.authToken || !Utility.isset(props.user.data.firstname) || !Utility.isset(props.user.data.lastname) || !Utility.isset(props.user.data.id)) {
            //this.props.handleSignupSuccess({id: props.user.data.id, email: props.user.data.id});
            //this.props.logout(props.user.data.id);
            //props.history.push('/onboard');
        //}
        this.props.getTalentCategories();
        this.props.getFriendSuggestion(this.props.authToken);
        this.setState({username: this.props.userData.username})
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
        let fd = new FormData();
        fd.append('avatar', file);
        fd.append('user_id', Utility.isset(this.props.userData) &&  Utility.isset(this.props.userData.id)? this.props.userData.id: this.props.newAccount.id);
        console.log(fd, this.props.userData, this.props.newAccount);
        this.props.uploadAvatar(false, fd);
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

    goto = url => {
        return <RR />;
    }

    submit = () => {
        const talents = this.state.categoryList.map( s => s.id );
        const data = { ...this.state, user_id: Utility.isset(this.props.userData) &&  Utility.isset(this.props.userData.id)? this.props.userData.id: this.props.newAccount.id, talents };
        //console.log(data)
        this.props.processOnboarding(data, this);
    }

    handleFollow = userID => {
        this.props.follow(userID, this.props.authToken);
    }

    handleUnfollow = userID => {
        this.props.unfollow(userID, this.props.authToken);
    }

    render() {
        console.log('See onboarding')
        const data = this.props.userData;
        if(Utility.isset(data.username) && Utility.isset(data.firstname) && !Utility.isset(data.lastname)) {
            //this.props.logout(this.props.userData.id);
            //return <Redirect to="/me" />
            //this.props.history.push('/me');
        }
            
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
                    connectWith={this.props.connectWith}
                    handleFollow={this.handleFollow}
                    handleUnfollow={this.handleUnfollow} submit={this.submit}
                    people={this.props.people} {...this.props}
                    newAccount={this.props.newAccount} />;
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
        authToken: state.user.authToken,
        userData: state.user.data,
        people: state.friend.friends,
        followers: state.user.followers,
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
        uploadAvatar: (user_id, avatar) => {
            dispatch(userActions.handleUploadAvatar(user_id, avatar));
        },
        getTalentCategories: () => {
            dispatch(userActions.getTalentCategories());
        },
        processOnboarding: (data, context) => {
            dispatch(userActions.processOnboarding(data, context));
        },
        storeUsername: (username, token) => {
            dispatch(userActions.storeUsername(username, token));
        },
        logout: (uid) => {
            dispatch(userActions.handleLogout(uid))
        },
        resendConfirmation: token => {
            dispatch(userActions.resendConfirmation(token));
        },
        getFriendSuggestion: token => {
            dispatch(userActions.getFriendSuggestion(token))
        },
        follow: (userID, token) => {
            dispatch(friendActions.follow(userID, token));
        },
        unfollow: (userID, token) => {
            dispatch(friendActions.unfollow(userID, token));
        },
        resendConfirmation: token => {
            dispatch(userActions.resendConfirmation(token));
        },
        handleSignupSuccess: data => {
            dispatch(userActions.authSignupSuccess(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(OnboardComponent));