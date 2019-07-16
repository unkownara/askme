import React, {useState, useEffect} from 'react';
import { useInput } from '../hooks/useInput';
import {emailValidation} from '../../Validation';
import {passwordValidation} from '../../Validation'; 
import { Icon } from 'semantic-ui-react';
import history from '../../history';
import './LoginPage.css';
import 'semantic-ui-css/semantic.min.css';

export function LoginPage() {

    const email = useInput('');
    const password = useInput('');
    const [ arrowChange , setArrowChange ] = useState(true);
    const [ isEmailValid, setIsEmailValid ] = useState(true);
    const [ isPasswordValid, setIsPasswordValid ] = useState(true);
    
    function submit () {
        setArrowChange(false)
        history.push('./signup'); 
    }

    useEffect(() => {
        if(emailValidation(email.value)) { 
            setIsEmailValid(true); 
        } 
        else { 
            setIsEmailValid(false); 
        }
        if( passwordValidation(password.value) ) { 
            setIsPasswordValid(true)
        } 
        else {
            setIsPasswordValid(false) 
        } 
    }, [email.value, password.value]); 

    return (
        <React.Fragment>
                <div className="loginPageCreation">
                    <form className="formCreation">
                    <p className="loginHeadPara">Sign in to Account</p>
                        <div className="emailField"> 
                            <Icon name="user" color='grey' size="large" className="icon"  />
                            <input
                                className="inputField email"
                                type={"text"}
                                placeholder="Username"
                                {...email}
                                text="Email"
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
                        <span className="forgotSpan" onClick={() => history.push('/forgot')}>forgot password?</span>
                        <div className="submitField">
                            {arrowChange ? 
                        <Icon name="arrow right" className="arrowIcon" /> : 
                            <Icon loading name="spinner" className="arrowIcon" /> }
                        <input 
                            className="submitButton" 
                            type={"button"}
                            value={"Log in"} 
                        /> 
                        </div>
                        <p className="bottomPara">Create an new account?
                            <span onClick={submit}>sign up</span>
                        </p>
                    </form>
                </div> 
        </React.Fragment> 
    )
}
