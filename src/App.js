import React from 'react';
import history from './history';
import { Router, Switch , Route } from 'react-router';
import { LoginPage } from './components/authentication/LoginPage'

function App() {
	return (
		<div className="App">
			<Router history={history}>  
				<Switch>
					<Route
						exact
						path="/"
						component={LoginPage}
					/>
				</Switch>
			</Router>
		</div>
	)
}

export default App;
