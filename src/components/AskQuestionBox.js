import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dropzone from 'react-dropzone';

import { ImageWrapper } from './CommonStyles';
import { AskButton } from './Buttons';
import FileUploadPreviewCard from './FileUploadPreviewCard';

import Avatar from '../images/dp.png';
import ImageUpload from '../images/image_upload.png';
import AudioUpload from '../images/audio_upload.png';
import VideoUpload from '../images/video_upload.png';

class AskQuestionBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            files: []
        }
    }

    onDrop = (files) => {
        let sources = [];
        files = files.map(file => {
            sources.push({ src: URL.createObjectURL(file), type: file.type });
            return file
        });

        this.setState({ files, sources });
    }

    onCancel = () => this.setState({ files: [] })


    render() {
        return (
            <BoxWrapper>
                <HeaderWrapper>
                    <AvatarWrapper
                        src={Avatar}
                        alt={'Avatar'}
                        height={'40px'}
                        width={'40px'} />
                    <AskText>{'userFullName'}, Ask a question.</AskText>
                </HeaderWrapper>
                <QuestionTextArea placeholder={'Type...'} />
                <MediaUploadContainer>
                    <FileUploadPreviewCard />
                </MediaUploadContainer>
                <FooterWrapper>
                    <MediaUploadIconsWrapper>
                        <MediaDropzone
                            onDrop={this.onDrop}
                            onCancel={this.onCancel}
                            mediaType={'image'}>
                            <IconsWrapper margin={'0 10px 5px 10px'} src={ImageUpload} height={'20px'} width={'20px'} alt={'Image upload'} />
                        </MediaDropzone>
                        <MediaDropzone
                            onDrop={this.onDrop}
                            onCancel={this.onCancel}
                            mediaType={'video'}>
                            <IconsWrapper margin={'0 10px 5px 10px'} src={VideoUpload} height={'20px'} width={'20px'} alt={'Video upload'} />
                        </MediaDropzone>
                        <MediaDropzone
                            onDrop={this.onDrop}
                            onCancel={this.onCancel}
                            mediaType={'audio'}>
                            <IconsWrapper margin={'0 10px 5px 10px'} src={AudioUpload} height={'20px'} width={'20px'} alt={'Audio upload'} />
                        </MediaDropzone>
                    </MediaUploadIconsWrapper>
                    <ButtonWrapper>
                        <AskButton margin={'0 10px 0 0'} />
                    </ButtonWrapper>
                </FooterWrapper>
            </BoxWrapper>
        )
    }
}

const MediaDropzone = (props) => {
    return (
        <Dropzone
            onDrop={props.onDrop}
            onFileDialogCancel={props.onCancel}
            style={{ backgroundColor: '#fff' }}
            accept="video/*">
            {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()} className="dropzoneIcon-reading">
                    <input {...getInputProps()} />
                    {props.children}
                </div>
            )}
        </Dropzone>
    );
}

const BoxWrapper = styled.div`
    min-height: 340px;
    width: auto;
    background: #fff;
    border-radius: 5px;
    border: 1px solid #eee;
    position: relative;
    margin: 0 auto;
`

const HeaderWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    height: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
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
    letter-spacing: 0.5px;
    color: gray;
    font-size: 22px;
    font-weight: 500;
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
    justify-content: flex-start;
    align-items: center;
`

const IconsWrapper = styled(ImageWrapper)`
`

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const MediaUploadContainer = styled.div`

`

AskQuestionBox.propTypes = {
    userFullName: PropTypes.string
};

export default AskQuestionBox;
