import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PopularQuestionsWrapper = styled.div`
    width: 280px;
    height: 300px;
    border: 1px solid #eee;
    border-radius: 5px;
    margin: ${props => props.margin || '0 auto'};
`

const PopularQuestions = (props) => {
    return (
        <PopularQuestionsWrapper margin={props.margin}>

        </PopularQuestionsWrapper>
    );
};

PopularQuestions.propTypes = {};

export default PopularQuestions;
