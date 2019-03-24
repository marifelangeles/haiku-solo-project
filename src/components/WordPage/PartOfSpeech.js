import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';


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
            <Typography
                variant="subtitle1" 
                gutterBottom
                align="center"
            >
                {this.getPartOfSpeech()}
            </Typography>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
};

export default connect(mapReduxStateToProps)(PartOfSpeech);
