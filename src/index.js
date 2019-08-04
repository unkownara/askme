import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import Amplify from 'aws-amplify';
import config from './aws-config';
import './index.css';
import App from './App';
import { userReducer } from './reducers/userReducer';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';


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

const store = createStore(combineReducers({
	userReducer
}),compose(applyMiddleware(thunkMiddleware)));

ReactDOM.render(<Provider store={store}>
	<App />
</Provider>, document.getElementById('root'));
serviceWorker.unregister();
