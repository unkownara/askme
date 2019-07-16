import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CardHeader from './CardHeader';
import ProfileDetails from './ProfileDetails';

import Avatar from '../images/dp.png';


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

const PopularUsers = (props) => {
    return (
        <PopularUsersWrapper margin={props.margin}>
            <CardHeader>POPULAR USERS</CardHeader>
            <UsersWrapper>
                {
                    props.popularUsers.map((user, user_index) =>
                        <ProfileWrapper key={user_index}>
                            <ProfileDetails
                                radius={'50%'}
                                showUserName={false}
                                askedCount={user.askedCount}
                                answeredCount={user.answeredCount}
                                showActivityDetails
                                showUploadedTime={false}
                                userFullName={user.userFullName}
                                src={Avatar} />
                        </ProfileWrapper>
                    )
                }
            </UsersWrapper>
        </PopularUsersWrapper>
    );
};

PopularUsers.propTypes = {
    margin: PropTypes.string,
    popularUsers: PropTypes.array
};

export default PopularUsers;
