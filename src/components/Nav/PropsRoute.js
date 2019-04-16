import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

const PropsRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={ props => {
                return <Component {...props} {...rest} />;
                }
            }
        />

    )
};

export default PropsRoute;