import React, { Fragment } from 'react';
import history from './history';
import styled from 'styled-components';
import { Router, Switch, Route } from 'react-router';
import { LogIn } from './components/auth/LogIn';
import { LandingPage } from './components/landingPage/LandingPage';
import { Signup } from './components/auth/SignUp';
import NavBar from './components/NavBar';
import { WallPage } from './containers/WallPage';
import { Forgot } from './components/auth/Forgot';

const Layout = styled.div`
    padding: 50px;
	/* background: #fff; */
`

function App() {
	return (
		<Fragment>
			<NavBar />
			<Layout>
				<Router history={history}>
					<Switch>
						<Route
							exact
							path="/"
							component={LandingPage}
						/>
						<Route
							exact
							path="/login"
							component={LogIn}
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
			</Layout>
		</Fragment>
	)
}
export default App; 
