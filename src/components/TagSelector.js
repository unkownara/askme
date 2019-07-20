import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ImageWrapper } from './CommonStyles';
import Popover from './Popover';

import Delete from '../images/close.png';

export default function TagSelector(props) {

    const [inputTag, setInputTag] = useState('');
    const [inputErr, setInputErr] = useState(false);
    const [showTagsPopover, setShowTagsPopover] = useState(false);
    const inputRef = useRef(null);
    const predefinedTags = [{ name: 'elonmusk', type: 'default' }, { name: 'neruallink', type: 'default' }, { name: 'ai', type: 'default' }, { name: 'bmi', type: 'default' }, { name: 'brain', type: 'default' }];
    const [filteredPredefinedTags, setFilteredPredefinedTags] = useState(predefinedTags);
    const [tags, setTags] = useState([]);

    function toggleTagsPopover() {
        setShowTagsPopover(!showTagsPopover);
    }

    useEffect(() => {
        inputRef.current.focus()
    })

    function filterSearch(tagsArr, searchVal) {
        return tagsArr.filter((value) => {
            let flag = 0
            if (value.name.includes(searchVal)) {
                for (var i = 0; i < props.tags.length; i++) {
                    if (value.name === props.tags[i].name) {
                        flag = 1
                    }
                }
                if (flag === 0)
                    return 1
            }
            return 0
        })
    }

    function searchTags(e) {
        setInputTag(e.target.value);
        setInputErr(false);
        setFilteredPredefinedTags(filterSearch(predefinedTags, inputTag))

        if (e.key === 'Enter') {
            addCustomTag()
        }
    }

    function addCustomTag() {
        if (inputTag.length) {
            props.addSelectTags({ name: inputTag, type: 'custom' });
            setInputTag('');
        } else {
            setInputErr(true);
        }
        setFilteredPredefinedTags(filterSearch(predefinedTags, ''))
        removeSelectedTags(inputTag)

    }

    function addPredefinedTag(predefinedTag) {
        props.addSelectTags({ name: predefinedTag, type: 'default' });
        removeSelectedTags({ name: predefinedTag, type: 'default' });
        setInputTag('');

    }

    function deleteTag(tag) {

        props.removeTag(tag)
        if (tag.type === 'default') {
            filteredPredefinedTags.push(tag)
        }
        setFilteredPredefinedTags(filteredPredefinedTags)
    }

    function removeSelectedTags(selectedTag) {
        let filteredArr = filteredPredefinedTags.filter((value) => {
            if ((value.name === selectedTag.name) && (selectedTag.type === 'default')) {
                return 0
            }
            return 1
        })
        setFilteredPredefinedTags(filteredArr);
    }

    function getRandomColor() {
        var letters = 'BCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * letters.length)];
        }
        return color;
    }

    return (
        <TagsWrapper>
            <TagsContainer>
                {
                    props.tags.map((tag, tag_index) =>
                        <Tags
                            bgColor={getRandomColor}
                            key={tag_index}>
                            <Tag>{tag.name}</Tag>
                            <DeleteIcon
                                pointer
                                onClickProps={() => deleteTag(tag)}
                                src={Delete}
                                alt={'Delete'}
                                height={'12px'}
                                width={'12px'} />
                        </Tags>
                    )
                }
                <Popover
                    title={'TAGS'}
                    width={'370px'}
                    show={showTagsPopover}
                    closePopover={toggleTagsPopover}
                    popoverTrigger={
                        <AddTags
                            onClick={toggleTagsPopover}>+ Add tags</AddTags>
                    }
                    popoverContent={
                        <SearchWrapper>
                            <TagSearch
                                ref={inputRef}
                                err={inputErr}
                                onChange={searchTags}
                                onKeyUp={searchTags}
                                value={inputTag}
                                name="inputtag"
                            />
                            <AddButton onClick={addCustomTag}>ADD</AddButton>
                            <TagsContainer>
                                {
                                    filteredPredefinedTags.map((custom_tag, custom_tag_index) =>
                                        <Tags
                                            pointer
                                            bgColor={getRandomColor}
                                            key={custom_tag_index}
                                            onClick={() => addPredefinedTag(custom_tag.name)}>
                                            <Tag>{custom_tag.name}</Tag>
                                        </Tags>
                                    )
                                }
                            </TagsContainer>
                        </SearchWrapper>
                    }
                />
            </TagsContainer>

        </TagsWrapper>
    );
};


const TagsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 15px 0;
`

const Tags = styled.div`
    width: max-content;
    background: ${props => props.bgColor || '#fff'};
    height: auto;
    padding: 3px 5px;
    margin: 5px 10px;
    border-radius: 10px;
    border: 1px solid #eee;
    display: grid;
    grid-template-columns: 4.5fr 0.5fr;
    cursor: ${props => props.pointer ? 'pointer' : 'default'};
`

const Tag = styled.div`
    padding: 5px;
    line-height: 12px;
    letter-spacing: 0.7px;
    font-weight: 500;
`

const DeleteIcon = styled(ImageWrapper)`
    cursor: pointer;
`

const AddTags = styled.div`
    color: #3498DB;
    font-weight: bold;
    font-size: 14px;
    margin: 5px 10px;
    padding: 3px 5px;
    cursor: pointer;
    width: max-content;
`

const SearchWrapper = styled.div`
    padding: 10px;
`

const TagSearch = styled.input`
    border: ${props => props.err ? '1px solid red' : '1px solid #eee'};
    height: 35px;
    width: 250px;
    border-radius: 20px;
    outline: none;
    padding: 0 10px;
    color: rgba(0,0,0,0.5);
`

const TagsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 20px;
`

const AddButton = styled.button`
    outline: none;
    background: rgb(27, 176, 200);
    color: #fff;
    padding: 3px 10px;
    border: 1px solid #fff;
    border-radius: 25px;
    cursor: pointer;
    width: max-content;
    margin: 0 15px;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 14px;

    @media(max-width: 700px){
        display: block;
        margin: 10px auto;
    }
`

TagSelector.propTypes = {
    AddTags: PropTypes.func,
    tag: PropTypes.string
};
