import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostActivityWrapper = styled.div`

`

class PostActivity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <PostActivityWrapper>

            </PostActivityWrapper>
        );
    }
}

PostActivity.propTypes = {};

export default PostActivity;
