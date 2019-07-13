import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useInput } from '../hooks/useInput';

export function SignUp() {

    const [signUpStatus, setsignUpStatus] = useState(false);

    const userFirstName = useInput('');
    const userSecondName = useInput('');
    const userName = useInput('');
    const userPassword = useInput('');
    const userEmailId = useInput('');
    const userPhoneNumber = useInput('');
    const userGender = useInput('');
    const userCity = useInput('');

    function signUp(e) {
        Auth.signUp({
            username: userEmailId.value,
            password: userPassword.value,
            attributes: {
                email: userEmailId.value,
                phone_number: '+91' + userPhoneNumber.value,
            }
            })
            .then(data => {
                console.log(data)
                setsignUpStatus(true);
            })
            .catch(err => {
                console.log('Error message' ,err)
            });
    }

    if(signUpStatus) {
        return (
            <>
                <ConfirmSignUp 
                    emailId={userEmailId.value}
                />
            </>
        )
    } else {

        return(
            <div>
                <input
                    {...userFirstName}
                    placeholder="First name"
                />
                <input
                    {...userSecondName}
                    placeholder="Second name"
                />
                <input
                    {...userName}
                    placeholder="User name"
                />
                <input
                    {...userEmailId}
                    placeholder="Email Id"
                />
                <input
                    {...userPassword}
                    type="password"
                    placeholder="password"
                />
                <input
                    {...userPhoneNumber}
                    type="number"
                    placeholder="Phone number"
                />
                <input
                    {...userGender}
                    placeholder="Gender"
                />
                <input
                    {...userCity}
                    placeholder="City"
                />
                <button onClick={signUp}>
                    SIGN UP
                </button>
            </div>
        );
    }
}

export function ConfirmSignUp({ emailId }) {
    const otp = useInput('');

    function verifyOtp(e) {
        Auth.confirmSignUp(emailId, otp.value, {
            forceAliasCreation: true    
        }).then(data => {
            console.log(data)
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
        <>
            <input
                {...otp}
                placeholder="Otp"
            />
            <button onClick={verifyOtp}>
                Verify
            </button>

            <button onClick={reSendOtp}> Resend otp </button>
        </>
    );
}