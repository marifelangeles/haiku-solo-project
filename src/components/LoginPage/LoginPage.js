import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    value: 0,

  };

  login = (event) => {
    event.preventDefault();

    // check if user entered username and password 
    if (this.state.username && this.state.password) {
      // save login info in reducer
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
      
      // direct user to user home page
      this.props.history.push('/home');
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

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
        {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
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
            
          />
          <Tab label="Register" 
            onClick={() => { this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' }) }}
          />
        </Tabs>

        <form onSubmit={this.login}>
          {/* <Typography variant="h6" gutterBottom>Login</Typography> */}
          <div>
            <TextField
              id="standard-with-placeholder"
              label="Username"
              placeholder="Username"
              margin="normal"
              value={this.state.username}
              onChange={this.handleInputChangeFor('username')}
            />
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
          </div>
          <div>
            <Button variant="outlined" color="primary" type="submit">
              Log In
            </Button>
          </div>
        </form>
        <center>
          {/* <button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}}
          >
            Register
          </button> */}
        </center>
      </div>
    );
  }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(withRouter(LoginPage));
