import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header'

export const PrivateRoute = ({ 
    isAuthenticated, 
    component: Component,
    // ...rest passes down all the rest, excluding the two previously defined; isAuthenticated 
    // and component
    ...rest
 }) => (
     // we did all this so that Route wouldn't get isAuth.., (as it is not supported) and component 
     // either, so that the conditional logic for component can be used here in <Route />
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
                <Header/>
                <Component {...props} />
            </div>
        ) : (
            <Redirect to="/" />
        )
    )}/>
);

const mapStateToProps = (state) => ({
    // The !! turns undefined to false and a match to true: 
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);