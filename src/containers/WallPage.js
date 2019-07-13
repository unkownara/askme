import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ProfileDetails from '../components/ProfileDetails';

import Avatar from '../components/images/dp.png';

class WallPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={{ margin: '100px' }}>
                <ProfileDetails
                    showUserName={true}
                    showActivityDetails={false}
                    showUploadedTime={false}
                    userFullName={'Aravind Manoharan'}
                    src={Avatar} />
            </div>
        );
    }
}

WallPage.propTypes = {};

export default WallPage;
