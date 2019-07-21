import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useInput } from '../../hooks/useInput';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { user_post_url } from '../../ApiUrls';
import Dropzone from 'react-dropzone';
import { ImageWrapper } from '../CommonStyles';
import { AskButton } from '../Buttons';
import FileUploadPreviewCard from './FileUploadPreviewCard';
import TagSelector from './TagSelector';

import Avatar from '../../images/dp.png';
import ImageUpload from '../../images/image_upload.png';
import AudioUpload from '../../images/audio_upload.png';
import VideoUpload from '../../images/video_upload.png';

export function AskQuestionBox({ userFullName, userInfo }) {

    const [questionBoxShow, setQuestionBoxShow] = useState(1);
    const [tags, setTags] = useState([]);
    const question = useInput('');
    const hashTag = useInput('');
    const [files, setFiles] = useState([]);

    function onDrop(files) {
        let sources = [];
        files = files.map(file => {
            sources.push({ src: URL.createObjectURL(file), type: file.type });
            return file
        });
        console.log('file ', files);
        setFiles(files);
    }

    function onCancel() {
        setFiles([]);
    }

    async function postQuestionOnClick(e) {
        e.preventDefault();
        const postQuestion = question.value;
        const postHashTag = hashTag.value;
        let postId = '', type = '';
        await import('../../common').then(obj => {
            postId = obj.uniqueId();
            type = obj.fileTypeExtension(files[0].type);
        });
        const tag = hashTag.value;
        const key = `${userInfo.userId}/${postId}-${tag}.${type}`;
        const postObj = {
            userId: userInfo.userId,
            userName: userInfo.userName,
            profilePicture: userInfo.profilePicture,
            postId: postId,
            question: postQuestion,
            hashTag: postHashTag,
            contentKey: type !== 'txt' ? key : '' // If it is string then we don't need to store s3 key.
        };
        if (type !== 'txt') {
            import('../../s3Uploader').then(s3Obj => {
                const uploadData = question.value;
                s3Obj.s3Uploader(uploadData, key, type);
            });
        }
        import('../../ApiRequests').then(apiObj => {
            apiObj.postApiRequestCall(user_post_url, postObj, function (response) {
                console.log('successfully uploaded...', response);
            });
        });
    }

    function toggleQuestionBox() {
        setQuestionBoxShow(!questionBoxShow);
    }

    function addSelectTags(customTag) {
        let flag = 0;
        for (var i = 0; i < tags.length; i++) {
            if (tags[i].name === customTag.name) {
                flag = 1;
            }
        }
        if (flag === 0)
            tags.push(customTag)
        setTags(tags);
    }

    function removeTag(tag) {
        let filteredArr = tags.filter((value) => {
            return value.name !== tag.name
        });
        setTags(filteredArr);
    }

    return (
        <BoxWrapper>
            <HeaderWrapper onClick={toggleQuestionBox}>
                <AvatarWrapper
                    src={Avatar}
                    alt={'Avatar'}
                    height={'40px'}
                    width={'40px'} />
                <AskText>{userFullName}Aravind, Ask a question.</AskText>
            </HeaderWrapper>
            {
                questionBoxShow ?
                    <QuestionAreaWrapper>
                        <TextAreaWrapper>
                            <QuestionTextArea
                                showFileUpload={files.length && files[0].size}
                                placeholder={'Ask anything...'}
                                {...question}
                            />
                            <TagSelector
                                tags={tags}
                                addSelectTags={addSelectTags}
                                removeTag={removeTag} />
                        </TextAreaWrapper>
                        {
                            files.length && files[0].size ?
                                <MediaUploadContainer>
                                    <FileUploadPreviewCard />
                                </MediaUploadContainer>
                                : null
                        }
                        <FooterWrapper>
                            <MediaUploadIconsWrapper>
                                <MediaDropzone
                                    onDrop={onDrop}
                                    onCancel={onCancel}
                                    mediaType={'image'}>
                                    <IconsWrapper margin={'0 10px 5px 10px'} src={ImageUpload} height={'20px'} width={'20px'} alt={'Image upload'} />
                                </MediaDropzone>
                                <MediaDropzone
                                    onDrop={onDrop}
                                    onCancel={onCancel}
                                    mediaType={'video'}>
                                    <IconsWrapper margin={'0 10px 5px 10px'} src={VideoUpload} height={'20px'} width={'20px'} alt={'Video upload'} />
                                </MediaDropzone>
                                <MediaDropzone
                                    onDrop={onDrop}
                                    onCancel={onCancel}
                                    mediaType={'audio'}>
                                    <IconsWrapper margin={'0 10px 5px 10px'} src={AudioUpload} height={'20px'} width={'20px'} alt={'Audio upload'} />
                                </MediaDropzone>
                            </MediaUploadIconsWrapper>
                            <ButtonWrapper>
                                <AskButton
                                    margin={'0 10px 0 0'}
                                    onClickProps={postQuestionOnClick}
                                />
                            </ButtonWrapper>
                        </FooterWrapper>
                    </QuestionAreaWrapper> : null
            }
        </BoxWrapper>
    )
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
    width: auto;
    background: #fff;
    padding: 10px 0;
    border-radius: 5px;
    border: 1px solid #eee;
    position: relative;
    margin: 0 auto;
`

const HeaderWrapper = styled.div`
    display: grid;
    grid-template-columns: 0.7fr 4.3fr;
    height: 50px;
    margin-top: 10px;
    margin-bottom: 10px;

    &:hover{
        background: #eee;
        cursor: pointer;
    }
`

const AskText = styled.div`
    vertical-align: middle;
    line-height: 40px;
    font-weight: bold;
    font-size: 18px;
`

const AvatarWrapper = styled(ImageWrapper)``

const QuestionAreaWrapper = styled.div`
    padding: 0 20px;
`

const TextAreaWrapper = styled.div``

const QuestionTextArea = styled.textarea`
    width: 100%;
    height: ${props => props.showFileUpload ? '150px' : '180px'};
    border: none;
    padding: 10px;
    letter-spacing: 0.5px;
    color: gray;
    font-size: 22px;
    font-weight: 500;
`

const FooterWrapper = styled.div`
    border-top: 1px solid #eee;
    display: grid;
    grid-template-columns: 1fr 1fr;
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
    userFullName: PropTypes.string,
    fileSelected: PropTypes.bool
};