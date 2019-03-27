import React, { Component } from 'react';
import {connect} from 'react-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
    value: 1,
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  handleTabChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <div>
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}

        <Tabs
          value={this.state.value}
          onChange={this.handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Log In"
            onClick={() => { this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' }) }}
          />
          <Tab label="Register"
            onClick={() => { this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' }) }}
          />
        </Tabs>

        <form onSubmit={this.registerUser}>
          {/* <h1>Register User</h1> */}
          <div>
            <TextField
              id="standard-with-placeholder"
              label="Username"
              placeholder="Username"
              margin="normal"
              value={this.state.username}
              onChange={this.handleInputChangeFor('username')}
            />
            {/* <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label> */}
          </div>

          <div>
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              margin="normal"
              value={this.state.password}
              onChange={this.handleInputChangeFor('password')}
            />
            {/* <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label> */}
          </div>
          {/* <div>
            <input
              className="register"
              type="submit"
              name="submit"
              value="Register"
            />
          </div> */}
          <div>
            <Button variant="outlined" color="primary" type="submit">
              Register
            </Button>
          </div>
        </form>
        {/* <center>
          <button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_LOGIN_MODE'})}}
          >
            Login
          </button>
        </center> */}
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(RegisterPage);

