import axios from 'axios';
import cookie from 'react-cookies';
import { user_info } from './ApiUrls';

export const getUserInformation = function(userId, callback) {
    axios.get(user_info, {
        params: {
            userId: userId
        },
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "Authorization": cookie.load("_ref_i_token_")
        }
    }).then(res => {
        callback(res.data.Items[0]);
        console.log('response ', res);
    }).catch(err => {
        console.log('error ', err);
        callback(err);
    });
}

export const storeUserInformation = function(userInfo, callback) {
    axios({
        method: 'POST',
        url: user_info,
        data: JSON.stringify({
            userInfo: userInfo
        }),
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        }
    }).then(res => {
        callback(res);
        console.log('response ', res);
    }).catch(err => {
        callback(err);
        console.log('error ', err);
    });
}