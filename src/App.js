import React from 'react';
import createBrowserHistory from './history';
import { Router, Switch, Route } from 'react-router';
import { LoginPage } from './components/authentication/LoginPage'
import NavBar from './components/NavBar';
import LandingPage from './containers/LandingPage';
import WallPage from './containers/WallPage';

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
            path="/wall"
            exact
            component={WallPage} 
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
