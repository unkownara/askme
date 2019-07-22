import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { Dropdown, Icon } from 'semantic-ui-react';
import { useInput } from '../hooks/useInput';
import { ConfirmSignUp } from './ConfirmSignUp';
import { formValidation, inputValidation } from "../../Validation.js";
import './Signup.css';
import 'semantic-ui-css/semantic.min.css';
import { readFileSync } from 'fs';

const friendOptions = [
    {
        key: 'Jenny Hess',
        text: 'Jenny Hess',
        value: 'Jenny Hess',
        image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    },
    {
        key: 'Elliot Fu',
        text: 'Elliot Fu',
        value: 'Elliot Fu',
        image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
    },
    {
        key: 'Stevie Feliciano',
        text: 'Stevie Feliciano',
        value: 'Stevie Feliciano',
        image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
    },
    {
        key: 'Christian',
        text: 'Christian',
        value: 'Christian',
        image: { avatar: true, src: '/images/avatar/small/christian.jpg' },
    },
    {
        key: 'Matt',
        text: 'Matt',
        value: 'Matt',
        image: { avatar: true, src: '/images/avatar/small/matt.jpg' },
    },
    {
        key: 'Justen Kitsune',
        text: 'Justen Kitsune',
        value: 'Justen Kitsune',
        image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
    },
]

