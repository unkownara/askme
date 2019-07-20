import React from 'react';
import styled from 'styled-components';

const ImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${props => props.margin || '0px'};
    cursor: ${props => props.pointer ? 'pointer' : 'default'};
`

const Image = styled.img`
    object-fit: cover;
    height: ${props => props.height || '30px'};
    width: ${props => props.width || '30px'};
    border-radius: ${props => props.radius || '5px'};
`

export const ImageWrapper = (props) => {
    return (
        <ImgWrapper margin={props.margin} className={props.className} onClick={props.onClickProps}>
            <Image
                src={props.src}
                alt={props.alt}
                radius={props.radius}
                height={props.height}
                width={props.width} />
        </ImgWrapper>
    )
}
