import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';


class PartOfSpeech extends Component {

    // part of speech not necessary for MVP
    getPartOfSpeech = () => {
        const results = this.props.wordInfo.results;
        if (results && results[0] && results[0].partOfSpeech) {
            return results[0].partOfSpeech
        }
    }
    render() {
        return (
            <Grid item sm={6}>
                <p>{this.getPartOfSpeech()}</p>
            </Grid>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
};

export default connect(mapReduxStateToProps)(PartOfSpeech);
