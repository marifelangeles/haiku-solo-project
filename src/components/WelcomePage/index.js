import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';



class WelcomePage extends Component {

    handleWriteClick = () => {
        console.log('in handleClick');
        // get random word before user goes to word page
        this.props.dispatch({ type: 'GET_WORD_INFO' })
        // make sure input field in word page is cleared
        this.props.dispatch({
            type: 'RESET_HAIKU',
            payload: {
                line1: '',
                line2: '',
                line3: '',
                line1Match: false,
                line2Match: false,
                line3Match: false,
            }
        })
        // go to word page
        this.props.history.push('/word');

    }

    handleLoginClick = () => {
        console.log('in handleLoginClick');
        // go to login page
        this.props.history.push('/login');
    }

    render() {
        return (
            <div>
                <div>
                    <p>Relax, let it go.</p>
                    <p>Let creativity flow.</p>
                    <p>Start with a word and ...</p>
                </div>
                <div>
                    <button onClick={this.handleWriteClick}>Write a Haiku</button>
                </div>
                <div>
                    <button onClick={this.handleLoginClick}>Login</button>
                </div>
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