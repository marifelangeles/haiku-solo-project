import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';



class Pronunciation extends Component {

    getPronunciation = () => {
        const pronunciation = this.props.word.pronunciation;
        if (pronunciation) {
            return pronunciation.all;
        }
    }

    render() {
        return (
            <Grid item sm={6}>
                <p>{this.getPronunciation()}</p>
            </Grid>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
};

export default connect(mapReduxStateToProps)(Pronunciation);
