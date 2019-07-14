import React, { useState,useEffect } from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';
import { useInput } from '../hooks/useInput';
import { emailValidation, passwordValidation,phoneValidation,confirmPasswordValidation, formValidation } from "../../Validation.js";
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
    const [isFormValid, setIsFormValid] = useState(true);
    const [isFemaleActive, setIsFemaleActive] = useState(true);
    const [isOtherActive, setIsOtherActive] = useState(true);
    const [arrowChange, setArrowChange] = useState(true);
    const [genderValue, setGenderValue] = useState('');
    const [ isEmailValid, setIsEmailValid ] = useState(true);
    const [ isPasswordValid, setIsPasswordValid ] = useState(true);
    const [ isPhoneValid, setIsPhoneValid ] = useState(true);
    const [ isConfirmPasswordValid, setIsConfirmPasswordValid ] = useState(true);
    const firstName = useInput('');
    const lastName = useInput('');
    const userName = useInput('');
    const password = useInput('');
    const email = useInput('');
    const confirmPassword = useInput('');
    const phone_number = useInput('');

    const obj = {
        firstNameValue: firstName.value,
        lastNameValue: lastName.value,
        userNameValue: userName.value,
        passwordValue: password.value,
        confirmValue: confirmPassword.value,
        phoneNo: phone_number.value,
        gender_value: genderValue
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

    useEffect (()=> {

        if( formValidation(obj)){
            setIsFormValid(true)
        } 
        else { 
            setIsFormValid(false) 
        }
        if(emailValidation(email.value)){
            setIsEmailValid(true)
        } 
        else {
            setIsEmailValid(false) 
        }
        if(passwordValidation(password.value)){
            setIsPasswordValid(true)
        }
        else {
            setIsPasswordValid(false)
        }
        if(phoneValidation(phone_number.value)){
            setIsPhoneValid(true)
        }
        else {
            setIsPhoneValid(false) 
        }
        if(confirmPasswordValidation(password.value, confirmPassword.value)){
            setIsConfirmPasswordValid(true)
        }
        else {
            setIsConfirmPasswordValid(false)
        }
    })

    return (
        <div className="signUpCreation">
            <p className="signupHeader">Sign up to Account</p>
            <form>
                <div className="firstAndLastName division">
                    <div>
                        <label>First name</label><br />
                        <input
                            {...firstName}
                            type="text"
                            placeholder="Enter Value"
                            className="input firstName"
                        />
                    </div>
                    <div>
                        <label>Last name</label><br />
                        <input
                            {...lastName}
                            type="text"
                            placeholder="Enter Value"
                            className="input lastName"
                        />
                    </div>
                </div>
                <div className="division">
                    <label>Username</label>
                    <input
                        {...userName}
                        type="text"
                        placeholder="Enter Value"
                        className="input firstName"
                    />
                </div>
                <div className="division">
                    <label>Email</label>
                    <input
                        {...email}
                        type="text"
                        placeholder="Enter Value"
                        className="input email"
                    />
                </div>
                <div className="division">
                    <label>Password</label>
                    <input
                        {...password}
                        type="password"
                        placeholder="Enter Value"
                        className="input"
                    />
                </div>
                <div className="division">
                    <label>Confirm Password</label>
                    <input
                        {...confirmPassword}
                        type="text"
                        placeholder="Enter Value"
                        className="input"
                    />
                </div>
                <div className="division">
                    <label>Phone no</label>
                    <input
                        {...phone_number}
                        type="text"
                        placeholder="Enter Value"
                        className="input"
                        maxLength="10"
                    />
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
                    <input
                        className="submitButton"
                        type={"button"}
                        value={"Sign up"}
                        onClick={e => setArrowChange(false)} 
                    />
                </div> 
            </form>
        </div>
    )
}