import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';


class Definition extends Component {
    
    getDefinition = () => {
        const results = this.props.wordInfo.results;
        if (results && results[0] && results[0].definition) {
            return results[0].definition;
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
