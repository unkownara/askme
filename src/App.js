import React from 'react';
import history from './history';
import { Router, Switch, Route } from 'react-router';
import { LoginPage } from './components/auth/LoginPage'
import { Signup } from './components/auth/Signup';
import NavBar from './components/NavBar';
import WallPage from './containers/WallPage';
import { Forgot } from './components/authentication/Forgot';

function App() {
	return (
		<div className="loginForm" >
			<Router history={history}>
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
