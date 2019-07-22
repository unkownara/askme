import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useInput } from '../hooks/useInput';
import { Auth } from 'aws-amplify';
import cookie from 'react-cookies';
import { getApiRequestCall } from '../../ApiRequests';
import { user_info_url } from '../../ApiUrls';
import { Icon } from 'semantic-ui-react';
import history from '../../history';
import './LogIn.css';
import 'semantic-ui-css/semantic.min.css';

export function LogIn() {

    const userName = useInput(''); /* It might be a user name or email Id */
    const password = useInput('');
    const [arrowChange, setArrowChange] = useState(true);
    const [isValidUser, setIsValidUser] = useState(false);
    const [inputType, setInputType] = useState(false);
    const [eyeIconFocus, setEyeIconFocus] = useState(false);
    const [loginErrorMsg, setLoginErrorMsg] = useState('');

    // useDispatch redux object setup
    const dispatch = useDispatch();
    // refs Create
    let textInput = React.createRef();

    function eyeIcon() {
        console.log('hello')
        textInput.current.focus();
        setInputType(!inputType);
    }

    function signUpRedirect() {
        setArrowChange(false);
        history.push('/signup');
    }

    function verifyUserCredentials(e) {
        e.preventDefault();
        Auth.signIn(userName.value, password.value)
            .then(user => {
                console.log("user details ", user, user.signInUserSession.idToken);
                /*
                    cookie storage,
                        userId
                    localStorage
                        userInformation
                */
                let data = user.signInUserSession.idToken;
                localStorage.setItem('_cog_u_in_', JSON.stringify(data.payload));
                cookie.save("_ref_i_token_", data.jwtToken, { path: '/' });
                cookie.save("_u_id_", data.payload.sub, { path: '/' });
                const dataPayload = {
                    userId: data.payload.sub
                };
                getApiRequestCall(user_info_url, dataPayload, function (response) {
                    console.log('user information', response);
                    if (response.status === 200 && response.data.Items !== undefined && response.data.Items.length === 1) {
                        dispatch({
                            type: 'STORE_USER_INFORMATION',
                            payload: response.data.Items[0]
                        })
                        localStorage.setItem('_user_info_', JSON.stringify(response.data.Items[0]));
                        history.push('/wall');
                    } else {
                        console.log('fallback here');
                    }
                });
            }).catch(err => {
                setIsValidUser(false);
                setLoginErrorMsg(err.message);
                console.log("inside error", err)
            });
    }

    return (
        <div className="loginContainer">
            <div className="textField">
                <p>login</p>
            </div>
            <div style={{
                position: 'relative'
            }}>
                <form className="formCreation">
                    <p className="loginHeadPara">Sign in to Account</p>
                    <div className="emailField">
                        <Icon name="user" color='grey' size="large" className="icon" />
                        <input
                            className="inputField email"
                            type="text"
                            placeholder="User name or Email ID"
                            {...userName}
                        />
                    </div>
                    <div className="passwordInput">
                        <Icon name="lock" color='grey' size="large" className="icon" />
                        <input
                            className="inputField password"
                            type={inputType ? "text" : "password"}
                            placeholder="Password"
                            ref={textInput}
                            onFocus={() => setEyeIconFocus(true)}
                            {...password}
                            text="Password"
                        />
                        {eyeIconFocus && (inputType ?
                            <Icon className="eyeIcon"
                                size="large"
                                name="eye"
                                color="grey"
                                onClick={eyeIcon} /> :
                            <Icon className="eyeIcon"
                                size="large"
                                name="eye slash"
                                color="grey"
                                onClick={eyeIcon} />)
                        }
                    </div>
                    <span className="forgotSpan" onClick={() => history.push('/forgot')}>forgot password?</span>
                    <div className="submitField">
                        {arrowChange ?
                            <Icon name="arrow right" className="arrowIcon" /> :
                            <Icon loading name="spinner" className="arrowIcon" />}
                        <button
                            className="submitButton"
                            onClick={verifyUserCredentials}>
                            Sign In
                    </button>
                        {loginErrorMsg}
                    </div>
                    <p className="bottomPara">Already have an account?
                        <span onClick={signUpRedirect}>sign up</span>
                    </p>
                </form>
            </div>
        </div>
    )
}
