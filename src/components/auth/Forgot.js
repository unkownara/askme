import React, { useState, useEffect } from 'react';
import { Icon } from 'semantic-ui-react';
import { useInput } from '../hooks/useInput';
import { passwordValidation, confirmPasswordValidation, OTPValidation } from '../../Validation';
import './Forgot.css';
import 'semantic-ui-css/semantic.min.css';

export function Forgot() {

    const [isOtpVerify, setIsOtpVerify] = useState(false);
    const [isNewPass, setIsNewPass] = useState(true);
    const [iscnfrmPass, setIsCnfrmPass] = useState(true);
    const [isOTPActive, setIsOTPActive] = useState(true);
    const [arrowChange, setArrowChange] = useState(true);
    const [inputType, setInputType] = useState(false);
    const [eyeIconFocus, setEyeIconFocus] = useState(false);
    const newPass = useInput('');
    const cnfrmPass = useInput('');
    const OTP = useInput('');

    let textInput = React.createRef();

    function eyeIcon() {
        console.log('hello')
        textInput.current.focus();
        setInputType(!inputType);
    }

    useEffect(() => {
        if (passwordValidation(newPass.value)) {
            setIsNewPass(true);
        }
        else {
            setIsNewPass(false)
        }
    }, [newPass.value])

    useEffect(() => {
        if (confirmPasswordValidation(newPass.value, cnfrmPass.value)) {
            setIsCnfrmPass(true);
        }
        else {
            setIsCnfrmPass(false)
        }
    },[newPass.value])

    useEffect(() => {
        if (newPass.value !== '' && cnfrmPass.value !== '') {
            if (newPass.value === cnfrmPass.value) {
                setIsOtpVerify(true)
            }
            else {
                setIsOtpVerify(false)
                console.log('otp vali ', isOtpVerify)
            }
        }
        else {
            console.log(newPass.value, cnfrmPass.value)
            setIsOtpVerify(false)
        }
    })

    useEffect(() => {
        if (OTPValidation(OTP.value)) {
            setIsOTPActive(true);
            console.log('otp ' + isOTPActive)
        }
        else {
            setIsOTPActive(false);
            console.log('otp ' + isOTPActive)
        }
    }, [OTP.value])

    return (
        <div className="forgotContainer">
            <div className="textField">
                <p>Forgot Password</p>
            </div>
            <div className="forgotSection">
                <form className="forgotForm">
                    <p className="forgotHeaderPara">Forgot Password </p>
                    <div className="newPassDiv">
                        { eyeIconFocus && (inputType ?
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
                        <input
                            className="inputBox"
                            type={inputType ? 'text' : 'password'}
                            placeholder="new Password"
                            ref={textInput}
                            onFocus={() => setEyeIconFocus(true)}
                            {...newPass}
                        />
                    </div>
                    <div className="confirmPasswordInput">
                        <input
                            className="inputBox"
                            type={"password"}
                            placeholder="confirm Password"
                            {...cnfrmPass}
                        />
                    </div>
                    {isOtpVerify &&
                        <div>
                            <p className="otpPara">OTP verification</p>
                            <input
                                type="text"
                                placeholder="Enter Value"
                                className="otpInput"
                                maxLength="6"
                                {...OTP}
                            />
                        </div>
                    }
                    <div className="submitField">
                        {arrowChange ?
                            <Icon name="arrow right" className="arrowIcon" /> :
                            <Icon loading name="spinner" className="arrowIcon" />}
                        <input
                            className="submitButton"
                            type={"button"}
                            value={"Log in"}
                            onClick={() => setArrowChange(false)}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}
