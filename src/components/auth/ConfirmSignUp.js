import React from 'react';
import { useInput } from '../hooks/useInput';
import { Auth } from 'aws-amplify';
import { postApiRequestCall } from '../../ApiRequests';
import { user_info_url } from '../../ApiUrls';

export function ConfirmSignUp({ emailId, userInfo }) {
    const otp = useInput('');

    function verifyOtp(e) {
        Auth.confirmSignUp(emailId, otp.value, {
            forceAliasCreation: true    
        }).then(data => {
            console.log(data);
            postApiRequestCall(user_info_url, userInfo, function(response) {
                console.log('response in confirm sign up page', response);
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