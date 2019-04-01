import React from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import ChooseUsername from './ChooseUsername';
import PersonalInformation from './PersonalInformation';

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
                return <ChooseUsername setScreen={this.setScreen} />;
            case 'PersonalInformation':
                return <PersonalInformation setScreen={this.setScreen} />;
            case 'AddPicture':
                return <Typography>AddPicture</Typography>;
            default:
                return <ChooseUsername />;
        }
        
    }
}

export default OnboardComponent;