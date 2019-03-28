import React from 'react';
import { NavLink as Link, Route } from 'react-router-dom';
import MeHeader from './MeHeader';

class MeController extends React.Component {
    render() {
        const {match} = this.props;
        return (
            <>
                <div>
                    <MeHeader path={match.path} {...this.props} />
                    <Route exact path={`${match.path}/:filter`} component={MeTimeline} />
                    <Route exact path={`${match.path}/account/:action`} component={EditProfile} />
                </div>
                <div>
                    <Route exact path={`${match.path}/account/:action`} component={EditProfileMenu} />
                </div>
            </>
        )
    }
}

export default MeController;

function MeTimeline({match}) {
    return (
        <div>
            <h4>This is the My Time line. With {match.params.filter} selected</h4>
        </div>
    )
}

function EditProfile({match}) {
    return (
        <div>
            <h4>
                Edit profile form {match.url}, {JSON.stringify(match.params)} 
            </h4>
        </div>
    )
}

function EditProfileMenu(props) {
    return (
        <div>
            <h4>Edit Information</h4>
            <ul>
                <li>
                    Link One
                </li>
            </ul>
        </div>
    )
}



