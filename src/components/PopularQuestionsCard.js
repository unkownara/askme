import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CardHeader from './CardHeader';

const PopularQuestionsWrapper = styled.div`
    width: 280px;
    height: 300px;
    border: 1px solid #eee;
    background: #fff;
    border-radius: 5px;
    margin: ${props => props.margin || '0 auto'};
`

const PopularQuestions = (props) => {
    return (
        <PopularQuestionsWrapper margin={props.margin}>
            <CardHeader>POPULAR Questions</CardHeader>

        </PopularQuestionsWrapper>
    );
};

PopularQuestions.propTypes = {};

export default PopularQuestions;
