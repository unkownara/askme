import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getApiRequestCall } from '../../ApiRequests';
import { user_notifications_url } from '../../ApiUrls';
import { Loader } from '../Loader';

export function Notification() {

    const [notifications, setNotifications] = useState([]);
    const [userInfo, setUserInfo] = useState(null);
    const [notificationDate, setNotificationDate] = useState(Date.now());

    const storeUserInfo = useSelector(store => store.userReducer);
    
    useEffect(() => {
        setUserInfo(storeUserInfo.userInfo);
    }, []);

    useEffect(() => {
        if(userInfo !== null) {
            const params = {
                userId: userInfo.userId,
                date: notificationDate
            };
            getApiRequestCall(user_notifications_url, params, function(response) {
                console.log('notification response ', response);
                setNotifications(response.data.Items);
            })
        }
    }, [notificationDate]);

    if(userInfo === null) {
        return (
            <Loader />
        )
    } else {
        return (
            <>

            </>
        );
    }
}