const userInfo = null;

export function userReducer(state = userInfo, action) {
    switch(action.type) {
        case 'STORE_USER_INFORMATION':
            return { userInfo : action.payload }
        default:
            return state;
    }
}