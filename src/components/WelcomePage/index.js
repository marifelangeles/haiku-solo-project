import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SampleHaiku from './SampleHaiku';
import WriteHaikuButton from './WriteHaikuButton';
import LoginButton from './LoginButton';



class WelcomePage extends Component {

   
    render() {
        return (
            <div>
                <SampleHaiku />
                <WriteHaikuButton />
                <LoginButton />
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

export default connect(mapStateToProps)(withRouter(WelcomePage));