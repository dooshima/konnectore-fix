import React from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import ChooseUsername from './ChooseUsername';
import PersonalInformation from './PersonalInformation';
import AddYourPicture from './AddYourPicture';
import ChooseCategory from './ChooseCategory';
import ConnectWithPeople from './ConnectWithPeople';

class OnboardComponent extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            currentScreen: 'ChooseUsername',
        }
    }

    setScreen = (screen) => {
        this.setState({
            currentScreen: screen,
        })
    }

    render() {
        switch(this.state.currentScreen) {
            case 'ChooseUsername':
                return <ChooseUsername setScreen={this.setScreen} currentScreen={this.state.currentScreen} />;
            case 'PersonalInformation':
                return <PersonalInformation setScreen={this.setScreen} currentScreen={this.state.currentScreen} />;
            case 'AddYourPicture':
                return <AddYourPicture setScreen={this.setScreen} currentScreen={this.state.currentScreen} />;
            case 'ChooseCategory':
                return <ChooseCategory setScreen={this.setScreen} currentScreen={this.state.currentScreen} />;
            case 'ConnectWithPeople':
                return <ConnectWithPeople setScreen={this.setScreen} currentScreen={this.state.currentScreen} />;
            default:
                return <ChooseUsername />;
        }
        
    }
}

export default OnboardComponent;