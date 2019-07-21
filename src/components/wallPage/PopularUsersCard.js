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
    const [popularUsersStatus, setPopularUsersStatus] = useState({});

    async function updatePopularUsersStatus(popularUsersStatus) {
        let popularUsersObj = {};
        await popularUsersStatus.map((data, index) => {
            popularUsersObj[data.fUserId] = data.requestStatus;
        });
        console.log('popular status ', popularUsersStatus);
        setPopularUsersStatus(popularUsersObj);
    }

    function updatePopularUsers(popularUsers) {
        setPopularUsers(users => users.concat(popularUsers));
    }

    useEffect(() => {
        const params = {
            userId: userId,
            specialist: specialist
        };
        getApiRequestCall(popular_users_url, params, function (response) {
            console.log('response for popular users ', response);
            if (response.data.relationShips && response.data.relationShips.Responses && response.data.relationShips.Responses.follower_connections) {
                updatePopularUsersStatus(response.data.relationShips.Responses.follower_connections);
            }
            if(response.data && response.data.popularUsers && response.data.popularUsers.Items) {
                updatePopularUsers(response.data.popularUsers.Items);
            }
        });
    }, []);


    if (popularUsers.length === 0) {
        return (
            <>
                Loading...
            </>
        )
    } else {
        console.log('popular user status render', popularUsersStatus);
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
                                    connectionStatus={popularUsersStatus['2cd0460c-3ff5-4d85-93b7-e74842e1d4e6']}    
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
