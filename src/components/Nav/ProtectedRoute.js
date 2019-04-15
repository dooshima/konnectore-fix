import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import MeController from '../UIC/Me/MeController';
import SidebarComponent from '../UIC/SidebarComponent';
import HomeComponent from '../Home/HomeComponent';
import DashboardComponent from '../Dashboard/DashboardComponent';

const ProtectedRoute = ({component: Component, render: Render, user, ...rest}) => {
    return (
        <Route
            {...rest}
            render={ props => {
                if((props.match.path === '/' || !user.data || !user.data.hasOwnProperty('id'))) {
                    return (user.authToken && user.data.hasOwnProperty('id'))? <SidebarComponent component={DashboardComponent} user={user} {...props} />: <HomeComponent {...props} />
                } else {
                    console.log('Option two')
                    if(props.match.path === '/') {
                        return <Redirect
                        to={
                            {
                                pathname: "/me",
                                state: {
                                    from: props.location,
                                }
                            }
                        }
                    />
                    } else {
                        if(Component)
                            return <Component {...props} />;
                        else
                            return <Render {...props} />;
                    }
                }
                }
            }
        />

    )
};

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}
export default connect(mapStateToProps)(ProtectedRoute);