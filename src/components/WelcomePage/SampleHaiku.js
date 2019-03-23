import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';




class SampleHaiku extends Component {

    render() {
        return (
            <Paper style={{margin: '3rem', padding: '3rem'}}>
                <Typography variant="body1" gutterBottom>Relax, let it go</Typography>
                <Typography variant="body1" gutterBottom>Let creativity flow</Typography>
                <Typography variant="body1" gutterBottom>Start with a word and ...</Typography>
            </Paper>
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