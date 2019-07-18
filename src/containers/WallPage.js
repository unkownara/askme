import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AskQuestionBox from '../components/AskQuestionBox';
import ProfileCard from '../components/ProfileCard';
import PopularUsersCard from '../components/PopularUsersCard';
import PopularQuestionsCard from '../components/PopularQuestionsCard';

import Avatar from '../components/images/dp.png';

const PageWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 2fr 1.5fr;
`

const RowOneWrapper = styled.div`
    padding: 10px;
`

const RowtwoWrapper = styled.div`
    padding: 10px;
`

const RowThreeWrapper = styled.div`
    padding: 10px;
`


class WallPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        const popularUsersData = [
            {
                askedCount: '100',
                answeredCount: '1200',
                userFullName: '@aravindmv97'
            }
        ]

        const popularQuestionsData = [
            {
                question: 'How to complete this app in 2 days?',
                username: '@aravindmv97',
                likes: '100',
                comments: '25',
                answers: '200'
            },
        ]

        return (
            <PageWrapper>
                <RowOneWrapper>
                    <ProfileCard
                        userFullName={'Aravind Manoharan'}
                        username={'@aravindmv97'}
                        askedCount={'100'}
                        answeredCount={'200'} />
                    <PopularUsersCard
                        margin={'40px auto'}
                        popularUsers={popularUsersData} />
                </RowOneWrapper>
                <RowtwoWrapper>
                    <AskQuestionBox username={'Aravind Manoharan'} />
                </RowtwoWrapper>
                <RowThreeWrapper>
                    <PopularQuestionsCard popularQuestions={popularQuestionsData} />
                </RowThreeWrapper>
            </PageWrapper>
        );
    }
}

WallPage.propTypes = {};

export default WallPage;
