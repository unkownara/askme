import React, { useState, useEffect } from 'react';
import { useInput } from './hooks/useInput';
import { OTPValidation } from '../Validation';
export function OTP() {

    const [isOTPActive, setIsOTPActive] = useState(true);
    const OTP = useInput('');

    useEffect(() => {
        if (OTPValidation(OTP.value))
            setIsOTPActive(true);
        else
            setIsOTPActive(false);
    }, [OTP.value])

    return (
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
    )
}