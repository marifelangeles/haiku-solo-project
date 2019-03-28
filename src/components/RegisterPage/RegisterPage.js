import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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
      this.props.dispatch({ type: 'REGISTRATION_INPUT_ERROR' });
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
      <>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          style={{ marginTop: '3rem' }}
        >

          <Grid item>
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
          </Grid>

          <Grid item>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              style={{ marginTop: '2rem' }}
            >

              <form onSubmit={this.registerUser}>
                <Grid item>
                  {this.props.errors.registrationMessage && (
                    <Typography
                      variant="subtitle1" gutterBottom
                      className="alert"
                      role="alert"
                    >
                      {this.props.errors.registrationMessage}
                    </Typography>
                  )}
                </Grid>

                <Grid item>
                  <TextField
                    id="standard-with-placeholder"
                    label="Username"
                    placeholder="Username"
                    margin="normal"
                    value={this.state.username}
                    onChange={this.handleInputChangeFor('username')}
                  />
                </Grid>

                <Grid item>
                  <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    value={this.state.password}
                    onChange={this.handleInputChangeFor('password')}
                  />
                </Grid>

                <Grid item style={{ marginTop: '3rem' }}>
                  <Button variant="outlined" color="primary" type="submit">
                    Register
            </Button>
                </Grid>
              </form>

            </Grid>
          </Grid>
        </Grid>
      </>
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

