import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AskQuestionBox } from '../components/AskQuestionBox';
import { ProfileCard } from '../components/ProfileCard';
import { PopularQuestions } from '../components/PopularQuestionsCard';
import { FallbackLoader } from '../components/SusponseFallbackLoader';
const Feed = lazy(() =>
    import('../components/mainFeed/Feed').then(module => ({ default: module.Feed }))
);
const Popularusers = lazy(() =>
    import('../components/PopularUsersCard').then(module => ({ default: module.PopularUsers }))
);

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


    if(storeUser === null || storeUser.userInfo === null) {
        return (
            <>
                Loading...
            </>
        );
    } else {
        const userInfo = storeUser.userInfo;
        return (
            <>
                <PageWrapper>
                    <RowOneWrapper>
                        <ProfileCard
                            userFullName={'Aravind Manoharan'}
                            username={'@aravindmv97'}
                            askedCount={'100'}
                            answeredCount={'200'} />
                        <Suspense fallback={<FallbackLoader />}>
                            <Popularusers
                                margin={'40px auto'}
                                userId={userInfo.userId}
                                userCity={userInfo.city}
                            />
                        </Suspense>
                    </RowOneWrapper>
                    <RowtwoWrapper>
                        <AskQuestionBox 
                            username={'Aravind Manoharan'} 
                            userInfo={userInfo}
                        />
                        <Suspense fallback={<FallbackLoader />}>
                            <Feed
                                userId={userInfo.userId}
                            />
                        </Suspense>
                    </RowtwoWrapper>
                    <RowThreeWrapper>
                        <PopularQuestions 
                            popularQuestions={popularQuestionsData}
                        />
                    </RowThreeWrapper>
                </PageWrapper>
            </>
        )
    }
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