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
import { OTP } from './components/otp';
import { ConfirmSignUp } from './components/auth/ConfirmSignUp';
import { Notification } from './components/notification/index';

const Container = styled.div`
	background: rgba(0,0,0,0.03);
`

const Layout = styled.div`
	width: 1200px;
	margin: 0 auto;
`

function App() {
	return (
		<Container>
			<NavBar />
			<Layout>
				<Router history={history}>
					<Switch>
						<Route
							exact
							path="/"
							component={ConfirmSignUp}
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
						<Route
							path="/otp"
							component={OTP}
						/>
						<Route
							path="/notification"
							component={Notification}
						/>
					</Switch>
				</Router>
			</Layout>
		</Container>
	)
}
export default App; 
