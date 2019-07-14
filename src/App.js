import React from 'react';
import createBrowserHistory from './history';
import { Router, Switch, Route } from 'react-router';
import { LoginPage } from './components/authentication/LoginPage'
// import { LandingPage } from './components/landingPage/LandingPage';
import { Signup } from './components/authentication/Signup';

function App() {
	return (
		<div className="loginForm" >
			<Router history={createBrowserHistory}>
				<div className="textField">
					<p>login</p>
				</div>
				<Switch>
					<Route
						exact
						path="/"
						component={LoginPage}
					/>
					<Route
						exact
						path="/signup"
						component={Signup}
					/>
				</Switch>
			</Router>
		</div>
	)
}
export default App; 
