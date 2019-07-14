import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PopularUsersWrapper = styled.div`
    width: 280px;
    height: 300px;
    border: 1px solid #eee;
    border-radius: 5px;
    margin: ${props => props.margin || '0 auto'};
`

const PopularUsers = (props) => {
    return (
        <PopularUsersWrapper margin={props.margin}>

        </PopularUsersWrapper>
    );
};

PopularUsers.propTypes = {};

export default PopularUsers;
