import React, {useState, useEffect} from 'react';
import { useInput } from '../hooks/useInput';
import { Auth } from 'aws-amplify';
import cookie from 'react-cookies';
import { getApiRequestCall } from '../../ApiRequests';
import { user_info_url } from '../../ApiUrls';
import { Icon } from 'semantic-ui-react';
import history from '../../history';
import './LoginPage.css';
import 'semantic-ui-css/semantic.min.css';

export function LoginPage() {

    const userName = useInput(''); /* It might be a user name or email Id */
    const password = useInput('');
    const [arrowChange, setArrowChange] = useState(true);
    const [isValidUser, setIsValidUser] = useState(false);
    const [loginErrorMsg, setLoginErrorMsg] = useState('');

    function signUpRedirect () {
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
                cookie.save("_ref_i_token_", data.jwtToken, {path: '/'});
                cookie.save("_u_id_", data.payload.sub, {path: '/'});
                const dataPayload = {
                    userId: data.payload.sub
                };
                getApiRequestCall(user_info_url, dataPayload, function(response) {
                    console.log('user information', response);
                });
            }).catch(err => {
                setIsValidUser(false);
                setLoginErrorMsg(err);
                console.log("inside error", err)
        });
    }

    return (
        <React.Fragment>
            <div className="textField">
                <p>login</p>
            </div>
            <div className="loginPageCreation">
                <form className="formCreation">
                <p className="loginHeadPara">Sign in to Account</p>
                    <div className="emailField"> 
                        <Icon name="user" color='grey' size="large" className="icon"  />
                        <input
                            className="inputField email"
                            type={"text"}
                            placeholder="User name or Email ID"
                            {...userName}
                        />
                    </div>
                    <div className="passwordInput">
                        <Icon name="lock" color='grey' size="large" className="icon" />
                        <input
                            className="inputField password"    
                            type={"password"}
                            placeholder="Password"
                            {...password}
                            text="Password" 
                        />
                    </div>
                    <span className="forgotSpan" onClick={()=> history.push('/forgot')}>forgot password?</span>
                    <div className="submitField">
                        {arrowChange ? 
                    <Icon name="arrow right" className="arrowIcon" /> : 
                        <Icon loading name="spinner" className="arrowIcon" /> }
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
        </React.Fragment> 
    )
}
