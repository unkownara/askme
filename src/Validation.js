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

export function phoneValidation(value) {
    var len = value;
    if (/^\d{10}$/.test(len)) {
        return len.length === 10
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
    // if (obj.firstNameValue === '' || obj.firstNameValue === null) {
    //     return 'first'
    // }
    // else if (obj.lastNameValue === '' || obj.lastNameValue === null) {
    //     return 'last'
    // }
    // else if (obj.userNameValue === '' || obj.userNameValue === null) { return 'userName' }
    // else if (obj.passwordValue === '' || obj.passwordValue === null) { return 'passowrd' }
    // else if (obj.confirmValue === '' || obj.confirmValue === null) { return 'confirm' }
    // else if (obj.phoneNo === '' || obj.phoneNo === null) { return 'phoneNo' }
    // else if (obj.gender_value === '' || obj.gender_value === null) { return 'gender_value' }
    // else return true
}
