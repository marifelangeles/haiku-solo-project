import React, { Component } from 'react';
import { connect } from 'react-redux';



class SampleHaiku extends Component {

    render() {
        return (
            <div>
                <p>Relax, let it go.</p>
                <p>Let creativity flow.</p>
                <p>Start with a word and ...</p>
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

export default connect(mapStateToProps)(SampleHaiku);