import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import HistoryPage from '../HistoryPage';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class UserPage extends Component {
  
  handleClick = () => {
    console.log('in handleClick');
    // go to word page
    this.props.history.push('/word');
  }

  render() {
    return (
      <div>
        <h1 id="welcome">
          Hi, {this.props.user.username}!
        </h1>

        <button onClick={this.handleClick}>Write a Haiku</button>
        <HistoryPage />

      </div>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = (reduxState) => {
    return reduxState;
}

  export default connect(mapStateToProps)(withRouter(UserPage));