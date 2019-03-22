import React from 'react';
import { connect } from 'react-redux';
import HistoryPage from '../HistoryPage/index';
// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <div>
    <h1 id="welcome">
      Hi { props.user.username },
    </h1>
    {/* <p>Breath, let it go. Let </p>
    <p>yet your creativity flow. </p>
    <p>Start with a word... go.</p>
     */}
    <button>Write a Haiku</button>
    <HistoryPage />
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
