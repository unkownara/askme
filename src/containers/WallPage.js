import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import history from '../history';
import { AskQuestionBox } from '../components/questionBox/AskQuestionBox';
import { ProfileCard } from '../components/wallPage/ProfileCard';
import { PopularUsers } from '../components/wallPage/PopularUsersCard';
import { PopularQuestions } from '../components/wallPage/PopularQuestionsCard';


const popularUsersData = [
    {
        askedCount: '100',
        answeredCount: '1200',
        userFullName: '@aravindmv97'
    }
];

const popularQuestionsData = [
    {
        question: 'How to complete this app in 2 days?',
        username: '@aravindmv97',
        likes: '100',
        comments: '25',
        answers: '200'
    },
];

export function WallPage() {

    const [canRender, setRender] = useState(false);

    const storeUser = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    // Checking if user info is exists or not in local storage.
    // useEffect(() => {
    //     const localStorageUserInfo = JSON.parse(localStorage.getItem('_user_info_'));
    //     if(localStorageUserInfo === null || localStorageUserInfo === undefined) {
    //         history.push('/login');
    //     } else {
    //         setRender(true);
    //         dispatch({
    //             type: 'STORE_USER_INFORMATION',
    //             payload: localStorageUserInfo
    //         })
    //     }
    // }, [canRender]);


    // if(storeUser === null || storeUser.userInfo === null) {
    //     return (
    //         <>
    //             Loading...
    //         </>
    //     );
    // } else {
    //     const userInfo = storeUser.userInfo;
        return (
            <>
                <PageWrapper>
                    <RowOneWrapper>
                        <ProfileCard
                            userFullName={'Aravind Manoharan'}
                            username={'@aravindmv97'}
                            askedCount={'100'}
                            answeredCount={'200'} />
                        <PopularUsers
                            margin={'40px auto'}
                            popularUsers={popularUsersData} />
                    </RowOneWrapper>
                    <RowtwoWrapper>
                        <AskQuestionBox 
                            username={'Aravind Manoharan'} 
                            // userInfo={userInfo}
                        />
                    </RowtwoWrapper>
                    <RowThreeWrapper>
                        <PopularQuestions popularQuestions={popularQuestionsData} />
                    </RowThreeWrapper>
                </PageWrapper>
            </>
        )
    }


const PageWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
`;

const RowOneWrapper = styled.div`
    padding: 10px;
`;

const RowtwoWrapper = styled.div`
    padding: 10px;
`;

const RowThreeWrapper = styled.div`
    padding: 10px;
`;

WallPage.propTypes = {};