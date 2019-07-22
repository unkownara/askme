import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CardHeader } from './CardHeader';
import { ProfileDetails } from '../ProfileDetails';
import { getApiRequestCall } from '../../ApiRequests';
import { popular_users_url } from '../../ApiUrls';
import Avatar from '../../images/dp.png';


export function PopularUsers({ margin, userId, specialist }) {

    const [popularUsers, setPopularUsers] = useState([]);
    const [popularUsersStatus, setPopularUsersStatus] = useState([]);
    const [status, setStatus] = useState(null);

    async function updatePopularUsersStatus(popularUsersStatus) {
        console.log('popular status ', popularUsersStatus);
        setPopularUsersStatus(popularUsersStatus);
    }

    function updatePopularUsers(popularUsers) {
        setPopularUsers(users => users.concat(popularUsers));
    }

    useEffect(() => {
        console.log('checking');
        const params = {
            userId: userId,
            specialist: specialist
        };
        getApiRequestCall(popular_users_url, params, function (response) {
            console.log('response for popular users ', response);
            try {
                if (response.data.relationShips && response.data.relationShips.Responses && response.data.relationShips.Responses.follower_connections) {
                    updatePopularUsersStatus(response.data.relationShips.Responses.follower_connections);
                }
                if(response.data && response.data.popularUsers && response.data.popularUsers.Items) {
                    updatePopularUsers(response.data.popularUsers.Items);
                }
            } catch(e) {
                console.log('error while parsing data in local state ', e);
            }
        });
    }, []);

    useEffect(() => {
        let mapObj = new Map();
        popularUsersStatus.map((data, index) => {
            mapObj.set(data.fUserId, data.requestStatus);
        });
        setStatus(mapObj);
        console.log('map status useEffect', mapObj);
    }, [popularUsersStatus]);


    if (popularUsers.length === 0) {
        return (
            <>
                Loading...
            </>
        )
    } else {
        console.log('map status ', status);
        return (
            <PopularUsersWrapper margin={margin}>
                <CardHeader>POPULAR USERS</CardHeader>
                <UsersWrapper>
                    {
                        popularUsers.map((user, user_index) =>
                            <ProfileWrapper key={user.userId}>
                                <ProfileDetails
                                    radius={'50%'}
                                    showUserName={false}
                                    fUserId={user.userId}
                                    askedCount={user.qAsked}
                                    answeredCount={user.qAnswered}
                                    showActivityDetails
                                    showUploadedTime={false}
                                    userName={user.userName}
                                    src={Avatar}
                                    status={status.get(user.userId) ? status.get(user.userId) : 'follow'}
                                />
                            </ProfileWrapper>
                        )
                    }
                </UsersWrapper>
            </PopularUsersWrapper>
        );
    }
};

const PopularUsersWrapper = styled.div`
    background: #fff;
    width: 280px;
    height: auto;
    border: 1px solid #eee;
    border-radius: 5px;
    margin: ${props => props.margin || '0 auto'};
`

const UsersWrapper = styled.div`
    overflow: auto;
    min-height: max-content;
    max-height: 600px;
`

const ProfileWrapper = styled.div`
    margin: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
`

PopularUsers.propTypes = {
    margin: PropTypes.string,
    popularUsers: PropTypes.array
};
