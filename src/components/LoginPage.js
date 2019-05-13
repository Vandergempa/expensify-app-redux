import React from 'react';
import { connect } from 'react-redux';
import { startLoginGoogle, startLoginFacebook } from '../actions/auth';

// Destructuring startLogin from props(mapDispatchToProps from the store):
export const LoginPage = ({ startLoginGoogle, startLoginFacebook }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title" >Expensify</h1>
            <h3>It's time to get your expenses under control.</h3>
            <p>Choose to login:</p>
            <a className="button__login" onClick={startLoginFacebook}><img src="images/facebook_squared.png"></img></a>
            <a className="button__login" onClick={startLoginGoogle}><img src="images/google_icon.png"></img></a>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLoginGoogle: () => dispatch(startLoginGoogle()),
    startLoginFacebook: () => dispatch(startLoginFacebook())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
