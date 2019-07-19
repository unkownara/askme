import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import  AskQuestionBox from '../components/AskQuestionBox';
import { ProfileCard } from '../components/ProfileCard';
import { PopularUsers } from '../components/PopularUsersCard';
import { PopularQuestions } from '../components/PopularQuestionsCard';


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

    const reduxStore = useSelector(state => state.userReducer);
    
    useEffect(() => {
        console.log('redux store ', reduxStore);
    });

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
                    <AskQuestionBox username={'Aravind Manoharan'} />
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
    grid-template-columns: 1.5fr 2fr 1.5fr;
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