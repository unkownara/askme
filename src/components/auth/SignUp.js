import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useInput } from '../hooks/useInput';
import { ConfirmSignUp } from './ConfirmSignUp';

export function SignUp() {

    const [signUpStatus, setsignUpStatus] = useState(false);
    const [userId, setUserId] = useState('');
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
                console.log(data);
                const userId = data.userSub;
                setUserId(userId);
                setsignUpStatus(true);
            })
            .catch(err => {
                console.log('Error message' ,err)
            });
    }

    if(signUpStatus) {
        const userInfo = {
            userId: userId,
            firstName: userFirstName.value,
            secondName: userSecondName.value,
            userName: userName.value,
            emailId: userEmailId.value,
            phoneNumber: userPhoneNumber.value,
            gender: userGender.value,
            city: userCity.value
        };
        
        return (
            <>
                <ConfirmSignUp 
                    emailId={userEmailId.value}
                    userInfo={userInfo}
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