import React from 'react';
import history from './history';
import { Router, Switch, Route } from 'react-router';
import { LoginPage } from './components/auth/LoginPage'
import { Signup } from './components/auth/Signup';
import NavBar from './components/NavBar';
import LandingPage from './containers/LandingPage';
import WallPage from './containers/WallPage';

function App() {
	return (
		<div className="loginForm" >
			<Router history={history}>
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
				</Switch>
			</Router>
		</div>
  )
}
export default App; 
