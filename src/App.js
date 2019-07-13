import React from 'react';
import createBrowserHistory from './history';
import { Router, Switch, Route } from 'react-router';
import { LoginPage } from './components/authentication/LoginPage'
import { LandingPage } from './components/landingPage/LandingPage';

function App() {
	return (
		<div className="App">
			<Router history={createBrowserHistory}>
				<Switch>
					<Route
						exact
						path="/home"
						component={LoginPage}
					/>
					<Route
						exact
						path="/"
						component={LandingPage}
					/>
				</Switch>
			</Router>
		</div>
	)
}

export default App;
