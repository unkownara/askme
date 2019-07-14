export function emailValidation(value) {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value));
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

export function confirmPasswordValidation(pass, cnfrm) {
    return pass === cnfrm
}

export function formValidation(obj) {
    if (obj.firstNameValue === '' || obj.firstNameValue === null) {
        return 'first'
    }
    else if (obj.lastNameValue === '' || obj.lastNameValue === null) {
        return 'last'
    }
    else if (obj.userNameValue === '' || obj.userNameValue === null) { return 'userName' }
    else if (obj.passwordValue === '' || obj.passwordValue === null) { return 'passowrd' }
    else if (obj.confirmValue === '' || obj.confirmValue === null) { return 'confirm' }
    else if (obj.phoneNo === '' || obj.phoneNo === null) { return 'phoneNo' }
    else if (obj.gender_value === '' || obj.gender_value === null) { return 'gender_value' }
    else return true
}
