import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ImageWrapper } from './CommonStyles';

import File from '../images/file.png';
import Image from '../images/image.png';
import Video from '../images/video.png';
import Audio from '../images/audio.png';
import Close from '../images/close.png';
import Tick from '../images/tick.png';
import Warning from '../images/warning.png';

const PreviewCardContainer = styled.div`
    padding: 0 10px;
`

const PreviewCardWrapper = styled.div`
    display: grid;
    grid-template-columns: 0.6fr 4fr 0.3fr 0.3fr    ;
    height: 50px;
    border: 1px solid rgba(0,0,0,0.1);
    width: 100%;
    border-radius: 3px;
    background: rgba(0,0,0,0.02);
    margin: 10px 0;
`

const FileThumbnail = styled(ImageWrapper)`
    padding: 3px;
    
    &>img{
        border: 1px solid #eee;
    }
`

const FileName = styled.div`
    font-size: 16px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 12px;
    font-weight: 500;
    color: gray;
    color: gray;
    letter-spacing: 0.2px;
`

const TickIcon = styled(ImageWrapper)``

const CloseIcon = styled(ImageWrapper)`

    &>img{
        cursor: pointer;
    }
`



class FileUploadPreviewCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <PreviewCardContainer>
                <PreviewCardWrapper>
                    <FileThumbnail
                        src={this.props.fileType === 'image' ? Image : this.props.fileType === 'video' ? Video : this.props.fileType === 'audio' ? Audio : File}
                        alt={'Thumbnail'}
                        height={'40px'}
                        width={'40px'}
                        radius={'5px'}
                    />
                    <FileName>{this.props.fileName}</FileName>
                    <TickIcon
                        src={this.props.fileSelectedErr ? Tick : Warning}
                        alt={'Selected'}
                        height={'30px'}
                        width={'30px'}
                    />
                    <CloseIcon
                        src={Close}
                        alt={'Close'}
                        height={'15px'}
                        width={'15px'}
                    />
                </PreviewCardWrapper>
            </PreviewCardContainer>
        );
    }
}

FileUploadPreviewCard.propTypes = {
    thumbnail: PropTypes.string,
    fileName: PropTypes.string,
    fileType: PropTypes.string,
    fileSelectedErr: PropTypes.bool
};

export default FileUploadPreviewCard;
