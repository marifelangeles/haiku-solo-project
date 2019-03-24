import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';



class Pronunciation extends Component {

    // pronunciation not necessary for MVP
    getPronunciation = () => {
        const pronunciation = this.props.wordInfo.pronunciation;
        if (pronunciation) {
            return pronunciation.all;
        }
    }
    

    render() {
        return (
            <Typography
                variant="subtitle1" gutterBottom
            >
                {this.getPronunciation()}
            </Typography>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
};

export default connect(mapReduxStateToProps)(Pronunciation);
