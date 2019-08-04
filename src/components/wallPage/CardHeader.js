import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #eee;
    height: 50px;
    line-height: 50px;
    vertical-align: middle;
    background: #FFF9F6;
    color: #000;
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
`

export function CardHeader(props) {
    return (
        <HeaderWrapper>
            {props.children}
        </HeaderWrapper>
    );
};

CardHeader.propTypes = {
    children: PropTypes.node
};
