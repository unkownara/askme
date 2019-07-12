import React from 'react';
import history from './history';
import { Router, Switch , Route } from 'react-router';
import { LoginPage } from './components/authentication/LoginPage'

function App() {
<<<<<<< HEAD
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
=======

  return (
    <>
      
    </>
  );
>>>>>>> de940bf8377f566adbc724bb4927a57d180abde0
}

export default App;