export function emailValidation(value) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(value) === false) {
        return false;
    }
    return true;
}

export function passwordValidation(value) {
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    return re.test(value);
}

export function confirmPasswordValidation(password, confirmPassword) {
    return password !== confirmPassword;
}

export function phoneValidation(value) {
    if (/^\d{10}$/.test(value)) {
        return value.length === 10
    } else {
        return false;
    }
}

export function inputValidation(name, value) {
    switch(name) {
        case 'name':
            return value !== '';
        case 'email':
            return emailValidation(value);
        case 'phone':
            return phoneValidation(value);
        case 'password':
            return passwordValidation(value);
        default:
            return true;
    }
}

export function formValidation(obj) {
    if(obj.firstName === '') {
        return 'firstName';
    } else if(obj.lastName === '') {
        return 'lastName';
    } else if(obj.userName === '') {
        return 'userName';
    } else if(!(emailValidation(obj.email))) {
        console.log('email validation ', obj.email);
        return 'email';
    } else if(!(passwordValidation(obj.password))) {
        return 'password';
    } else if(obj.phoneNumber === '') {
        return 'phoneNumber';
    } else if(obj.gender === '') {
        return 'gender';
    } else if(obj.city === '') {
        return 'city';
    } else {
        return 'none';
    }
}

export function OTPValidation(value) {
    return value.length === 6 && value !== ''
}
