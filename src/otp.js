import React from 'react';
import { OTPValidation } from './Validation';
export function OTPpage() {

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