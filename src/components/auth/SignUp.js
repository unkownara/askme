import React, { useState,useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { Dropdown, Icon } from 'semantic-ui-react';
import { useInput } from '../hooks/useInput';
import { ConfirmSignUp } from './ConfirmSignUp';
import { formValidation, inputValidation } from "../../Validation.js";
import history from '../../history';
import './Signup.css';
import 'semantic-ui-css/semantic.min.css';

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

    function gender(value) {
        if (value === 'male') {
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
        
        switch(name) {
            case 'firstName':
                if(inputValidation('name', value)) {
                    setFirstNameValidationErrorMsg('');
                } else {
                    setFirstNameValidationErrorMsg('invalid');
                }
                break;
            case 'lastName':
                if(inputValidation('name', value)) {
                    setLastNameValidationErrorMsg('');
                } else {
                    setLastNameValidationErrorMsg('invalid');
                }
                break;
            case 'userName':
                if(inputValidation('name', value)) {
                    setUserNameValidationErrorMsg('');
                } else {
                    setUserNameValidationErrorMsg('invalid');
                }
                break;
            case 'email':
                if(inputValidation('email', value)) {
                    setEmailValidationErrorMsg('');
                } else {
                    setEmailValidationErrorMsg('invalid');
                }
                break;
            case 'password':
                if(inputValidation('password', value)) {
                    setPasswordValidationErrorMsg('');
                } else {
                    setPasswordValidationErrorMsg('invalid');
                }
                break;
            case 'phoneNumber':
                if(inputValidation('phone', value)) {
                    setPhoneNumberValidationErrorMsg('');
                } else {
                    setPhoneNumberValidationErrorMsg('invalid');
                }
                break;
            case 'gender':
                if(inputValidation('name', value)) {
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
        switch(formValidation(userInfo)) {
            case 'firstName':
                setFirstNameValidationErrorMsg('invalid');
                setFormValidationErrorMsg('Fill all the fields');
                break;
            case 'lastName':
                setLastNameValidationErrorMsg('invalid');
                setFormValidationErrorMsg('Fill all the fields');
                break;
            case 'userName':
                setUserNameValidationErrorMsg('invalid');
                setFormValidationErrorMsg('Fill all the fields');
                break;
            case 'email':
                setEmailValidationErrorMsg('invalid');
                setFormValidationErrorMsg('Fill all the fields');
                break;
            case 'password':
                setPasswordValidationErrorMsg('invalid');
                setFormValidationErrorMsg('Fill all the fields');
                break;
            case 'gender':
                setGenderValidationErrorMsg('invalid');
                setFormValidationErrorMsg('Fill all the fields');
                break;
            case 'none':
                setFormValidationErrorMsg('');
                setIsFormValid(true);
                break;
        }
    }

    useEffect(() => {
        if(isFormValid) {
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
    }, [isFormValid, isSignUpCompleted]);

    /* Triggering component based on signup form validation */
    if(isSignUpCompleted) {
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
            <>
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
                                    type="text"
                                    placeholder="Enter Value"
                                    className="input firstName"
                                />
                                {firstNameValidationErrorMsg}
                            </div>
                            <div>
                                <label>Last name</label><br />
                                <input
                                    {...lastName}
                                    onBlur={() => onBlurChange('lastName', lastName.value)}
                                    type="text"
                                    placeholder="Enter Value"
                                    className="input lastName"
                                />
                                {lastNameValidationErrorMsg}
                            </div>
                        </div>
                        <div className="division">
                            <label>Username</label>
                            <input
                                {...userName}
                                onBlur={() => onBlurChange('userName', userName.value)}
                                type="text"
                                placeholder="Enter Value"
                                className="input firstName"
                            />
                            {userNameValidationErrorMsg}
                        </div>
                        <div className="division">
                            <label>Email</label>
                            <input
                                {...email}
                                onBlur={() => onBlurChange('email', email.value)}
                                type="text"
                                placeholder="Enter Value"
                                className="input email"
                            />
                            {emailValidationErrorMsg}
                        </div>
                        <div className="division">
                            <label>Password</label>
                            <input
                                {...password}
                                onBlur={() => onBlurChange('password', password.value)}
                                type="text"
                                placeholder="Enter Value"
                                className="input"
                            />
                            {passwordValidationErrorMsg}
                        </div>
                        <div className="division">
                            <label>Phone no</label>
                            <input
                                {...phoneNumber}
                                onBlur={() => onBlurChange('phoneNumber', phoneNumber.value)}
                                type="text"
                                placeholder="Enter Value"
                                className="input"
                                maxLength="10"
                            />
                            {phoneNumberValidationErrorMsg}
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
                                            type="button"
                                            className="gender genderActive"
                                            value="Male"
                                            onClick={() => gender('male')}
                                            style={{
                                                border: '1px solid lightgray'
                                            }}
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
                                            style={{
                                                border: '1px solid lightgray'
                                            }}
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
                                            style={{
                                                border: '1px solid lightgray'
                                            }}
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
                                {genderValidationErrorMsg}
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
                                onMouseOver={e => setArrowChange(false)}
                                onClick={(e) => formSubmit(e)}>
                                Sign up
                            </button>
                        </div>
                        {formValidationErrorMsg}
                    </form>
                    <p className="bottomPara">Already have an account?
                        <span onClick={() => history.push('/') }>
                            Log in
                        </span>
                    </p>
                </div>
            </>
        );
    }
}