import React, { useState } from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';
import { useInput } from '../hooks/useInput';
import './Signup.css';
import 'semantic-ui-css/semantic.min.css';

const friendOptions = [
    {
        key: 'Jenny Hess',
        text: 'Jenny Hess',
        value: 'Jenny Hess',
        image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    },
    {
        key: 'Elliot Fu',
        text: 'Elliot Fu',
        value: 'Elliot Fu',
        image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
    },
    {
        key: 'Stevie Feliciano',
        text: 'Stevie Feliciano',
        value: 'Stevie Feliciano',
        image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
    },
    {
        key: 'Christian',
        text: 'Christian',
        value: 'Christian',
        image: { avatar: true, src: '/images/avatar/small/christian.jpg' },
    },
    {
        key: 'Matt',
        text: 'Matt',
        value: 'Matt',
        image: { avatar: true, src: '/images/avatar/small/matt.jpg' },
    },
    {
        key: 'Justen Kitsune',
        text: 'Justen Kitsune',
        value: 'Justen Kitsune',
        image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
    },
]

export function Signup() {

    const [isMaleActive, setIsMaleActive] = useState(true);
    const [isFemaleActive, setIsFemaleActive] = useState(true);
    const [isOtherActive, setIsOtherActive] = useState(true);
    const [arrowChange, setArrowChange] = useState(true);
    const firstName = useInput('');
    const lastName = useInput('');
    const userName = useInput('');
    const password = useInput('');
    const email = useInput('');
    const confirmPassword = useInput('');
    const phone_number = useInput('');

    function gender(e) {
        console.log(e)
        if (e === 'male') {
            setIsMaleActive(false)
            setIsFemaleActive(true)
            setIsOtherActive(true)
        }
        else if (e === 'female') {
            setIsMaleActive(true)
            setIsFemaleActive(false)
            setIsOtherActive(true)
        }
        else if (e === 'other') {
            setIsMaleActive(true)
            setIsFemaleActive(true)
            setIsOtherActive(false)
        }
    }

    return (
        <div className="signUpCreation">
            <p className="signupHeader">Sign up to Account</p>
            <form>
                <div className="firstAndLastName division">
                    <div>
                        <label>First</label><br />
                        <input
                            {...firstName}
                            type="text"
                            placeholder="Enter Value"
                            className="input firstName"
                        />
                    </div>
                    <div>
                        <label>Last</label><br />
                        <input
                            {...lastName}
                            type="text"
                            placeholder="Enter Value"
                            className="input lastName"
                        />
                    </div>
                </div>
                <div className="division">
                    <label>Username</label>
                    <input
                        {...userName}
                        type="text"
                        placeholder="Enter Value"
                        className="input firstName"
                    />
                </div>
                <div className="division">
                    <label>Email</label>
                    <input
                        {...email}
                        type="text"
                        placeholder="Enter Value"
                        className="input email"
                    />
                </div>
                <div className="division">
                    <label>Password</label>
                    <input
                        {...password}
                        type="text"
                        placeholder="Enter Value"
                        className="input"
                    />
                </div>
                <div className="division">
                    <label>Confirm Password</label>
                    <input
                        {...confirmPassword}
                        type="text"
                        placeholder="Enter Value"
                        className="input"
                    />
                </div>
                <div className="division">
                    <label>Phone no</label>
                    <input
                        {...phone_number}
                        type="text"
                        placeholder="Enter Value"
                        className="input"
                    />
                </div>
                <div className="division">
                    <label>Gender</label>
                    <div className="genderDiv">
                        <div className="genderSection">
                            {isMaleActive ?
                                <Icon name="circle outline" className="genderIcon" /> :
                                <Icon name="dot circle" color="blue" className="genderIcon" />}
                            {isMaleActive ?
                                <input
                                    type="button"
                                    className="gender genderActive"
                                    value="Male"
                                    onClick={gender.bind(this, 'male')}
                                    style={{
                                        border: '1px solid lightgray'
                                    }}
                                /> :
                                <input
                                    type="button"
                                    className="gender genderInActive"
                                    value="Male"
                                    style={{
                                        border: '1px solid blue'
                                    }}
                                />}
                        </div>
                        <div className="genderSection">
                            {isFemaleActive ?
                                <Icon name="circle outline" className="genderIcon" /> :
                                <Icon name="dot circle " color="blue" className="genderIcon" />}
                            {isFemaleActive ?
                                <input
                                    type="button"
                                    className="gender genderActive"
                                    value="Female"
                                    onClick={gender.bind(this, 'female')}
                                    style={{
                                        border: '1px solid lightgray'
                                    }}
                                /> :
                                <input
                                    type="button"
                                    className="gender genderInActive"
                                    value="Female"
                                    style={{
                                        border: '1px solid blue'
                                    }}
                                />}
                        </div>
                        <div className="genderSection">
                            {isOtherActive ?
                                <Icon name="circle outline" className="genderIcon" /> :
                                <Icon name="dot circle" color="blue" className="genderIcon" />}
                            {isOtherActive ?
                                <input
                                    type="button"
                                    className="gender genderActive"
                                    value="Other"
                                    onClick={gender.bind(this, 'other')}
                                    style={{
                                        border: '1px solid lightgray'
                                    }}
                                /> :
                                <input
                                    type="button"
                                    className="gender genderInActive"
                                    value="Other"
                                    style={{
                                        border: '1px solid blue'
                                    }}
                                />}
                        </div>
                    </div>
                </div>
                <div className="division">
                    <label>city</label>
                    <Dropdown style={{
                        width: '100%',
                        margin: '8px 0px',
                        color: 'gray'
                    }}
                        placeholder='Select Value'
                        search
                        selection
                        options={friendOptions}
                    />
                </div>
                <div className="submitField">
                    {arrowChange ?
                        <Icon name="arrow right" className="arrowIcon" /> :
                        <Icon loading name="spinner" className="arrowIcon" />}
                    <input
                        className="submitButton"
                        type={"button"}
                        value={"Sign up"}
                        onClick={e => setArrowChange(false)}
                    />
                </div> 
            </form>
        </div>
    )
}