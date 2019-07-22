import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CardHeader } from './CardHeader';
import { ProfileDetails } from '../ProfileDetails';

import { getApiRequestCall } from '../../ApiRequests';
import { user_sugession_url } from '../../ApiUrls';

import Avatar from '../../images/dp.png';

export function PopularUsers({ margin, userId, userCity }) {

    const [popularUsers, setPopularUsers] = useState([]);

    function updatePopularUsers(popularUsers) {
        setPopularUsers(users => users.concat(popularUsers));
    }

    useEffect(() => {
        const params = {
            userId: userId,
            city: userCity
        };
        getApiRequestCall(user_sugession_url, params, function (response) {
            if (response.data && response.data.Items) {
                console.log('popular user list ', response.data.Items);
                updatePopularUsers(response.data.Items);
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
        return (
            <PopularUsersWrapper margin={margin}>
                <CardHeader>POPULAR USERS</CardHeader>
                <UsersWrapper>
                    {
                        popularUsers.map((user, user_index) =>
                            <ProfileWrapper key={user_index}>
                                <ProfileDetails
                                    radius={'50%'}
                                    showUserName={false}
                                    fUserId={user.userId}
                                    askedCount={user.qAsked}
                                    answeredCount={user.qAnswered}
                                    showActivityDetails
                                    showUploadedTime={false}
                                    userName={user.userName}
                                    src={Avatar} />
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
