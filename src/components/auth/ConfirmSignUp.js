import React, {useState} from 'react';
import { useInput } from '../hooks/useInput';
import history from '../../history';
import styled from 'styled-components';
import { Auth } from 'aws-amplify';
import { postApiRequestCall } from '../../ApiRequests';
import { user_info_url } from '../../ApiUrls';
import { Icon } from 'semantic-ui-react'

export function ConfirmSignUp({ emailId, userInfo }) {
    const otp = useInput('');
    const [arrowChange, setArrowChange] = useState(true);

    function verifyOtp(e) {
        e.preventDefault();
        setArrowChange(false)
        Auth.confirmSignUp("aravindmv97@gmail.com", otp.value, {
            forceAliasCreation: true
        }).then(data => {
            console.log(data);
            postApiRequestCall(user_info_url, userInfo, function (response) {
                console.log('response in confirm sign up page', response);
                history.push('/login');
            });
        })
            .catch(err => console.log(err));
    }

    function reSendOtp(e) {
        Auth.resendSignUp(emailId).then(() => {
            console.log('code resent successfully');
        }).catch(e => {
            console.log(e);
        });
    }

    return (
        <ConfirmSignUpOtp>
            <TextField>
                <ParagraphText>OTP Verfication</ParagraphText>
            </TextField>
            <OTPContainer>
                <OTPForm>
                    <OTPInput
                        {...otp}
                        placeholder="Otp"
                        maxLength="6"
                    />
                    <SubmitButtonDiv>
                    {arrowChange ?
                                <Icon name="arrow right" className="arrowIcon" /> :
                                <Icon loading name="spinner" className="arrowIcon" />}
                        <SubmitButton onClick={verifyOtp}>
                            Verify
                    </SubmitButton>
                        <ResendOtpSpan onClick={reSendOtp}>Resend OTP?</ResendOtpSpan>
                    </SubmitButtonDiv>

                </OTPForm>
            </OTPContainer>
        </ConfirmSignUpOtp>
    );
}

const ConfirmSignUpOtp = styled.div`
width: 100%;
height: 100vh;
position: relative;
display: grid;
grid-template-columns: 45% 55%;
`

const TextField = styled.div`
background: #132c83;
position: relative;
`

const ParagraphText = styled.p`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
color: white;
font-size: 24px;
`
const OTPContainer = styled.div`
position: relative;
`

const OTPForm = styled.form`
width: 400px;
height: 400px;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`
const OTPInput = styled.input`
position: relative;
padding: 15px;
width: 100%;
background: #dedede75;
border: none;
outline: none;
border-radius: 3px;
color: black;
font-size: 15px;
text-align: center;

&:focus::placeholder {
    color: transparent
}
`

const SubmitButtonDiv = styled.div`
position: relative;
margin-top: 35px;
`

const SubmitButton = styled.button`
width: 100%;
padding: 15px 15px 15px 30px;
border: 0;
outline: 0;
background: darkblue;
color: white;
font-size: 15px;
font-weight: bold;
border-radius: 4px;
text-align: left;
cursor: pointer;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const ResendOtpSpan = styled.span`
position: relative;
top: 24px;
left: 307px;
font-size: 16px;
color: #132c83;
cursor: pointer;
<<<<<<< HEAD
`

const MessageSent = styled.span`
position: relative;
z-index: 999;
cursor: pointer;
color: #132c83;
left: -18px;
`

export function ConfirmSignUp({ emailId, userInfo }) {

    const [resendOTPText, setResendOTPText ] = useState(false)
    const otp = useInput('');
    const [arrowChange, setArrowChange] = useState(true);
    function verifyOtp(e) {
        setArrowChange(false)
        Auth.confirmSignUp(emailId, otp.value, {
            forceAliasCreation: true
        }).then(data => {
            console.log(data);
            postApiRequestCall(user_info_url, userInfo, function (response) {
                console.log('response in confirm sign up page', response);
            });
        })
            .catch(err => console.log(err));
    }

    function reSendOtp(e) {
        Auth.resendSignUp(emailId).then(() => {
            setResendOTPText(true)
            console.log('code resent successfully');
        }).catch(e => {
            console.log(e);
        });
    }

    return (
        <ConfirmSignUpOtp>
            <TextField>
                <ParagraphText>OTP Verfication</ParagraphText>
            </TextField>
            <OTPContainer>
                <OTPForm>
                    <OTPInput
                        {...otp}
                        placeholder="Otp"
                        maxLength="6"
                    />
                    <SubmitButtonDiv>
                    {arrowChange ?
                                <Icon name="arrow right" className="arrowIcon" /> :
                                <Icon loading name="spinner" className="arrowIcon" />}
                        <SubmitButton onClick={verifyOtp}>
                            Verify
                    </SubmitButton>
                        <ResendOtpSpan onClick={reSendOtp}>{resendOTPText ? <MessageSent>Message Sent...</MessageSent>:'Resend OTP?' }</ResendOtpSpan>
                    </SubmitButtonDiv>  
                </OTPForm>
            </OTPContainer>
        </ConfirmSignUpOtp>
    );
}
=======
`
>>>>>>> 55edd7c19353ad0562bd82425fa4fa85578767c3
