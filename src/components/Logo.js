import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ImageWrapper } from './CommonStyles';

import LogoIcon from './images/logo.png';

const LogoWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    padding-left: 20px;
`

const LogoIconWrapper = styled(ImageWrapper)``

const AppName = styled.p`
    margin: 0;
    font-weight: bold;
    vertical-align: middle;
    line-height: 60px;
    font-family: 'Quicksand', sans-serif;
    letter-spacing: 0.5px;
`

const Logo = () => {
    return (
        <LogoWrapper>
            <LogoIconWrapper height={'40px'} width={'40px'} src={LogoIcon} alt={'Logo'} />
            <AppName>Askme</AppName>
        </LogoWrapper>
    );
};

Logo.propTypes = {};

export default Logo;
