import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ImageWrapper } from './CommonStyles';

import Close from '../images/close.png';


const PopoverWrapper = styled.div`
    position: relative;
    display: inline-block;
`

const PopoverContent = styled.div`
    opacity: ${props => props.show ? 1 : 0};
    display:  ${props => props.show ? 'block' : 'none'};
    position: absolute;
    z-index: ${props => props.show ? 10 : -1};
    left: -150px;
     background-color: #fff;
    border-radius: 5px;
    margin-top: 40px;
    padding: 10px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    transform: translate(0, -20px);
    transition: all 0.3s ease-in-out;
`

const PopoverMessage = styled.div`
    width: ${props => props.width || '100px'};
    height: auto;
    padding-top: 10px;
    text-align: center;
`

const HeaderWrapper = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 0.5fr;
`

const Title = styled.div`
    color: gray;
    font-weight: bold;
    text-align: left;
`

const CloseIconWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const CloseIcon = styled(ImageWrapper)`
    cursor: pointer;
`

function Popover(props) {

    return (
        <PopoverWrapper>
            {props.popoverTrigger}
            <PopoverContent show={props.show}>
                <HeaderWrapper>
                    <Title>{props.title}</Title>
                    <CloseIconWrapper>
                        <CloseIcon
                            onClickProps={props.closePopover}
                            src={Close}
                            alt={'Close'}
                            height={'15px'}
                            width={'15px'} />
                    </CloseIconWrapper>
                </HeaderWrapper>
                <PopoverMessage width={props.width}>
                    {props.popoverContent}
                </PopoverMessage>
            </PopoverContent>
        </PopoverWrapper>
    );
};

Popover.propTypes = {
    popoverTrigger: PropTypes.node,
    popoverContent: PropTypes.node,
    show: PropTypes.bool,
    closePopover: PropTypes.func,
    width: PropTypes.string,
    title: PropTypes.string
};

export default Popover;
