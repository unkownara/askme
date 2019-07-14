import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Logo from './Logo';

const NavBarContainer = styled.div`
    background: #fff;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr 1fr 3fr;
    grid-gap: 10px;
    height: 60px;
    box-shadow: 0px -5px 34px rgb(229,231,231);
`

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <NavBarContainer>
                <Logo />
                
            </NavBarContainer>
        );
    }
}

NavBar.propTypes = {};

export default NavBar;
