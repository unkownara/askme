import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ProfileDetails from './ProfileDetails';

import Avatar from './images/dp.png';

const ProfileCardWrapper = styled.div`
    width: 280px;
    min-height: 200px;
    max-height: 300px;
    border: 1px solid #eee;
    border-radius: 5px;
    margin: ${props => props.margin || '0 auto'};
`

const ProfileWrapper = styled.div`
    margin: 20px 10px;
    padding-bottom: 20px;
    border-radius: 10px;
    background: #eee;
    border-bottom: 1px solid #eee;
    padding: 10px;
`

const ActivityDetailsWrapper = styled.div`
    margin-top: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const ActivityWrapper = styled.div`
    margin: 0 20px;
`

const Activity = styled.div`
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 12px;
    color: gray;

    &>span{
        color: #000;
        font-size: 13px;
        display: block;
        padding-top: 10px;
    }
`

const ProfileCard = (props) => {
    return (
        <ProfileCardWrapper margin={props.margin}>
            <ProfileWrapper>
                <ProfileDetails
                    radius={'10px'}
                    showUserName
                    showActivityDetails={false}
                    showUploadedTime={false}
                    userFullName={props.userFullName}
                    src={Avatar} />
            </ProfileWrapper>
            <ActivityDetailsWrapper>
                <ActivityWrapper>
                    <Activity>ASKED <span>{props.askedCount}</span></Activity>
                </ActivityWrapper>
                <ActivityWrapper>
                    <Activity>ANSWERED <span>{props.answeredCount}</span></Activity>
                </ActivityWrapper>
            </ActivityDetailsWrapper>
        </ProfileCardWrapper>
    );
};

ProfileCard.propTypes = {
    margin: PropTypes.string,
    userFullName: PropTypes.string,
    askedCount: PropTypes.number,
    answeredCount: PropTypes.number
};

export default ProfileCard;
