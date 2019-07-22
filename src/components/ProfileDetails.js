import React, { Fragment, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ImageWrapper } from './CommonStyles';
import { follower_request_url } from '../ApiUrls';

export function ProfileDetails(props) {

    const [userInfo, setUserInfo] = useState(null);
    const [requestStatus, setRequestStatus] = useState('Follow');
    const storeUser = useSelector(state => state.userReducer);
    useEffect(() => {
        console.log('store user information in profile details page ', storeUser, userInfo);
        setUserInfo(storeUser.userInfo);
    }, []);

    function followRequest(e) {
        e.preventDefault();
        setRequestStatus('pending');
        import('../ApiRequests').then(obj => {
            const payload = {
                userId: userInfo.userId,
                fUserId: props.fUserId,
                fProfilePicture: props.profilePicture || 'https://s3',
                fUserName: props.userName,
                status: 'pending'
            };
            obj.postApiRequestCall(follower_request_url, payload, function(response) {
                console.log('follow request response ', response);
            })
        })
    }

    return (
        <ProfileDetailsWrapper margin={props.margin}>
            <AvatarWrapper
                src={props.src}
                alt={'Avatar'}
                radius={props.radius || '50px'}
                height={'45px'}
                width={'45px'} />
            <DetailsWrapper>
                <UserFullName>{props.userName}</UserFullName>
                <span 
                    style={{ cursor: 'pointer', color: 'blue' }}
                    onClick={followRequest}>
                    {requestStatus}
                </span>
                <OtherDetailsWrapper>
                    {
                        props.showUserName ?
                            <UserName margin={'0 10px 0 0'}>{props.username}</UserName> : null
                    }
                    {
                        props.showActivityDetails ?
                            <ActivityDetails
                                askedCount={props.askedCount}
                                answeredCount={props.answeredCount} />
                            : null
                    }
                    {
                        props.showUploadedTime && !props.showActivityDetails ?
                            <Fragment>
                                <Dot>
                                    <span>&bull;</span>
                                </Dot>
                                <UploadedDateTime margin={'0 0 0 10px'}>{(props.date)} at {props.time}</UploadedDateTime>
                            </Fragment> : null
                    }
                </OtherDetailsWrapper>
            </DetailsWrapper>
        </ProfileDetailsWrapper>
    );
}

export function ActivityDetails(props) {
    console.log('3 ', props)

    return (
        <ActivityDetailsWrapper margin={props.margin}>
            <TitleWrapper>
                Asked <span>{props.askedCount}</span>
            </TitleWrapper>
            <TitleWrapper>
                Answerd <span>{props.answeredCount}</span>
            </TitleWrapper>
        </ActivityDetailsWrapper>
    );
}


ProfileDetails.propTypes = {
    userFullName: PropTypes.string,
    username: PropTypes.string,
    margin: PropTypes.string,
    radius: PropTypes.string,
    askedCount: PropTypes.number,
    answeredCount: PropTypes.number,
    showUserName: PropTypes.bool,
    showActivityDetails: PropTypes.bool,
    showUploadedTime: PropTypes.bool,
    date: PropTypes.string,
    time: PropTypes.string,
    src: PropTypes.string
};


// Activity details => user's asked questions count and answered questions count

const ActivityDetailsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: ${props => props.margin || '0px'};
`

const TitleWrapper = styled.div`
    color: gray;
    opacity: 0.9;
    letter-spacing: 0.5px;
    font-weight: 400;
    padding: 0 10px 0 0;
    font-size: 12px;

    & > span {
        font-size: 14px;
        font-weight: 500;
        color: #000;
    }
`

const ProfileDetailsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-gap: 0 5px;
    width: auto;
`

const AvatarWrapper = styled(ImageWrapper)``

const DetailsWrapper = styled.div``

const OtherDetailsWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const UserFullName = styled.p`
    margin: 0;
    font-weight: bold;
    font-size: 14px;
    color: #000;
    letter-spacing: 0.5px;
    padding: 3px 0 4px 0;
`

const Dot = styled.div`
    color: gray;
    vertical-align: text-top;
    line-height: 15px;
`

// Uploaded date and time for posts

export const UploadedDateTime = styled.div`
    margin: ${props => props.margin || '0px'};
    font-size: ${props => props.size || '12px'};
    color: gray;
    opacity: 0.8;
    font-weight: 400;
    letter-spacing: 0.4px;
`

// User name component

export const UserName = styled.div`
    color: gray;
    font-weight: 400;
    font-size: ${props => props.size || '13px'};
    letter-spacing: 0.3px;
    opacity: 0.8;
    margin: ${props => props.margin || '0px'};
`

ActivityDetails.propTypes = {
    margin: PropTypes.string,
    askedCount: PropTypes.number,
    answeredCount: PropTypes.number
}

/*
    To use the above components

    <ProfileDetails
        showUserName={false}
        showActivityDetails={false}
        showUploadedTime={false}
        radius={}
        date={}
        time={}
        userFullName={'Aravind Manoharan'}
        src={Avatar} />

    <UserName size={'12px'}>Aravind</UserName>

    <UploadedDateTime size={'12px}></UploadedDateTime>

    <ActivityDetails
        askedCount={100}
        answeredCount={100} />

*/