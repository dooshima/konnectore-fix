import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

const PropsRoute = ({component: Component, user, ...rest}) => {
    return (
        <Route
            {...rest}
            render={ props => {
                return <Component {...props} {...{user: user}} {...rest} />;
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
export default connect(mapStateToProps)(PropsRoute);