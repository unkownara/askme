import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ImageWrapper } from './CommonStyles';
import AskButton from './Buttons';

import Avatar from './images/dp.png';
import ImageUpload from './images/image_upload.png';
import AudioUpload from './images/audio_upload.png';
import VideoUpload from './images/video_upload.png';

const BoxWrapper = styled.div`
    min-height: 250px;
    width: 400px;
    border-radius: 5px;
    border: 1px solid #eee;
    position: relative;
`

const HeaderWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    height: 50px;
`

const AskText = styled.div`
    vertical-align: middle;
    line-height: 40px;
    font-weight: bold;
    font-size: 18px;
`

const AvatarWrapper = styled(ImageWrapper)``

const QuestionTextArea = styled.textarea`
    width: 100%;
    height: 150px;
    border: none;
    padding: 10px;
    box-sizing: border-box;
`

const FooterWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: absolute;
    bottom: 0;  
    width: 100%;
    height: 40px;
`

const MediaUploadIconsWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const IconsWrapper = styled(ImageWrapper)`
`

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

class AskQuestionBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <BoxWrapper>
                <HeaderWrapper>
                    <AvatarWrapper
                        src={Avatar}
                        alt={'Avatar'}
                        height={'40px'}
                        width={'40px'} />
                    <AskText>Aravind, Ask a question.</AskText>
                </HeaderWrapper>
                <QuestionTextArea placeholder={'Type...'} />
                <FooterWrapper>
                    <MediaUploadIconsWrapper>
                        <IconsWrapper margin={'0 10px 5px 10px'} src={ImageUpload} height={'20px'} width={'20px'} alt={'Image upload'} />
                        <IconsWrapper margin={'0 10px 5px 10px'} src={VideoUpload} height={'20px'} width={'20px'} alt={'Video upload'} />
                        <IconsWrapper margin={'0 10px 5px 10px'} src={AudioUpload} height={'20px'} width={'20px'} alt={'Audio upload'} />
                    </MediaUploadIconsWrapper>
                    <ButtonWrapper>
                        <AskButton margin={'0 10px 0 0'} />
                    </ButtonWrapper>
                </FooterWrapper>
            </BoxWrapper>
        );
    }
}

AskQuestionBox.propTypes = {};

export default AskQuestionBox;
