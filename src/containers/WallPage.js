import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AskQuestionBox from '../components/AskQuestionBox';

import Avatar from '../components/images/dp.png';

class WallPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={{ margin: '100px' }}>
                <AskQuestionBox />
            </div>
        );
    }
}

WallPage.propTypes = {};

export default WallPage;
