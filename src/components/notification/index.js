import React, { lazy, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getApiRequestCall } from '../../ApiRequests';
import { user_notifications_url, follower_request_url } from '../../ApiUrls';
import { Loader } from '../Loader';
const EmptyView = lazy(() =>
    import('../../components/EmptyView').then(module => ({ default: module.EmptyView }))
);

export function Notification() {

    const [notifications, setNotifications] = useState([]);
    const [userInfo, setUserInfo] = useState(null);
    const [notificationDate, setNotificationDate] = useState(Date.now());

    // const storeUserInfo = useSelector(state => state.userReducer);
    
    useEffect(() => {
        // console.log('store user info ', storeUserInfo);
        const userInfo = JSON.parse(localStorage.getItem('_user_info_'));
        setUserInfo(userInfo);
    }, []);

    useEffect(() => {
        console.log('user info ', userInfo);
        if(userInfo !== null) {
            const params = {
                userId: userInfo.userId,
                date: notificationDate
            };
            getApiRequestCall(user_notifications_url, params, function(response) {
                console.log('notification response ', response);
                if(response.data && response.data.Items) {
                    setNotifications(response.data.Items);
                }
            })
        }
    }, [userInfo]);

    if(userInfo === null) {
        return (
            <Loader />
        )
    } else {
        return (
            <>
                {
                    notifications.map((data, index) => {
                        console.log('type ', data);
                        switch(data.type) {
                            case 'follow-request':
                                return <FollowRequest key={index}
                                    {...data}
                                    userInfo={userInfo}
                                />
                            case '':
                                return <>
                                </>
                                break;
                            default:
                                return <>
                                </>
                        }
                    })
                }
            </>
        );
    }
}

export function FollowRequest({ requesterUserId, requesterUserName, requesterProfilePicture, requestStatus, notifiedDate, userInfo }) {

    function followRequestHandler(requestResponse) {
        import('../../ApiRequests').then(obj => {
            const payload = {
                userId: userInfo.userId,
                userProfilePicture: userInfo.profilePicture,
                userName: userInfo.userName,
                fUserId: requesterUserId,
                fProfilePicture: requesterProfilePicture || 'https://s3',
                fUserName: requesterUserName,
                requestStatus: requestResponse,
                notifiedDate: notifiedDate
            };
            obj.postApiRequestCall(follower_request_url, payload, function(response) {
                console.log('follow request response ', response);
            })
        })
    }

    if(requestStatus === 'pending') {
        return (
            <>
                <span> {requesterUserName} has send you a following request </span>
                <button onClick={() => followRequestHandler('accept')}> Accept </button>
                <button onClick={() => followRequestHandler('decline')}> Decline </button>
            </>
        )
    } else {
        return <EmptyView />
    }
}