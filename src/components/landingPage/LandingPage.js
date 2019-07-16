import React from 'react';
import { Icon } from 'semantic-ui-react';
import { useInput } from '../hooks/useInput';
import { unity } from '../../images/unity.png';

export function LandingPage() {

    const search = useInput('');

    return (
        <React.Fragment>
            <div className="navBar">
                <div>
                    <img src={unity} alt="no" />
                    <Icon name="search" />
                    <input
                        {...search}
                        type="text"
                        placeholder="search"
                        className="searchInput"
                    />
                </div>
                <div>
                    <ul>
                        <li><span>home</span></li>
                        <li><span>about</span></li>
                        <li><span>details</span></li>
                        <li><span>team</span></li>
                        <li><span>community</span></li>
                    </ul>
                </div>
                <div>
                    <img src={unity} alt='no' />
                </div>
                <div>
                    <img src={unity} alt="no" />
                    <span>{'name'}</span>
                    <span>{'subName'}</span>
                </div>
            </div>
        </React.Fragment>
    )
}