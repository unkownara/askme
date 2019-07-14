import React, { Fragment } from 'react';
import styled from 'styled-components';
import createBrowserHistory from './history';
import { Router, Switch, Route } from 'react-router';
import { LoginPage } from './components/authentication/LoginPage'
import { LandingPage } from './components/landingPage/LandingPage';
import NavBar from './components/NavBar';
import WallPage from './containers/WallPage';


const Layout = styled.div`
    padding: 50px;
	/* background: #fff; */
`

function App() {
	return (
		<Fragment>
			<NavBar />
			<Layout>
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
			</Layout>
		</Fragment>

	)
}

export default App;
