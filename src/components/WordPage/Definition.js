import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';


class Definition extends Component {

    getDefinition = () => {
        const wordResults = this.props.word.results;
        // get random word only if definition exists --> definition needed for MVP
        // if so, return first definition 
        if (wordResults) {
            console.log('wordResults', wordResults);
            const definition = wordResults[0].definition;
            return definition;
        } else {
            this.props.getRandomWord();
        }
    }

    render() {
        return (
            <Grid item sm={12}>
                <p>{this.getDefinition()}</p>
            </Grid>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
};

export default connect(mapReduxStateToProps)(Definition);
