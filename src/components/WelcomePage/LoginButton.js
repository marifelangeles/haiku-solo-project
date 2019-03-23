import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class LoginButton extends Component {

    handleLoginClick = () => {
        console.log('in handleLoginClick');
        // go to login page
        this.props.history.push('/login');
    }

    render() {
        return (
            <div>
                <button onClick={this.handleLoginClick}>Login</button>
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

export default connect(mapStateToProps)(withRouter(LoginButton));