export function Signup() {

    const [isMaleActive, setIsMaleActive] = useState(true);
    const [isFormValid, setIsFormValid] = useState(false);
    const [isFemaleActive, setIsFemaleActive] = useState(true);
    const [isOtherActive, setIsOtherActive] = useState(true);
    const [arrowChange, setArrowChange] = useState(true);
    const [genderValue, setGenderValue] = useState('');
    const [firstNameValidationErrorMsg, setFirstNameValidationErrorMsg] = useState('');
    const [lastNameValidationErrorMsg, setLastNameValidationErrorMsg] = useState('');
    const [userNameValidationErrorMsg, setUserNameValidationErrorMsg] = useState('');
    const [emailValidationErrorMsg, setEmailValidationErrorMsg] = useState('');
    const [passwordValidationErrorMsg, setPasswordValidationErrorMsg] = useState('');
    const [phoneNumberValidationErrorMsg, setPhoneNumberValidationErrorMsg] = useState('');
    const [genderValidationErrorMsg, setGenderValidationErrorMsg] = useState('');
    const [formValidationErrorMsg, setFormValidationErrorMsg] = useState('');
    const [isSignUpCompleted, setIsSignUpCompleted] = useState('');
    const [userId, setUserId] = useState('');

    const firstName = useInput('');
    const lastName = useInput('');
    const userName = useInput('');
    const password = useInput('');
    const email = useInput('');
    const phoneNumber = useInput('');

    const userInfo = {
        firstName: firstName.value,
        lastName: lastName.value,
        userName: userName.value,
        email: email.value,
        password: password.value,
        phoneNumber: phoneNumber.value,
        gender: genderValue
    }

    let firstNameRef = React.createRef();
    let lastNameRef = React.createRef();
    let userNameRef = React.createRef();
    let emailRef = React.createRef();
    let passwordRef = React.createRef();
    let phoneRef = React.createRef();
    let genderRef = React.createRef();

    function gender(value) {
        if (value === 'male') {
            console.log(isMaleActive)
            setIsMaleActive(false)
            setIsFemaleActive(true)
            setIsOtherActive(true)
        }
        else if (value === 'female') {
            setIsMaleActive(true)
            setIsFemaleActive(false)
            setIsOtherActive(true)
        }
        else if (value === 'other') {
            setIsMaleActive(true)
            setIsFemaleActive(true)
            setIsOtherActive(false)
        }
        setGenderValue(value);
    }

    function onBlurChange(name, value) {
        switch (name) {
            case 'firstName':
                if (inputValidation('name', value)) {
                    setFirstNameValidationErrorMsg('');
                } else {
                    setFirstNameValidationErrorMsg('* First name is required');
                }
                break;
            case 'lastName':
                if (inputValidation('name', value)) {
                    setLastNameValidationErrorMsg('');
                } else {
                    setLastNameValidationErrorMsg('* Last name is required');
                }
                break;
            case 'userName':
                if (inputValidation('name', value)) {
                    setUserNameValidationErrorMsg('');
                } else {
                    setUserNameValidationErrorMsg('* username is required');
                }
                break;
            case 'email':
                if (inputValidation('email', value)) {
                    setEmailValidationErrorMsg('');
                } else {
                    if (value === '')
                        setEmailValidationErrorMsg('* email is required');
                    else
                        setEmailValidationErrorMsg('* please enter valid email');
                }
                break;
            case 'password':
                if (inputValidation('password', value)) {
                    setPasswordValidationErrorMsg('');
                } else {
                    if (value === '')
                        setPasswordValidationErrorMsg('* password is required');
                    else
                        setPasswordValidationErrorMsg('* please enter valid password');
                }
                break;
            case 'phoneNumber':
                if (inputValidation('phone', value)) {
                    setPhoneNumberValidationErrorMsg('');
                } else {
                    if (value === '')
                        setPhoneNumberValidationErrorMsg('* phone number is required');
                    else
                    setPhoneNumberValidationErrorMsg('* please enter valid phone number');
                }
                break;
            case 'gender':
                if (inputValidation('name', value)) {
                    setGenderValidationErrorMsg('');
                } else {
                    setGenderValidationErrorMsg('invalid');
                }
                break;
            default:
                break;
        }
    }

    function formSubmit(e) {
        e.preventDefault();
        console.log('userInfoect ', userInfo);
        switch (formValidation(userInfo)) {
            case 'firstName':
<<<<<<< HEAD
                setFirstNameValidationErrorMsg('* First name is required');
                firstNameRef.current.focus();
                break;
            case 'lastName':
                setLastNameValidationErrorMsg('* Last name is required');
                lastNameRef.current.focus();
                break;
            case 'userName':
                setUserNameValidationErrorMsg('* userName is required');
                userNameRef.current.focus();
                break;
            case 'email':
                setEmailValidationErrorMsg('* Email is required');
                emailRef.current.focus();
                break;
            case 'password':
                setPasswordValidationErrorMsg('* password is required');
                passwordRef.current.focus();
                break;
            case 'gender':
                setGenderValidationErrorMsg('* gender is required');
                genderRef.current.focus();
=======
                setFirstNameValidationErrorMsg("First name can't be empty");
                setFormValidationErrorMsg('Fill required fields');
                break;
            case 'lastName':
                setLastNameValidationErrorMsg("Last name can't be empty");
                setFormValidationErrorMsg('Fill required fields');
                break;
            case 'userName':
                setUserNameValidationErrorMsg("Username can't be empty");
                setFormValidationErrorMsg('Fill required fields');
                break;
            case 'email':
                setEmailValidationErrorMsg("Email can't be empty");
                setFormValidationErrorMsg('Fill required fields');
                break;
            case 'password':
                setPasswordValidationErrorMsg("Enter a valid Password");
                setFormValidationErrorMsg('Fill required fields');
                break;
            case 'gender':
                setGenderValidationErrorMsg("Select a gender");
                setFormValidationErrorMsg('Fill required fields');
>>>>>>> 55edd7c19353ad0562bd82425fa4fa85578767c3
                break;
            case 'none':
                setFormValidationErrorMsg('Fill required fields');
                setIsFormValid(true);
                setArrowChange(false)
                break;
        }
    }

    useEffect(() => {
        if (isFormValid && !isSignUpCompleted) {
            Auth.signUp({
                username: email.value,
                password: password.value,
                attributes: {
                    email: email.value,
                    phone_number: '+91' + phoneNumber.value,
                }
            }).then(data => {
                console.log('signup data ', data);
                setIsSignUpCompleted(true);
                setUserId(data.userSub);
            }).catch(err => console.log(err));
        } else {
            console.log('false');
        }
    });

    /* Triggering component based on signup form validation */
    if (isSignUpCompleted) {
        const userInfo = {
            userId: userId,
            firstName: firstName.value,
            lastName: lastName.value,
            userName: userName.value,
            email: email.value,
            phoneNumber: phoneNumber.value,
            gender: genderValue
        };
        return (
            <ConfirmSignUp
                emailId={email.value}
                userInfo={userInfo}
            />
        );
    } else {
        return (
            <div className="signupContainer">
                <div className="textField">
                    <p>Sign Up</p>
                </div>
                <div className="signUpCreation">
                    <p className="signupHeader">Sign up to Account</p>
                    <form>
                        <div className="firstAndLastName division">
                            <div>
                                <label>First name</label><br />
                                <input
                                    {...firstName}
                                    onBlur={() => onBlurChange('firstName', firstName.value)}
                                    ref = {firstNameRef}
                                    type="text"
                                    placeholder="Enter Firstname"
                                    className="input firstName"
                                />
                                <span className="errMsgSpan">{firstNameValidationErrorMsg}</span>
                            </div>
                            <div>
                                <label>Last name</label><br />
                                <input
                                    {...lastName}
                                    onBlur={() => onBlurChange('lastName', lastName.value)}
                                    ref = {lastNameRef}
                                    type="text"
                                    placeholder="Enter Lastname"
                                    className="input lastName"
                                />
                                <span className="errMsgSpan">{lastNameValidationErrorMsg}</span>
                            </div>
                        </div>
                        <div className="division">
                            <label>Username</label>
                            <input
                                {...userName}
                                onBlur={() => onBlurChange('userName', userName.value)}
                                ref = {userNameRef}
                                type="text"
                                placeholder="Enter Username"
                                className="input firstName"
                            />
                            <span className="errMsgSpan">{userNameValidationErrorMsg}</span>
                        </div>
                        <div className="division">
                            <label>Email</label>
                            <input
                                {...email}
                                onBlur={() => onBlurChange('email', email.value)}
                                ref = {emailRef}
                                type="text"
                                placeholder="Enter Email"
                                className="input email"
                            />
                            <span className="errMsgSpan">{emailValidationErrorMsg}</span>
                        </div>
                        <div className="division">
                            <label>Password</label>
                            <input
                                {...password}
                                onBlur={() => onBlurChange('password', password.value)}
                                ref = {passwordRef}
                                type="text"
                                placeholder="Enter Password"
                                className="input"
                            />
                            <span className="errMsgSpan">{passwordValidationErrorMsg}</span>
                        </div>
                        <div className="division">
                            <label>Phone no</label>
                            <input
                                {...phoneNumber}
                                onBlur={() => onBlurChange('phoneNumber', phoneNumber.value)}
                                ref = {phoneRef}
                                type="text"
                                placeholder="Enter PhoneNumber"
                                className="input"
                                maxLength="10"
                            />
                            <span className="errMsgSpan">{phoneNumberValidationErrorMsg}</span>
                        </div>
                        <div className="division">
                            <label>Gender</label>
                            <div className="genderDiv">
                                <div className="genderSection">
                                    {isMaleActive ?
                                        <Icon name="circle outline" className="genderIcon" /> :
                                        <Icon name="dot circle" color="blue" className="genderIcon" />}
                                    {isMaleActive ?
                                        <input
                                            ref = {genderRef}
                                            type="button"
                                            className="gender genderActive"
                                            value="Male"
                                            onClick={() => gender('male')}
                                        /> :
                                        <input
                                            type="button"
                                            className="gender genderInActive"
                                            value="Male"
                                            style={{
                                                color: 'blue',
                                                border: '2px solid blue'
                                            }}
                                        />}
                                </div>
                                <div className="genderSection">
                                    {isFemaleActive ?
                                        <Icon name="circle outline" className="genderIcon" /> :
                                        <Icon name="dot circle" color="blue" className="genderIcon" />}
                                    {isFemaleActive ?
                                        <input
                                            type="button"
                                            className="gender genderActive"
                                            value="Female"
                                            onClick={() => gender('female')}
                                        /> :
                                        <input
                                            type="button"
                                            className="gender genderInActive"
                                            value="Female"
                                            style={{
                                                color: 'blue',
                                                border: '2px solid blue'
                                            }}
                                        />}
                                </div>
                                <div className="genderSection">
                                    {isOtherActive ?
                                        <Icon name="circle outline" className="genderIcon" /> :
                                        <Icon name="dot circle" color="blue" className="genderIcon" />}
                                    {isOtherActive ?
                                        <input
                                            type="button"
                                            className="gender genderActive"
                                            value="Other"
                                            onClick={() => gender('other')}
                                        /> :
                                        <input
                                            type="button"
                                            className="gender genderInActive"
                                            value="Other"
                                            style={{
                                                color: 'blue',
                                                border: '2px solid blue'
                                            }}
                                        />}
                                </div>
                                <span className="errMsgSpan">{genderValidationErrorMsg}</span>
                            </div>
                        </div>
                        <div className="division">
                            <label>city</label>
                            <Dropdown style={{
                                width: '100%',
                                margin: '8px 0px',
                                color: 'gray'
                            }}
                                placeholder='Select Value'
                                search
                                selection
                                options={friendOptions}
                            />
                        </div>
                        <div className="submitField">
                            {arrowChange ?
                                <Icon name="arrow right" className="arrowIcon" /> :
                                <Icon loading name="spinner" className="arrowIcon" />}
                            <button
                                className="submitButton"
                                onClick={(e) => formSubmit(e)}>
                                Sign up
                            </button>
                        </div>
                        <span className="submitErrMsg errMsgSpan">{formValidationErrorMsg}</span>
                    </form>
                </div>
            </div>
        )
    }
}