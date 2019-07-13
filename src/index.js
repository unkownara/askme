import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import config from './aws-config';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

Amplify.configure({
	Auth: {
		mandatorySignIn: true,
		region: config.cognito.REGION,
		userPoolId: config.cognito.USER_POOL_ID,
		identityPoolId: config.cognito.IDENTITY_POOL_ID,
		userPoolWebClientId: config.cognito.APP_CLIENT_ID
	},
    Analytics: {
        disabled: true
    }
});

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
