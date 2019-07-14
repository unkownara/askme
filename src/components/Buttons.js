import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
    margin: ${props => props.margin || '0px'};
    border-radius: 5px;
    font-weight: 500;
    letter-spacing: 0.5px;
    color: #fff;
    vertical-align: middle;
    line-height: 30px;
    height: 30px;
    width: 80px;
    text-align: center;
    background: #EF5A00;
`

const AskButton = (props) => {
    return (
        <ButtonWrapper onClick={props.onClickProps} margin={props.margin}>
            Ask ?
        </ButtonWrapper>
    );
};

AskButton.propTypes = {

};

export default AskButton;
