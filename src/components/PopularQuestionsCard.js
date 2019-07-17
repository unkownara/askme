import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { UserName } from './ProfileDetails';
import { CardHeader } from './CardHeader';

export function PopularQuestions(props) {
    return (
        <PopularQuestionsWrapper margin={props.margin}>
            <CardHeader>POPULAR Questions</CardHeader>
            <QuestionsListWrapper>
                {
                    props.popularQuestions.map((question, question_index) =>
                        <QuestionWrapper>
                            {/* <TrendIconWrapper><div>?</div></TrendIconWrapper> */}
                            <AskedQuestion>{question.question}</AskedQuestion>
                            <UserName>{question.username}</UserName>
                        </QuestionWrapper>
                    )
                }
            </QuestionsListWrapper>
        </PopularQuestionsWrapper>
    );
};

const PopularQuestionsWrapper = styled.div`
    background: #fff;
    width: 280px;
    height: auto;
    border: 1px solid #eee;
    border-radius: 5px;
    margin: ${props => props.margin || '0 auto'};
`

const QuestionsListWrapper = styled.div`
    overflow: auto;
    min-height: max-content;
    max-height: 600px;
`

const QuestionWrapper = styled.div`
    margin: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
    /* display: grid; */
    /* grid-template-columns: 0.2fr 4.8fr; */
`

const AskedQuestion = styled.div`
    font-weight: 500;
    color: #000;
    letter-spacing: 0.5px;
    line-height: 20px;
    font-size: 14px;
`

// const TrendIconWrapper = styled.div`
//     color: #EF5A00;
//     font-size: 14px;
//     text-align: center;

//     &>div{
//         background: #FFC5A9;
//         height: 25px;
//         width: 25px;
//     }
// `

PopularQuestions.propTypes = {
    popularQestions: PropTypes.array
};
