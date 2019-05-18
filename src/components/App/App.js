import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';

// components
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import UserPage from '../UserPage/UserPage';
import WordPage from '../WordPage/index';
import HaikuPage from '../HaikuPage/index';
import WelcomePage from '../WelcomePage/index';
import LoginPage from '../LoginPage/LoginPage';
import AppBar from '../AppBar/AppBar';


class App extends Component {
  
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <AppBar />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/welcome */}
            {/* Users not logged in can write a haiku (without saving)*/}
            <Redirect exact from="/" to="/welcome" />
            <Route
              exact path="/welcome"
              component={WelcomePage}
            />
            <Route
              exact path="/word"
              component={WordPage}
            />
            <Route
              exact path="/word/haiku"
              component={HaikuPage}
            />
            <Route
              exact path="/login"
              component={LoginPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={UserPage}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </div>
      </Router>
  )}
}

export default connect()(App);
