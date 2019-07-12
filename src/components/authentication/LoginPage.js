import React from 'react';
import { useInput } from '../hooks/useInput';
import { SlidePage } from './SlidePage';

export function LoginPage () {

    const email = useInput('');
    const password = useInput('');

    return(
        <React.Fragment>
            <div className="loginPageCreation">
                <p className="headingPara"><span>stu</span>dent</p>
                <p className="loginHeadPara">Create account</p>
                <form className="formCreation">
                    <div>
                        <input
                            className="inputField email"
                            type={"text"}
                            placeholder="Enter Value"
                            {...email}
                            text="Email"
                        />
                    </div>
                    <div>
                        <input
                            className="inputField password" 
                            type={"password"}
                            placeholder="Enter Value"
                            {...password}
                            text="Password"
                        />
                    </div>
                    <input
                        className="Submitbutton"
                        type={"button"}
                        value={"Sign up"}
                    />
                    <p>Already have an account?
                    <span>Log in here</span>
                    </p>
                </form>
                <div>
                    <SlidePage />
                </div>
            </div>
        </React.Fragment>
    )
}