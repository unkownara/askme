import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';
import NavBar from './components/NavBar';
import LandingPage from './containers/LandingPage';
import WallPage from './containers/WallPage';


class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <NavBar />
        <Switch>
          <Route
            path="/"
            exact
            component={LandingPage} />
          <Route
            path="/wall"
            exact
            component={WallPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;