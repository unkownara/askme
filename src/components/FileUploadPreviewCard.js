import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ImageWrapper } from './CommonStyles';

import Thumbnail from '../images/logo.png';
import Close from '../images/close.png';

const PreviewCardWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 3.2fr 0.8fr;
    height: 50px;
    width: 100%;
    border-radius: 5px;
    background: rgba(0,0,0,0.1);
    margin: 10px 0;
    padding: 10px;
`

const FileThumbnail = styled(ImageWrapper)``

const FileName = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: gray;
    letter-spacing: 0.2px;
`

const CloseIcon = styled(ImageWrapper)``



class FileUploadPreviewCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <PreviewCardWrapper>
                <FileThumbnail
                    src={Thumbnail}
                    alt={'Thumbnail'}
                    height={'40px'}
                    width={'40px'}
                    radius={'5px'}
                />
                <FileName></FileName>
                <CloseIcon
                    src={Close}
                    alt={'Thumbnail'}
                    height={'10px'}
                    width={'10px'}
                />
            </PreviewCardWrapper>
        );
    }
}

FileUploadPreviewCard.propTypes = {};

export default FileUploadPreviewCard;
