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
        return (
            <PageWrapper>
                <RowOneWrapper>
                    <ProfileCard />
                    <PopularUsersCard margin={'40px auto'} />
                </RowOneWrapper>
                <RowtwoWrapper>
                    <AskQuestionBox />
                </RowtwoWrapper>
                <RowThreeWrapper>
                    <PopularQuestionsCard />
                </RowThreeWrapper>
            </PageWrapper>
        );
    }
}

WallPage.propTypes = {};

export default WallPage;
