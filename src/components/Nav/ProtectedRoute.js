import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({component: Component, user, ...rest}) => {
    return (
        <Route
            {...rest}
            render={ props => {
                if(user.data.hasOwnProperty('id')) {
                    return <Component {...props} />;
                } else {
                    return <Redirect
                        to={
                            {
                                pathname: "/",
                                state: {
                                    from: props.location,
                                }
                            }
                        }
                    />
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