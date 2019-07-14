import React from 'react';
import createBrowserHistory from './history';
import { Router, Switch, Route } from 'react-router';
import { LoginPage } from './components/authentication/LoginPage'
import { Signup } from './components/authentication/Signup';
import NavBar from './components/NavBar';
import LandingPage from './containers/LandingPage';
import WallPage from './containers/WallPage';
import { Forgot } from './components/authentication/Forgot';

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
						path="/wall"
						exact
						component={WallPage}
					/>
					<Route
						exact
						path="/signup"
						component={Signup}
					/>
					<Route
						exact
						path="/forgot"
						component={Forgot}
					/>
				</Switch>
			</Router>
		</div>
	)
}
export default App; 
